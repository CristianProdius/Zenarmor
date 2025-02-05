import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function handleAuthMiddleware(request: NextRequest, redirectPath: string) {
    const isAuthenticated = request.cookies.get("isAuthenticated")?.value === "true";

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL(redirectPath, request.url));
    }

    return NextResponse.next();
}