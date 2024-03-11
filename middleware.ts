import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname === "/") {
    return NextResponse.rewrite(new URL("/en", req.url));
  }
}
