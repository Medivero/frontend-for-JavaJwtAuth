import { ApiURL } from "../apisStore";

async function GetMoviesData(){
    const res = await fetch(ApiURL+"/movie/getAllMovies",{
        method: "GET",
        headers: {
            "Authorization": "Bearer "+localStorage.getItem("token")
        }
    })
    const data = await res.json();
    return data;
}

export default GetMoviesData;