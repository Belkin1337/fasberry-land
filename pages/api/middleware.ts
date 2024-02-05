import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const allowedIPs = [
    "168.119.157.136",
    "168.119.60.227",
    "138.201.88.124",
    "178.154.197.79",
    "89.23.177.171",
  ];

  const existingXForwardedFor = request.headers.get("x-forwarded-for") || "";

  const existingIPs = existingXForwardedFor.split(",").map((ip) => ip.trim());

  const isValidIP = existingIPs.every((ip) => allowedIPs.includes(ip));

  if (!isValidIP) {
    return Response.json(
      { success: false, message: "Access denied" },
      { status: 403 }
    );
  }

  const updatedXForwardedFor = `${existingXForwardedFor}, ${allowedIPs.join(
    ", "
  )}`;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-forwarded-for", updatedXForwardedFor);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("x-hello-from-middleware", "hello");

  return response;
}
