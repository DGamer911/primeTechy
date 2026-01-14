import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import profile from "../assets/profile.png";
import { ChevronRightIcon, Package, Mail, MessageSquareMoreIcon, Heart, Search, Wallet, Phone, HelpCircle, Info, NotebookPenIcon} from "lucide-react";
import Footer from "../components/Footer";
import logo from "../assets/Logo.svg"


const Dashboard = () => {
  const name="David"
  const options = "bg-secondary px-2 py-3 rounded justify-content-between align-items-center d-flex"
  const size=18
  const optionStyle ="d-flex gap-1 align-items-center justify-content center"
  return (
    <div className="bg-white  w-100 text-light align-items-center d-flex flex-column">
      <Header />
      <Navbar/>
      <Banner BannerText={"Dashboard"} />
      <div className="d-flex my-3 p-lg-4 gap-3 flex-wrap w-75 dashboard">
         <div className="profile flex-grow-1 bg-dark border border-white rounded p-2 py-4">
          <div className="profileBody d-flex flex-column align-items-center">
            <img src={profile} alt="" />
            <h2 style={{fontFamily: "times-new-roman"}} className="m-0 ">Hi <span style={{fontFamily: "times-new-roman"}} className="text-warning fw-bold">{name}</span></h2>
            <span className="text-white fs-6 ">David Obielodan Akinyomola</span>
            <span className="text-white fs-6 mb-2">davidobielodan@gmail.com</span>
          </div>
          <div className="options">
            <ul className="list-unstyled px-4 gap-1 d-flex flex-column">
              <li className={options}><span>Edit Profile</span><ChevronRightIcon/></li>
              <li className={options}><span>Address Book</span><ChevronRightIcon/></li>
              <li className={options}><span>Logout</span><ChevronRightIcon/></li>
              <li className={options}><span>Delete Account</span><ChevronRightIcon/></li>
            </ul>
          </div>
        </div>
        <div className="menus flex-grow-1 bg-dark border border-white rounded py-2 px-4">
          <div className="border-bottom mt-3">
          <span className="fs-5">My Prime Account</span>

          </div>
                      <ul className="list-unstyled mt-3 px-2 gap-1 d-flex flex-column">
              <li className={options}><div className={optionStyle}><Package size={size}/><span>Order</span></div><ChevronRightIcon/></li>
              <li className={options}><div className={optionStyle}><Mail size={size}/><span>Inbox</span></div><ChevronRightIcon/></li>
              <li className={options}><div className={optionStyle}><MessageSquareMoreIcon size={size}/><span>Ratings & Reviews</span></div><ChevronRightIcon/></li>
              <li className={options}><div className={optionStyle}><Heart size={size}/><span>Favorites</span></div><ChevronRightIcon/></li>
              <li className={options}><div className={optionStyle}><Wallet size={size}/><span>Prime Wallet</span></div><ChevronRightIcon/></li>
            
              <li className={options}><div className={optionStyle}><Search size={size}/><span>Recently Searched</span></div><ChevronRightIcon/></li>
            </ul>
        </div>
       <div className="company-support flex-grow-1 bg-dark border border-white rounded py-2 px-4">
         <div className="border-bottom mt-3">
          <span className="fs-5">Company & Support</span>

          </div>
                      <ul className="list-unstyled mt-3 px-2 gap-1 d-flex flex-column">
              <li className={options}><div className={optionStyle}><Phone size={size}/><span>Contact Us</span></div><ChevronRightIcon/></li>
              <li className={options}><div className={optionStyle}><HelpCircle size={size}/><span>Help Center</span></div><ChevronRightIcon/></li>
              <li className={options}><div className={optionStyle}><Info size={size}/><span>About</span></div><ChevronRightIcon/></li>
              <li className={options}><div className={optionStyle}><NotebookPenIcon size={size}/><span>Privacy Policy</span></div><ChevronRightIcon/></li>
              <li className={options}><div className={optionStyle}><NotebookPenIcon size={size}/><span>Terms & Conditions</span></div><ChevronRightIcon/></li>
            
              <li className={options}><div className={optionStyle}><img height={18} src={logo}/><span>Prime Studios</span></div><ChevronRightIcon/></li>
            </ul>
       </div>
      </div>
      <Footer/>

    </div>
  );
};

export default Dashboard;
