import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";
import schema from "@/app/schema/schema";




export async function GET(request: NextRequest, {params}: {params: {id: any}}) {
    const getUser = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    });

    if(!getUser){
        return NextResponse.json({error: 'user not found'}, {status: 401})
    }

    return NextResponse.json(
        [
        getUser.email, 
        getUser.name,
        getUser.role,
        getUser.status,
        getUser.number,
        
    ])
}

export async function PUT(request:NextRequest, {params}: {params: {id: any}}) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    
    if (!validation.success){
        return NextResponse.json(validation.error.errors, {status: 401})
    }

    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if (!user){
        return NextResponse.json({
            error: 'user not found'
        }, {
            status: 404
        })
    }
   
    const updatedUser = await prisma.user.update({
        where: {
            id: params.id
        }, 
        data: {
            name: body.name,
            status: body.status,
            number: body.number,
            email: body.email,
            role: body.role,
        }
    })

    return NextResponse.json(updatedUser)
}