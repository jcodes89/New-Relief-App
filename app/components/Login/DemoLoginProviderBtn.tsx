'use client'
import React, {useState, useEffect} from 'react';
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';



 export default function LoginProviderBtn(props: any){
      const router = useRouter();
      const session = useSession()
      const [credentials, setCredentials] = useState({
              email: process.env.DEMO_EMAIL,
              password: process.env.DEMO_PASSWORD
      });
      
      useEffect(() => {
        router.prefetch('/')
      }, [router])

      async function handleSubmit(e: any){
        e.preventDefault();
        try { 
          const res = await signIn('credentials', {
            ...credentials,
            redirect: true
          
          })
          setCredentials({
              email: '',
              password: ''
          })
          
          if(res?.ok){
            router.refresh()
            router.replace('/')
          } else {
            alert('Incorrect email or password, please try again.')
          }
          

        } catch (error) {
          console.log(error);
        }
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
            Sign in to your demo account
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
                placeholder='admin@gmail.com'
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
                placeholder='adminuser'
                required
                value={credentials.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-sky-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6 px-2  selection:bg-yellow-300 selection:text-sky-950"
              />
            </div>
            </div>
            <div>
                <button
                  aria-label='Login as a demo user'
                  type="submit"
                  className="flex w-full justify-center rounded-md text-sky-950  bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:text-yellow-300 hover:bg-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

