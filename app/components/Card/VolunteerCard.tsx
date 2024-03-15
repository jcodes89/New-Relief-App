
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';


const VolunteerCard = (props: any) => {

   



  return (
    <div className="card flex  text-yellow-300 m-4 rounded-lg shadow-lg shadow-sky-950 mb-10 ">
        <div className="card-head flex justify-items-center justify-center bg-sky-950 rounded-t-lg w-full py-2">
            <div className="">
                <Image className='h-[8rem] w-[8rem] rounded-badge ring-2 m-3 ml-5  ring-yellow-300 bg-slate-200' src={props.img} alt="picture of profile image" width={150} height={150}/>
            </div>
        </div>
        <div className="border-t-2 border-yellow-300 bg-slate-200 rounded-b-lg">
            <dl className="text-sky-950">
                <div className="w-full self-center text-center pt-2 ">
                    <h3 className='font-bold font-serif text-base'>{props.name}</h3>
                </div>
                <div className="px-6 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:m-6">
                    <dt className="text-sm font-medium leading-6 ">Email address</dt>
                    <dd className="textarea  text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0 mt-1">{props.email}</dd>
                </div>
                <div className="px-6 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:m-6">
                    <dt className="text-sm font-medium leading-6 ">Role</dt>
                    <dd className="textarea  text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0 mt-1">{props.role}</dd>
                </div>
               
                <div className="px-6 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:m-6">
                    <dt className="text-sm font-medium leading-6 ">Status</dt> 
                    <dd className="textarea text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0 mt-1">{props.status}</dd>
                </div>
                <div className=" px-6 py-1 pb-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:m-6">
                    <dt className="text-sm font-medium leading-6 ">Phone Number</dt>
                    <dd className="textarea text-sm leading-6 text-sky-950 sm:col-span-2 sm:mt-0 mt-1">{props.number}</dd>
                </div>
            </dl> 
            
                
            
        </div>
    </div>
  )
}

export default VolunteerCard