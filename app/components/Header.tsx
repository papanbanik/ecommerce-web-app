import { FaFacebook,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";

 const Header=()=>{
    return (
       <div className="max-sm:hidden lg:border-b border-gray-200 ">
        <div className="container py-5">
            <div className="hidden sm:flex justify-between items-center">
                <div className="flex flex-row gap-1">
                    <div className="header_top_icon_wrapper">
                        <FaFacebook/>
                    </div>
                    <div className="header_top_icon_wrapper">
                        <FaInstagram/>
                    </div>
                    <div className="header_top_icon_wrapper">
                        <FaLinkedin/>
                    </div>
                    <div className="header_top_icon_wrapper">
                        <FaTwitter/>
                    </div>
                </div>

               <div className="text-gray-500 text-[12px">
                FREE SHIPPING  THIS WEEK ORDER OVER -55$
               </div>
            
                <div className="flex gap-4">

                    <select className="text-gray-500 text-[12px] w-[70px]" 
                     defaultValue="USD $"
                     id="currency">
                     <option value="USD $">USD $</option>
                     <option value="EUR €">EUR €</option>
                     <option value="INR">INR </option>
                     </select>
                
                    <select className="text-gray-500 text-[12px] w-[70px]" 
                    defaultValue="English" 
                     id="language">
                        <option value="English">English</option>
                        <option value="Frence">French</option>
                    </select>
                </div>

            </div>
        </div>
       </div>
    )
}
export default Header;