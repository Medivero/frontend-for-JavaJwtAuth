import { ApiURL } from "../apisStore";

export default async function findMovie(name:String){
    const res = await fetch(ApiURL+`/movie/findMovies?name=${name}`,{
        method: "GET",
        headers: {
            "Authorization": "Bearer "+localStorage.getItem("token")
        }
    })
    if (res.ok){
        const data = await res.json();
        return data;
    }

}