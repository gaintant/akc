// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token");

  // Allow access to authentication and error pages
  if (pathname === "/login" || pathname === "/error") {
    return NextResponse.next();
  }
  // Check if the token exists and is valid
  if (pathname.startsWith("/admin") || pathname.startsWith("/user")) {
    if (!token) {
      console.log("Token is missing");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      const { payload } = await jwtVerify(
        token.value,
        new TextEncoder().encode(process.env.JWT_SECRET!),
      );
      // Check if the user has an admin role for /verifyuser route
      if (
        (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) &&
        payload.role !== "admin"
      ) {
        return NextResponse.redirect(new URL("/forbidden", req.url));
      }

      // Proceed to the requested page
      return NextResponse.next();
    } catch (err) {
      console.error("Token verification failed:", err);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Proceed to the requested page if no specific rules apply
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/user/:path*",
    "/api/admin/:path*",
    "/api/user/:path*",
  ],
};
