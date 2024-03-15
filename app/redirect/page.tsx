import React from 'react'
import HomeNavbar from '../components/HomeNavbar/HomeNavbar'
import Link from 'next/link'

export default function redirect(){
  return(
    <>
      <HomeNavbar/>
      <section className='bg-slate-200 h-screen w-screen'>
        <main className='flex flex-col w-screen h-screen justify-center text-sky-950'>
          <div className='bg-yellow-300 self-center p-4 rounded-xl mx-5 my-4 shadow-lg shadow-sky-950 '>
            <div className='m-4'>
              <i className="fa-solid fa-circle-xmark p-4 scale-[5]"></i>
            </div>
            <h2 className='font-extrabold text-[1.5rem] p-2'>You are not authorized to view this page</h2>
            <p className='px-2'>You do not have permission to view this directory or page using the credentials that you supplied.</p>
          </div>
          <div className='bg-yellow-300 self-center p-4 rounded-xl m-4 shadow-lg shadow-sky-950'>
            <h3 className='px-2 font-bold pb-2'>Please try the following:</h3>
            <ol className='px-2'>
                <li className='list-item list-disc'>Contact the Web site administrator if you believe you should be able to view this directory or page.</li>
                <li className='list-item list-disc'>Contact Disaster Relief Administration for further inquiry's.</li>
            </ol>
          </div>
          <Link className='btn btn-link text-sky-950 hover:text-purple-950' href={'/'}>Go back to home page</Link>
        </main>
      </section>
    </>
  )
}
