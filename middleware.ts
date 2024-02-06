import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  const allowedIPs = [
    "168.119.157.136",
    "168.119.60.227",
    "138.201.88.124",
    "178.154.197.79",
  ];

  const checkClientIP = requestHeaders.get("x-real-ip") || "";

  if (!allowedIPs.includes(checkClientIP)) {
    return NextResponse.json(
      { 
        success: false, 
        message: "Access denied!",
      },
      { 
        status: 403 
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/payment/status']
}