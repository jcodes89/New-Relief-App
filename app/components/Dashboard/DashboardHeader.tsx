import React from 'react'
import { getServerSession } from "next-auth"
import  {authOptions}  from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import userSvg from '../../../public/images/svg/user-solid.svg'

const DashboardHeader = async () => {
    const session = await getServerSession(authOptions);
    
  return (
        <>
            <div className="flex flex-col bg-sky-950 justify-between h-auto items-center">
                <div>
                <Image
                loading='eager'
                className=" h-[7rem] w-[7rem] rounded-badge ring-2 m-3 mb-4 p-2 ring-yellow-300 bg-slate-200 "
                src={userSvg} alt=""
                 />
                
                </div>
                    <div className="m-2 pb-2 font-medium text-yellow-300 text-center">
                        <h2 className="pb-1">
                            Hello {session && <span>{session.user?.name} </span>}
                        </h2>
                        <p>Welcome to your Dashboard</p>
                    </div>
            </div>
        </>
  )
}

export default DashboardHeader