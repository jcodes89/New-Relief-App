import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export  async function GET(request: NextRequest){
    const users = await prisma.user.findMany(
    //     {
    //     select: {
    //         firstName: true,
    //         lastName: true,
    //         email: true,
    //         role: true,
    //         active: true, 
    //     }
    // }
    )
  
    if(!users){
        return NextResponse.json('no users found')
    }

    return NextResponse.json(users)

}