import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { cookies: cookiesFromReq } = req
    const cookiesStore = await cookies()


    return NextResponse.json({ 
        cookiesFromReq: cookiesFromReq.get('ajs_anonymous_id'), 
        cookiesFromStore: cookiesStore.get('ajs_anonymous_id') 
    });
}