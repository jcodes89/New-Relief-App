
// import nextAuth, { Awaitable, NextAuthOptions, RequestInternal, User, getServerSession} from "next-auth";
// import GoogleProvider from 'next-auth/providers/google';
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
// import clientPromise from "@/app/data/lib/mongodb";
// import Github from "next-auth/providers/github";
// import prisma from "@/prisma/client";
// import CredentialsProvider from 'next-auth/providers/credentials'
// import bcrypt, { compare, hash } from 'bcrypt'
// import schema from "@/app/schema/schema";
// import { NextResponse } from "next/server";
import nextAuth from 'next-auth'
import {authOptions} from '@/app/data/lib/NextAuthOptions'


// export const authOptions: NextAuthOptions = {
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     CredentialsProvider({
//       id: 'credentials',
//       name: 'Credentials', 
//       type: "credentials",
//       credentials: {}, 
//       async authorize(credentials){
//         //safe parse credentials 
//         const parsedCredentials = schema.safeParse(credentials);
//         if(!parsedCredentials.success){
//           return NextResponse.json('parsed credentials not successful')
//         }

//         const {email, password} = parsedCredentials.data;
//         //check to see if email or password field is provided
//         if(!email || !password){
//           return NextResponse.json('one or more fields is not provided')
//         }
//         //find user 
//         const user = await prisma.user.findUnique({
//           where: {
//             email: email
//           }
//         })
        
//         if(!user){
//           console.log('no user');
          
//           return null
//         }
//         //check to see if the users password provided in the input field comparable to hashed password from database when user registered
//         const isPasswordValid = await bcrypt.compare(password, user.password!);

//         if(isPasswordValid){
//           return user
//         }

//         console.log('password not valid');
//         return null

//       } 
      
//     }),
//     Github({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
    
//     GoogleProvider({
//       profile(profile) {
//         return {
//           id: profile.sub,
//           name: profile.name,
//           email: profile.email,
//           number: profile.number,
//           image: profile.image,
//           role: profile.role ?? 'volunteer',
//           status: profile.status ?? 'active'
//         }
//       },
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code"
//         }
//       },
//     })
//   ], 
//   callbacks: {
//     async jwt({token, user, session, trigger}){
//       if(trigger === 'update' && session.name) {
//         token.name = session.name
      
//       }
//       if(trigger === 'update' && session.status) {
//         token.status = session.status
     
//       }
//       if(trigger === 'update' && session.number) {
//         token.number = session.number
//       }
//       if(trigger === 'update' && session.email){
//         token.email = session.email
//       }

//       if(trigger === 'update' && session.image){
//         token.image = session.image
//       }
//       if(user){
//         token.id = user.id
//         token.email = user.email
//         token.role = user.role
//         token.status = user.status
//         token.number = user.number
//         token.image = user.image
//       }
//        await prisma.user.update({
//         where: {
//           id: token.id
//         }, 
//         data: {
//           name: token.name,
//           email: token.email,
//           status: token.status,
//           number: token.number,
//           image: token.image
//         }
//       })
//       return token
//       //update user in database
//     },
//     async session({session, token, trigger, newSession, user}: any){
//         if(token){
//           session.user.id = token.id
//           session.user.email = token.email
//           session.user.status = token.status
//           session.user.role = token.role
//           session.user.number = token.number
//           session.user.image = token.image
//         }
//          return session
//     },
//   },
//   pages: {
//     signIn: '/login'
//   },
//   session: {
//     strategy: 'jwt'
//   }
// }

const handler = nextAuth(authOptions)

export {handler as GET, handler as POST}