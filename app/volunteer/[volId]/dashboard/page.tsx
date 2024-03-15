import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DashboardCard from "@/app/components/Dashboard/DashboardCard";
import DashboardHeader from "@/app/components/Dashboard/DashboardHeader";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function VolunteerDashboard(){
    const session = await getServerSession(authOptions);
    
    return(
        <div className="">
            <DashboardHeader/>
            <DashboardCard
                href={`/volunteer/${session?.user.id}/update-profile`}
            />
        </div>
    )
}