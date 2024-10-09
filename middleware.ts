import { NextResponse, type NextRequest } from "next/server";
import { OPEN_ROUTES, LOGIN, ROOT, DASHBOARD, SIGNUP } from "./lib/routes";

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const { pathname } = nextUrl;
  const pub =
    OPEN_ROUTES.some((route) => pathname.startsWith(route)) ||
    pathname === ROOT;
  const cookie = cookies.get("token")?.value || null;
  console.log(cookie);
  console.log(pub);
  if (!cookie && !pub) {
    return NextResponse.redirect(new URL(LOGIN, nextUrl.origin));
  }
  if (cookie && [LOGIN, SIGNUP].includes(pathname)) {
    return NextResponse.redirect(new URL(DASHBOARD, nextUrl.origin));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
