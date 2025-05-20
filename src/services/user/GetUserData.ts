import { ApiURL } from "../apisStore";



async function GetUserData(){
    const res = await fetch(ApiURL+"/user/getUserData", {
        method: "GET",
        headers:{
            "Authorization": "Bearer "+localStorage.getItem("token")
        }
    })
    try{
        if (res.ok){
            const data = await res.json();
            return data;
        }
    }
    catch(error){
        console.log(error);
    }
}

export default GetUserData;