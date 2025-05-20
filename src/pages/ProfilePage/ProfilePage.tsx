import { useEffect, useState } from "react";
import GetUserData from "../../services/user/GetUserData";
import MenuContainer from "../../widgets/header/Menu/MenuContainer";

interface UserDataType{
    email:String,
    id:Number,
    role:String,
    username:String
}

function ProfilePage(){
    const [UserData,setUserData] = useState<UserDataType>()
    useEffect(() => {
        GetUserData().then((data) => {
         setUserData(data)   
        })
    },[])
    const QuitProfile = () => {
        localStorage.removeItem("token")
        window.location.replace("/loginpage");
    }
    return (
        <>
        {!UserData ? <></> : (
            <div className="w-screen h-screen relative">
                <MenuContainer></MenuContainer>
                <div className="flex p-[50px] py-[100px] text-white text-[20px] justify-between">
                    <div className="w-[700px] h-[500px] border rounded-lg p-[20px] flex flex-col" >
                        <span>
                            Username: {UserData.username}
                        </span>
                        <span>
                            Email: {UserData.email}
                        </span>
                    </div>
                    <div className="border w-[500px] h-[100px] rounded-lg p-[20px]">
                        <button onClick={() => QuitProfile()} className="cursor-pointer text-red-500 hover:text-red-700 transition-all">Quit profile</button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default ProfilePage;