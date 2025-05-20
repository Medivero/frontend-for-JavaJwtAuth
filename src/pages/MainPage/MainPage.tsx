import { useEffect, useState } from "react";
import GetMoviesData from "../../services/getMoviesData";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import HeaderComponent from "../../widgets/header/HeaderComponent";

interface Movie{
    id: Number,
    name: String,
    rating: Number,
    description: String
}


AOS.init()
function MainPage(){
    const [MoviesData,setMoviesData] = useState<Movie[]>([]);
    useEffect(() => {
        GetMoviesData().then((data) => {
            setMoviesData(data)
        })
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
            <div className="text-white flex flex-wrap gap-[20px]">
                {MoviesData.map((item,index) => (
                    <div data-aos="fade-up" data-aos-duration="1000" className={`border p-[20px] h-[400px] w-[${index % 2 === 0 ? "500" : "700" }px] rounded-lg`} key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
        )}
        </>
    )
}

export default MainPage;