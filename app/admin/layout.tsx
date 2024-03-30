import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Script from "next/script";
import Footer from "../components/Footer/Footer";
import DashboardImg from "../components/Dashboard/DashboardImg";



export default function AdminLayout({children}:any){
 
    return(
      <>
      <Script src='https://kit.fontawesome.com/5c59429581.js' async/>
      <nav>
        <AdminNavbar/>
      </nav>
      <div className="bg-slate-200">
        <main className="">
          {/* <DashboardImg/> */}
          {children}
        </main>
        <Footer/>
      </div>
      </>
    )
}