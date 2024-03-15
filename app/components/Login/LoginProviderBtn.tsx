'use client'
import React, {useState, useEffect} from 'react';
import {signIn} from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import googleImg from '@/public/images/7123025_logo_google_g_icon.png'


 export default function LoginProviderBtn(props: any){
      const router = useRouter();
      const session = useSession()
      const [credentials, setCredentials] = useState({
              email: '',
              password: ''
      });
      
      useEffect(() => {
        router.prefetch('/')
      }, [router])

      async function handleSubmit(e: any){
        e.preventDefault();
        try { 
          const res = await signIn('credentials', {
            ...credentials,
            redirect: false
          
          })
          setCredentials({
              email: '',
              password: ''
          })
          
          if(res?.ok){
            router.push('/')
          }

          
          
        } catch (error) {
          console.log(error);
        }
      }

      function handleClick(){
        signIn('google', {callbackUrl: '/'})
      }

      function handleChange(e: any){
        const {value, name} = e.target
        
        setCredentials((prevValue) => {
               return{
                ...prevValue,
                [name]: value
               }
        })        
      }



  return (
    <section className='flex flex-col justify-center items-center h-screen w-screen bg-slate-200'>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-sky-950">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-sky-950">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name='email'
                onChange={handleChange}
                type="email"
                autoComplete="email"
                required
                value={credentials.email}
                className="block w-full rounded-md border-0 py-1.5 text-sky-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300  sm:text-sm sm:leading-6 px-2 selection:bg-yellow-300 selection:text-sky-950"
              />
            </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-sky-950">
                  Password
                </label>
              </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                value={credentials.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-sky-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6 px-2  selection:bg-yellow-300 selection:text-sky-950"
              />
            </div>
            </div>
              <div className="text-sm">
                <p>If you are not a member yet {<Link className="font-semibold text-indigo-500 hover:text-red-500" href={'/register'}>Register Here</Link>}</p>
              </div>
            <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md text-sky-950  bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:text-yellow-300 hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            </div>
          </form>
        </div>
        <div className='text-center'>
          <div className='text-center my-5 text-sky-950 font-medium border-b-2 border-sky-9'>
            <span className=''>-</span>
              <span className='px-1 font-semibold'>OR</span>
            <span className=''>-</span>
          </div>
          <button className='btn btn-circle bg-white w-auto px-4 hover:bg-black hover:text-white' onClick={handleClick}>
            <Image src={googleImg} alt='image of google logo'/>
            Sign in with Google
          </button>
        </div>
      </div>
    </section>
  )
}

