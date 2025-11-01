
import { NextResponse } from "next/server"


export function middleware(request){
    const token = request.cookies.get("token")?.value

    if(token){
        return NextResponse.next()
    }
    const url = new URL(request.url)
    url.pathname = "/loging"

    return NextResponse.redirect(url.toString())
}



export const config = {
    matcher : ["/dashbord/:path*"]
}