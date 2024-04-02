
import avatar from '@/public/images/svg/user-solid.svg'
import VolunteerCard from "@/app/components/Card/VolunteerCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/data/lib/NextAuthOptions";
import BackToTopBtn from "@/app/components/Buttons/BackToTopBtn";

interface User{
    id: number,
    name: string,
    email: string,
    role: string,
    status: string,
    number: string
    image: string
}

export default async function VolunteerUsers(){
    await getServerSession(authOptions)

    const res = await fetch(`https://new-relief-app.vercel.app/api/admin/dashboard/view-volunteer/users`)
    
    const users: User[] = await res.json()

    return(
        <>
            <section className="">
                <div className=" px-5 border-t border-slate-200">
                    <h2 className='p-2 font-bold border-2 text-xl border-b-yellow-300 text-center text-sky-950'>Volunteers</h2>
                    <main>
                        <ul className="lg:grid  lg:grid-cols-2 xl:grid-cols-3 md:gap-4">
                            {users.map(user => 
                            <li key={user.id}>
                                {user.image ? 
                                <VolunteerCard
                                    id={user.id}
                                    img={user.image}
                                    name={user.name}
                                    email={user.email}
                                    role={user.role}
                                    status={user.status}
                                    number={user.number}
                                /> : 
                                <VolunteerCard
                                    id={user.id}
                                    img={avatar}
                                    name={user.name}
                                    email={user.email}
                                    role={user.role}
                                    status={user.status}
                                    number={user.number}
                                />
                                }
                            </li>)}
                        </ul>  
                    </main>
                </div>
            </section>
            <BackToTopBtn/>
        </>
    )
}