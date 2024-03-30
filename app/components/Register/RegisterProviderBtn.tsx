'use client'
import React, {useState, useEffect} from 'react';
import {signIn} from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import googleImg from '@/public/images/7123025_logo_google_g_icon.png'
import Image from 'next/image';


export default function RegisterProviderBtn(props: any){
  const router = useRouter();
  const [credentials, setCredentials] = useState({
          name: '',
          email: '',
          password: ''
  });
       

  async function handleSubmit(e: any){
    e.preventDefault();
    try {
      const res = await axios({
          url: 'http://localhost:3000/api/register',
          method: 'POST',
          data: credentials
      })

      setCredentials({
          name: '',
          email: '',
          password: ''
      })

      router.refresh()
      router.push('/login')      
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
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-sky-950">
            Register and Become a Volunteer
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-sky-950">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name='name'
                  onChange={handleChange}
                  type="name"
                  autoComplete="name"
                  required
                  value={credentials.name}
                  className="block w-full rounded-md border-0 py-1.5 text-sky-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6 px-2  selection:bg-yellow-300 selection:text-sky-950"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 textskytext-sky-9500">
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
                  className="block w-full rounded-md border-0 py-1.5 text-sky-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6 px-2  selection:bg-yellow-300 selection:text-sky-950"
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
                  autoComplete="current-password"
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-sky-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6 px-2  selection:bg-yellow-300 selection:text-sky-950"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6 text-sky-950 shadow-sm hover:bg-sky-950 hover:text-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
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

