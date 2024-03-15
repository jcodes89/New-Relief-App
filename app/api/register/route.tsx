
import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/schema/schema";
import prisma from "@/prisma/client";
import bcyrpt from 'bcrypt'


export async function POST(request: NextRequest){

    const body =  await request.json();
    const validation = schema.safeParse(body);
    
    
    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status: 401})
    }

    const {name, email, password} = body
    
    
    if(!name || !email || !password){
        return NextResponse.json('One or more fields is missing')
    }
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    
    if(user){
        return NextResponse.json('A user with these credentials already exists', {status: 400})
    }
    
    const hasedpassword = await bcyrpt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            name,
            email, 
            password: hasedpassword
        }
    })

    return NextResponse.json(newUser, {status: 200})

 
    // if(!user){
    //     console.log('no user exists with these credentials');
        
    //     const newUser = await prisma.user.create({
    //         data: {
    //             name: body.name,
    //             email: body.email,
    //             password: hashedPassword 
    //         }
    //     })

    //     return NextResponse.json(newUser)
    // }
    
    // if(user){
    //     return NextResponse.json(user)
    // }

}