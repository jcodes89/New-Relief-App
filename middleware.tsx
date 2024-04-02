
// export { default } from "next-auth/middleware";



import {withAuth} from 'next-auth/middleware'
import { NextResponse } from 'next/server';

export default withAuth(function middleware(req){
    if(
        req.nextUrl.pathname.startsWith("/admin") && 
        req.nextauth.token?.role != "admin"
        ) {
            return NextResponse.redirect(new URL('https://new-relief-app.vercel.app/redirect'))
        }
    }, {
    callbacks: {
        authorized: ({token}) => !!token
    }
})

export const config = {
    matcher:[
        
        `/admin/:id/dashboard`,
        `/admin/:id/update-profile`,
        `/admin/:id/view-volunteer`,
        `/admin/:id/view-volunteer/users`,
        `/admin/:id/view-volunteer/users/:id`,   
    
        `/volunteer/:id/dashboard`,
        `/volunteer/:id/update-profile`,
        
    ]
    
}