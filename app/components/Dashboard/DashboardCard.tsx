import { authOptions } from '@/app/data/lib/NextAuthOptions';
import { getServerSession } from 'next-auth'
import Link from 'next/link';
import React from 'react'


const DashboardCard = async (props: any) => {
    const session = await getServerSession(authOptions);

  return (
    <div className='bg-slate-200 w-full h-full  lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <div className="lg:w-2/3 xl:w-1/2 2xl:w-2/3  px-5 border-t border-slate-200 h-screen">
            <h2 className='p-2 font-semibold border-2 border-b-yellow-300 '>Personal Information</h2>
            <dl className="divide-y divide-sky-950">
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                    <dd className="textarea mt-1 text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0">{session?.user.name}</dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ">Email address</dt>
                    <dd className="textarea mt-1 text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0">{session?.user.email}</dd>
                </div>
                {session?.user.role == 'admin' ?  <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ">Role</dt>
                    <dd className="textarea mt-1 text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0">{session?.user.role}</dd>
                </div> : null}
               
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ">Status</dt> 
                    <dd className="textarea mt-1 text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0">{session?.user.status}</dd>
                </div>
                <div className=" px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ">Phone Number</dt>
                    <dd className="textarea mt-1 text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0">
                        {session?.user.number}
                    </dd>
                </div>
               
                <div className=' flex justify-center pt-5 '>
                    <Link aria-label='Update user profile' className='btn btn-square w-40 bg-yellow-300 text-sky-950 hover:bg-sky-950 hover:text-yellow-300 hover:scale-110' href={props.href}>Update Profile</Link>
                </div>
            </dl>
      </div>
    </div>
  )
}

export default DashboardCard