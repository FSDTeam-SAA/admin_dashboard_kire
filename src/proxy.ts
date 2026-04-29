// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// const PUBLIC_ROUTES = [
//   "/login",
//   "/signup",
//   "/otp",
//   "/forgot-password",
//   "/reset-password",
// ];

// export async function proxy(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const token = await getToken({
//     req: request,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   const isPublicRoute =
//     PUBLIC_ROUTES.includes(pathname) ||
//     PUBLIC_ROUTES.some((route) => pathname.startsWith(route + "/"));

//   if (isPublicRoute) {
//     if (token) {
//       console.log(
//         "[MIDDLEWARE] Authenticated user trying to access auth page, redirecting to /dashboard",
//       );
//       return NextResponse.redirect(new URL("/dashboard", request.url));
//     }
//     return NextResponse.next();
//   }

//   if (pathname === "/") {
//     return NextResponse.next();
//   }

//   if (!token) {
//     console.log(
//       "[MIDDLEWARE] No token found, user not authenticated. Redirecting from:",
//       pathname,
//     );
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   const userRole = token.role as string;
//   const isAdminUser =
//     userRole === "admin" ||
//     userRole === "businessowner" ||
//     userRole === "staff";

//   if (!isAdminUser) {
//     console.log(
//       "[MIDDLEWARE] User role:",
//       userRole,
//       "not authorized for dashboard. Redirecting to /login",
//     );
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   console.log(
//     "[MIDDLEWARE] User authenticated as:",
//     userRole,
//     "Allowing access to:",
//     pathname,
//   );
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$|public).*)",
//   ],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const PUBLIC_ROUTES = [
  "/login",
  "/signup",
  "/otp",
  "/forgot-password",
  "/reset-password",
  "/unauthorized", // ✅ VERY IMPORTANT
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ skip static + next নিজে
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|css|js)$/)
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isPublicRoute =
    PUBLIC_ROUTES.includes(pathname) ||
    PUBLIC_ROUTES.some((route) => pathname.startsWith(route + "/"));

  // ✅ public route
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // ❌ not logged in
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const userRole = token.role as string;

  // 🔥 ONLY ADMIN
  if (userRole !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
