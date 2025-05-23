import { ApiURL } from "./apisStore";

export default async function pingServer(){

try{
    const res = await fetch(ApiURL + "/serverapi/ping", {
        method: "GET"
    })
    if (res.ok){
            return true;
        }
    }
    catch(error){
        console.error(error)
        return false
    }
    
}