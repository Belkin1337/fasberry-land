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

  const existingXForwardedFor = requestHeaders.get("x-real-ip") || "";
  const existingIPs = existingXForwardedFor.split(",").map((ip) => ip.trim());
  const isValidIP = existingIPs.every((ip) => allowedIPs.includes(ip));

  if (!isValidIP) {
    return Response.json(
      { 
        success: false, 
        message: "Access denied!" 
      },
      { 
        status: 403 
      }
    );
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: ['/api/status']
}
