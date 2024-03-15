import DashboardImg from "../components/Dashboard/DashboardImg";
import Footer from "../components/Footer/Footer";
import VolunteerNavbar from "../components/VolunteerNavbar/VolunteerNavbar";


export default function VolunteerLayout({children}: any){
    return(
       <>
        <nav>
          <VolunteerNavbar/>
        </nav>
        <div className="">
          <main className="">
            <DashboardImg/>
            {children}
            <Footer/>
          </main>
      </div>
       </>
    )
}