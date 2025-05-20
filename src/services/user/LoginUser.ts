import { ApiURL } from "../apisStore";

interface LoginFormType{
    username: String,
    password: String
}

async function LoginUser(LoginForm:LoginFormType){
    const res = await fetch(ApiURL+"/user/loginUser",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json',
         "Authorization": "Bearer "
        },
        body: JSON.stringify(LoginForm)
    })
    try{
        if (res.ok){
            const data = await res.json();
            await localStorage.setItem("token",data.token);
            window.location.replace("/")
            return true
        }
        else{
            return false
        }
    }
    catch(error){
        console.error(error)
    }
}
export default LoginUser;