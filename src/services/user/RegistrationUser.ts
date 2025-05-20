import { ApiURL } from "../apisStore";

interface RegistartionUserType{
    username: String,
    email: String,
    password: String
}

async function RegistartionUser(RegistartionForm:RegistartionUserType){
    const res = await fetch(ApiURL+"/user/registrationUser",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(RegistartionForm)
    })
    try{
        if (res.ok){
            const data = await res.json();
            await localStorage.setItem("token",data.token)
            window.location.replace("/");
            return true
        }
        else{
            return false
        }
    }
    catch(error){
        console.log(error)
    }
}

export default RegistartionUser;