import { useEffect, useState } from "react";

function MenuContainer(){
    const [stateOfMenu,setStateOfMenu] = useState(false);
    const [randomDirection,setRandomDirection] = useState(false);
    useEffect(() => {
        setRandomDirection(Math.random() >= 0.5 ? true : false)
    },[stateOfMenu])
    return (
        <>
        <div className="z-10 relative">
            <div style={{transform: `translateX(${stateOfMenu ? "0" : "-100"}%)`}} className={`fixed duration-700 top-0 transition-all bg-gray-800 w-[400px] h-screen`}>
                <div className="flex flex-col mt-[100px] px-[40px] text-[26px]">
                    <a href="/">FILMFINDER</a>
                    <a href={`/profile/`}><span>PROFILE</span></a>
                </div>
            </div>
            <div className="fixed left-0 top-0 ml-[50px] mt-[20px] z-10">
                <button onClick={() => setStateOfMenu(!stateOfMenu)} className="flex cursor-pointer flex-col leading-[10px] text-[40px]">
                    <span className={`scale-x-[250%] transition-all duration-500`} style={{transform: `translateX(${stateOfMenu ? `${randomDirection ? "-" : ""}20%` : "0"})`}}>-</span>
                    <span className="scale-x-[250%]">-</span>
                    <span className={`scale-x-[250%] transition-all duration-500`} style={{transform: `translateX(${stateOfMenu ? `${randomDirection ? "" : "-"}20%` : "0"})`}}>-</span>
                </button>
            </div>
            
        </div>
        </>
    )
}

export default MenuContainer;