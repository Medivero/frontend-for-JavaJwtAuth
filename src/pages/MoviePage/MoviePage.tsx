import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovie from "../../services/movies/getMovie";
import { Movie } from "../../services/interfaces/Interfaces";
import MenuContainer from "../../widgets/header/Menu/MenuContainer";

function MoviePage(){
    const {id} = useParams();
    const [MovieData,setMovieData] = useState<Movie>()
    useEffect(() => {
        getMovie(id).then((data) => setMovieData(data))
    },[])
    return (
        <>
            <div className="text-white w-full flex flex-col relative">
                <MenuContainer></MenuContainer>
                <div className="relative w-full h-full flex">
                    <div className="absolute  w-full h-full z-1 bg-gradient-to-b to-black"></div>
                    <img src={MovieData?.imagelink} alt="" />
                    <div className="w-full p-[50px] bottom-[100px] absolute z-2 whitespace-nowrap overflow-hidden">
                        <span className="text-[64px] font-serif font-bold mix-blend-difference">{MovieData?.name}</span>
                    </div>
                </div>
                <div className="w-[70%] px-[20px]">
                    <span>{MovieData?.description}</span>
                </div>
            </div>
        </>
    )
}

export default MoviePage;