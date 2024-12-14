import { NextRequest, NextResponse } from "next/server";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export async function GET() {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return new NextResponse(null, {
      status: 200,
    });
  }
  return new NextRequest(null, { status: 403 });
}

// const onApiRouteClick = ()=>{
//     fetch("/api/admin")
//     .then((response)=>{
//         if(response.ok){
//             console.log("OKAY")
//         } else {
//             console.log("FORBIDDEN")
//         }
//     })
// }
