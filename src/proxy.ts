import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const adminOnlyRoutes = [
  "/",
  "/businesse-management",
  "/commission-plan",
  "/payment-history",
  "/setting",
  "/subscription-promotion",
  "/user-management",
];

const authRoutes = ["/login", "/otp", "/forgot-password", "/reset-password"];

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  const isGuest = !token;
  const userRole = token?.role?.toLowerCase();

  const isDashboard = pathname === "/";

  const isProtectedRoute =
    isDashboard ||
    adminOnlyRoutes.some(
      (route) => route !== "/" && pathname.startsWith(route),
    );

  if (isGuest && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (!isGuest && isProtectedRoute && userRole !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (!isGuest && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
