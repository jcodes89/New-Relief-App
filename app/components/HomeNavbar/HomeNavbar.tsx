import Link from "next/link";
import Image from "next/image";
import logoPic from '../../../public/images/disaster.png'
import { getServerSession } from "next-auth";
import  authOptions  from "@/app/api/auth/[...nextauth]/options";




export default async function HomeNavbar() {
    const session = await getServerSession(authOptions);

    if(session?.user && session.user.role == 'admin'){
        return (
            <>
            <nav className='navbar p-2 justify-between bg-slate-100' >
                <div>
                    <Link href={'/'}>
                        <Image className=" w-auto h-auto" src={logoPic} width={100} height={100} alt="picture of logo"/>
                    </Link>
                </div>
    
                <div className="">
                    <Link className='max-[639px]:hidden btn m-0 bg-yellow-300 hover:bg-sky-950  hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950 ' href={`/admin/${session.user.id}/dashboard`} >Admin Dashboard</Link>
                    <Link className='max-[639px]:hidden btn m-0 bg-yellow-300 hover:bg-sky-950 mx-5 hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950 ' href={'/api/auth/signout'} >Sign Out</Link>
                </div>

                <div className="dropdown dropdown-bottom dropdown-end sm:hidden ">
                    <div tabIndex={0} role="button" className="fa-solid fa-bars mx-4 scale-150 text-sky-950"></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 rounded-box w-40">
                            <li><Link className=' btn p-4 bg-yellow-300 border-sky-950 hover:bg-sky-950  hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950' href={`/admin/${session.user.id}/dashboard`}>Dashboard</Link></li>
                            <li><Link className=' btn p-4 bg-yellow-300 border-sky-950 hover:bg-sky-950  hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950' href={'/api/auth/signout'}>Sign Out</Link></li>
                        </ul>
                    </div>
            </nav>
            </>
        ) 
    } else if(session?.user && session.user.role == 'volunteer') {
        return (
            <>
            <nav className='navbar p-2 justify-between bg-slate-100' >
                <div>
                    <Link href={'/'}>
                        <Image className="" src={logoPic}width={100} height={100} alt="picture of logo"/>
                    </Link>
                </div>
    
                <div>
                    <Link className='max-[639px]:hidden btn m-0 bg-yellow-300 hover:bg-sky-950  hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950 ' href={`/volunteer/${session.user.id}/dashboard`} >Volunteer Dashboard</Link>
                    <Link className='max-[639px]:hidden btn m-0 bg-yellow-300 hover:bg-sky-950 mx-5 hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950 ' href={'/api/auth/signout'} >Sign Out</Link>
                </div>

                <div className="dropdown dropdown-bottom dropdown-end sm:hidden ">
                    <div tabIndex={0} role="button" className="fa-solid fa-bars mx-4 scale-150 text-sky-950"></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 rounded-box w-40">
                            <li><Link className=' btn p-4 bg-yellow-300 border-sky-950 hover:bg-sky-950  hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950' href={`/volunteer/${session.user.id}/dashboard`}>Volunteer Dashboard</Link></li>
                            <li><Link className=' btn p-4 bg-yellow-300 border-sky-950 hover:bg-sky-950  hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950' href={'/api/auth/signout'}>Sign Out</Link></li>
                        </ul>
                    </div>
            </nav>
            </>
        ) 
    } else{
        return (
            <>
            <nav className='navbar p-2 justify-between bg-slate-100' >
                <Link href={'/'}>
                    <Image className="" src={logoPic}width={100} height={100} alt="picture of logo"/>
                </Link>
                <div>

                <Link className='max-[639px]:hidden btn m-0 bg-yellow-300 hover:bg-sky-950 mx-2 hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950 ' href={'/login'} >Sign In</Link>
                <Link className='max-[639px]:hidden btn m-0 bg-yellow-300 hover:bg-sky-950demo-login hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950 ' href={'/demo-login'} >Demo Sign In</Link>
                </div>
                
                <div className="dropdown dropdown-bottom dropdown-end sm:hidden ">
                    <div tabIndex={0} role="button" className="fa-solid fa-bars mx-4 scale-150 text-sky-950"></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 rounded-box w-40">
                            <li><Link className=' btn p-4 bg-yellow-300 border-sky-950 hover:bg-sky-950  hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950' href={'/login'}>Sign In</Link></li>
                            <li><Link className=' btn p-4 bg-yellow-300 border-sky-950 hover:bg-sky-950  hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950' href={'/demo-login'}>Demo Sign In</Link></li>
                        </ul>
                    </div>
            </nav>
            </>
        )
    }
}