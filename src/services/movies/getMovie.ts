import { ApiURL } from "../apisStore";

export default async function getMovie(id:any){
    const res = await fetch(ApiURL+`/movie/getMovieData?id=${id}`,{
        method: "GET",
        headers:{
            "Authorization": "Bearer "+localStorage.getItem("token")
        }
    })
    try {
        if (res.ok){
            const data = await res.json()
            return data;
        }
        else{
            return res.status;
        }
    }
    catch(error){
        console.log(error)
    }
}

