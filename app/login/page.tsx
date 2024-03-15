
import HomeNavbar from "../components/HomeNavbar/HomeNavbar"
import LoginProviderBtn from "../components/Login/LoginProviderBtn"




export default async function LoginPage() {
    return (
        <div>
            <HomeNavbar/>
            
            <LoginProviderBtn/>
        </div>
    )
}
///need to customize auth js redirect callback and implement an on submit 
//user is logged in and button on login page changes from sign in to you are logged in but once user is logged in it does not redirect to url 
//also email btn does not sign in with any click but it does need a data type field that holds the email so when the button is clicked it sends an email to that user.