import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const host = request.headers.get("host");

  if (host === "www.ivistaz.com") {
    url.hostname = "ivistaz.com";
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};

