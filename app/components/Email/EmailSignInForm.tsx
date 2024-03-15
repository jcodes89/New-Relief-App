'use client'

import React from 'react'
import {signIn} from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export default function EmailSignInForm(){
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    async function handleSubmit(event: any){
        event.preventDefault();
        const formData = new FormData(event.target)
        const email = formData.get('email')
        signIn('resend', {email, callbackUrl})
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input id='email' name='email' type='email' placeholder='Sign in with your email' autoComplete='email' required></input>
                <button className='btn btn-circle bg-yellow-300 w-auto p-3 mb-5 mt-2' type='submit'  >
                            Sign in with email
                    </button>
            </form>

            {/* <form action={'http://localhost:3000/api/auth/signin/email'} method='POST'>
                    
                    <input className='p-3 rounded-md placeholder:text-sky-950 font-extralight font-sans' type='email' placeholder='Your Email' name='email' id='email'/>
                    <button className='btn btn-circle bg-yellow-300 w-auto p-3 mb-5 mt-2' onClick={() => signIn('resend', {callbackUrl: '/'})} >
                            Sign in with email
                    </button>
            </form>     */}
        
        </>
    )
}