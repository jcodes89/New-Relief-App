import { authOptions } from "@/app/data/lib/NextAuthOptions";
import DashboardCard from "@/app/components/Dashboard/DashboardCard";
import DashboardHeader from "@/app/components/Dashboard/DashboardHeader";
import { getServerSession } from "next-auth";


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