import { useEffect, useState } from "react";
import GetMoviesData from "../../services/movies/getMoviesData";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import HeaderComponent from "../../widgets/header/HeaderComponent";
import { Movie } from "../../services/interfaces/Interfaces";
import SearchComponent from "./SearchComponent";
const shadows = [
 '0px 15px 50px 15px rgba(251, 191, 36, 0.5)',
 '0px 15px 50px 15px rgba(248, 113, 113, 0.5)',
 '0px 15px 50px 15px rgba(96, 165, 250, 0.5)',
];



AOS.init()
function MainPage(){
    const [MoviesData,setMoviesData] = useState<Movie[]>([]);
    const [shadowColor,setShadowColors] = useState(shadows[0]);
    useEffect(() => {
        GetMoviesData().then((data) => {
            setMoviesData(data)
        })
    },[])
    useEffect(() => {
        let k = 0;
        setInterval(() => {
            setShadowColors(shadows[k%shadows.length]);
            k++;
        },2000)
    },[])
    return (
        <>
        <HeaderComponent></HeaderComponent>
        {MoviesData.length === 0 ? (
            <>
                <div>

                </div>
            </>
        ) : (
            <div className="text-white flex-col relative z-2 flex justify-center gap-[10px] px-[40px]" >
                <div className="">
                    <SearchComponent></SearchComponent>
                </div>
                <div className="w-full border-b rounded-[50px] h-[20px]"></div>
                <div className="flex flex-wrap w-[100%] mt-[20px] transition-all duration-3000 rounded-lg gap-[20px]" style={{ boxShadow: shadowColor }}>
                {MoviesData.map((item,index) => (
                    <a href={`/movie/${item.id}`} data-aos="fade-up" data-aos-duration="1000" className={`
                        flex-col flex p-[20px] h-[400px] w-[${index % 2 === 0 ? "500" : "700" }px] transition-all
                        rounded-lg`} key={item.id}>
                        <img className={` transition-all duration-1000`} loading="lazy" src={item.imagelink}></img>
                        <span className="text-[36px]">{item.name}</span>
                        <span>{item.description}</span>
                    </a>
                ))}
                </div>
            </div>
        )}
        </>
    )
}

export default MainPage;