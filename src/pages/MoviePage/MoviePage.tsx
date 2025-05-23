import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovie from "../../services/movies/getMovie";
import { Movie } from "../../services/interfaces/Interfaces";
import MenuContainer from "../../widgets/header/Menu/MenuContainer";

function MoviePage(){
    const {id} = useParams();
    const [MovieData,setMovieData] = useState<Movie>()
    useEffect(() => {
        getMovie(id).then((data) => setMovieData(data)).then(() => {
            console.log(MovieData)
        })
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
                <div className=" px-[20px] flex flex-col mt-[20px]">
                    <div className="flex flex-col w-full ">
                        <span className="text-[64px] rounded-[20px] border p-[20px]">Description</span>
                        <span className="text-[35px]">{MovieData?.description}</span>
                    </div>
                    <span>Rating: {MovieData?.rating}</span>
                </div>
            </div>
        </>
    )
}

export default MoviePage;