import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { handleAuthMiddleware } from "./src/utils/middlewareUtils";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/auth/profile")) {
        return handleAuthMiddleware(request, "/login");
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/auth/profile"], // Apply middleware to these paths
};