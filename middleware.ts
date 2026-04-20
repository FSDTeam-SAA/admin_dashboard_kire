// middleware.ts - Root level middleware for auth protection
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
// ONLY these routes are accessible without login
const PUBLIC_ROUTES = [
  "/login",
  "/signup",
  "/otp",
  "/forgot-password",
  "/reset-password",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  try {
    // Get the token from the request
    const token = await getToken({
      req: request,
      secret: NEXTAUTH_SECRET,
    });

    // Check if route is public (login, signup, otp, etc.)
    const isPublicRoute = PUBLIC_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(route + "/"),
    );

    // CASE 1: Public auth routes - allow everyone
    if (isPublicRoute) {
      // If user is already authenticated, redirect them to dashboard
      if (token) {
        console.log(
          "[MIDDLEWARE] ✅ User already logged in. Redirecting /login → /dashboard",
        );
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      // Allow guest access to login/auth pages
      console.log(
        "[MIDDLEWARE] ✅ Guest accessing public auth route:",
        pathname,
      );
      return NextResponse.next();
    }

    // CASE 2: Protected routes (everything else including "/" and "/dashboard")
    // If no token, user not authenticated
    if (!token) {
      console.log(
        "[MIDDLEWARE] ❌ No token found. Redirecting:",
        pathname,
        "→ /login",
      );
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Check user role - ONLY admin, businessowner, staff allowed
    const userRole = token.role as string;
    const isAuthorized =
      userRole === "admin" ||
      userRole === "businessowner" ||
      userRole === "staff";

    if (!isAuthorized) {
      console.log(
        "[MIDDLEWARE] ❌ Unauthorized role:",
        userRole,
        "Redirecting:",
        pathname,
        "→ /login",
      );
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // User is authenticated and has admin role
    console.log("[MIDDLEWARE] ✅ Allowed access:", pathname, "Role:", userRole);
    return NextResponse.next();
  } catch (error) {
    console.error("[MIDDLEWARE] Error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    // Apply middleware to all routes except:
    // - api routes
    // - next internals
    // - static files
    "/((?!api|_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};
