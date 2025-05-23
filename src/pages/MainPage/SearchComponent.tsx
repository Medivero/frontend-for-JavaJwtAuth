import { useEffect, useState } from "react";
import findMovie from "../../services/movies/findMovie";
import { Movie } from "../../services/interfaces/Interfaces";



function SearchComponent(){
    const [inputValue,setInputValue] = useState("")
    const [foundMovies,setFoundMovies] = useState<Movie[]>([])
    const [isMounted,setIsMounted] = useState(false);
    const getInputForm = (event:any) => {
        const name = event.target.value;
        setInputValue(name);
    }
    useEffect(() => {
        if (isMounted){
            findMovie(inputValue).then((data) => {
                if (data){
                    if (inputValue === ""){
                        setFoundMovies([])
                    }
                    else{
                        setFoundMovies(data)
                    }
                }
                else {
                    setFoundMovies([])
                }
                
            })
        }
        else{
            setIsMounted(true)
        }
    },[inputValue])
    return (
        <>
        <div className="flex relative z-0 w-[700px] ">
            <form onInput={getInputForm} className="text-[25px] relative z-0">
                <input className="w-[700px] relative z-0" name="name" placeholder="Find your movie!"></input>
            </form>
            <div className={`absolute w-full mt-[50px] bg-black border rounded-lg transition-all px-[20px] ${foundMovies.length === 0 ? "opacity-0" : ""}`}>
                {foundMovies.map((item) => (
                    <a href={`/movie/${item.id}`} className="text-[25px] flex flex-col relative z-5" key={item.id}>
                        <a>{item.name}</a>
                        <span>{"★".repeat(item.rating)}</span>
                        <div className="border-b"></div>
                    </a>
                ))}
            </div>
        </div>
        </>
    )
}

export default SearchComponent;