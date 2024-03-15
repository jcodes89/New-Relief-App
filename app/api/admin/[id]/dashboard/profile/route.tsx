import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";
import schema from "@/app/schema/schema";
import { error } from "console";

export async function GET(request: NextRequest, {params}: {params: {id:any}}) {
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if (!user) {
        return NextResponse.json({error: 'no user found'})
    }

    return NextResponse.json(user)
}

export async function POST(request: NextRequest, {params}: {params: {id: any}}){
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status: 400,})
    }

    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if(!user){
        return NextResponse.json('no user exists')
    }

    const updateUser = await prisma.user.create({
        
        data: {
            name: body.name,
            email: body.email, 
            role: body.role,
            status: body.status,
            number: body.number,
        }
    })

    return NextResponse.json(updateUser)
}

export async function PATCH(request: NextRequest, {params}: {params: {id: any}}){
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status: 400,})
    }

    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if(!user){
        return NextResponse.json('no user exists')
    }

    const updateUser = await prisma.user.update({
        where: {
            id: params.id
        },
        data: {
            name: body.name,
            email: body.email, 
            role: body.role,
            status: body.status,
            number: body.number,
        }
    })

    return NextResponse.json(updateUser)
}