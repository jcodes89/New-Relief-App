import  {authOptions}  from "@/app/api/auth/[...nextauth]/route";
import DashboardHeader from "@/app/components/Dashboard/DashboardHeader";
import { getServerSession } from "next-auth";
import React from "react";
// import UserIdPage from "../main/[id]/dashboard/page";
import Link from "next/link";
import DashboardCard from "@/app/components/Dashboard/DashboardCard";
import Footer from "@/app/components/Footer/Footer";
import ReactCrop from 'react-image-crop'


export default async function AdminDashboard(id: any){
    const session = await getServerSession(authOptions);
  
    return(
        <div className="">
            <DashboardHeader/>
            <DashboardCard
                href={`/admin/${session?.user.id}/update-profile`}
            />
        </div>
    )
}
 