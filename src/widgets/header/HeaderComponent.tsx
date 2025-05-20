import MenuContainer from "./Menu/MenuContainer";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import GetUserData from "../../services/user/GetUserData";
import { useEffect, useState } from "react";

AOS.init();

function HeaderComponent(){
    const [username,setUsername] = useState();
    useEffect(() => {
        GetUserData().then((data) => {
            setUsername(data.username)
        })
    },[])
    return (
        <div className="w-full h-[200px] text-white relative">
            <div className="w-full h-full flex justify-center items-center">
                <span data-aos="fade-up" data-aos-duration="600" className="text-[100px] font-bold tracking-wide text-shadow-amber-700">FILMFINDER</span>
            </div>
            <MenuContainer></MenuContainer>
            {username ?  <span className="absolute text-white right-0 top-0 px-[50px] py-[20px] text-[20px] border rounded-lg">{username}</span> : ""}
        </div>
    )
}

export default HeaderComponent;