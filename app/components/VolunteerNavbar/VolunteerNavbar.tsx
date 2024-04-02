import Link from "next/link";
import styles from './AdminNavbar.module.css'
import Script from "next/script";
import { NavBtn } from "../Links/NavBtn";
import Image from "next/image";
import logoPic from '../../../public/images/disaster.png'
import { getServerSession } from "next-auth";
import  authOptions  from "@/app/api/auth/[...nextauth]/options";

export default async function AdminNavbar(id: any) {
    const session = await getServerSession(authOptions)
    return (
        <>
        <Script src='https://kit.fontawesome.com/5c59429581.js' async/>
        <nav className='navbar  justify-between bg-slate-100' >
            <div>
            <Link className="" href={'/'}>
                <Image priority className="" height={100} width={100} src={logoPic}alt="picture of logo"/>
            </Link>
            </div>
            <div>
                <NavBtn
                    href={`/volunteer/${session?.user.id}/dashboard`}
                    link='Dashboard'
                    details='link to dashboard'
                />
                <NavBtn
                    href='/api/auth/signout'
                    link='Sign Out'
                    details='link to sign out of account'
                />
            </div>
            <div className="dropdown dropdown-bottom dropdown-end sm:hidden ">
            <div tabIndex={0} role="button" className=" fa-solid fa-bars mx-4 scale-150 text-sky-950"></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 rounded-box w-40">
                    <li><Link aria-details="link to dashboard" className='place-content-center btn my-[.1rem] bg-yellow-300 hover:bg-sky-950 hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950 ' href={`/volunteer/${session?.user.id}/dashboard`}>Dashboard</Link></li>
                    <li><Link aria-details="link to sign out of account" className='place-content-center btn my-[.1rem] bg-yellow-300 hover:bg-sky-950 hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950 ' href={`/api/auth/signout`}>Sign Out</Link></li>
                </ul>
            </div>
        </nav>
        </>
    )
}