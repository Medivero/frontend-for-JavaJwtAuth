import { useEffect, useState } from "react";
import LoginUser from "../../../services/user/LoginUser";
import RegistartionUser from "../../../services/user/RegistrationUser";

function LoginPage(){
    const [loginState, setLoginState] = useState<any>({});
    const [LogOrRegState, setLogOrRegState] = useState(false); // false = login. true = registration
    const [StartAnimationState,setStartAnimationState] = useState(false);
    const [statePerekluchenie,setPerekluchenie] = useState(false)
    const [isMounting,setIsMounting] = useState(false);
    const getInputLoginForms = async (event:any) => {
        event.preventDefault();
        const login = event.target.login.value;
        const password = event.target.password.value;
        const response =  await LoginUser({
                username: login,
                password: password
        })
        await setLoginState(response);
    }
    const getInputRegistrationForms = async (event: any) => {
        event.preventDefault();
        const login = event.target.login.value;
        const email = event.target.email.value;
        const password = event.target.password.value
        await RegistartionUser({
            username: login,
            email: email,
            password: password
        })
    }

    useEffect(() => {
        console.log(loginState)
    },[loginState])

    useEffect(() => {
        if (isMounting){
            setStartAnimationState(true)
            setTimeout(() => {
                setStartAnimationState(false)
                setLogOrRegState(!LogOrRegState)
            },700)
            setPerekluchenie(false)
        }
        else{
            setIsMounting(true)
        }
    },[statePerekluchenie])
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center text-white">
                <div className={`w-[700px] rounded-[20px] border h-[700px] items-center flex-col flex transition-all duration-500 justify-center`}>
                    {!LogOrRegState ? <div className={`w-full h-full items-center flex-col flex transition-all duration-500 justify-center ${StartAnimationState ? "opacity-0" : ""}`}>
                        <div className="text-[40px] mt-[px]">Already have account?</div>
                        <form onSubmit={getInputLoginForms} className="w-[50%] flex flex-col gap-[20px] mt-[20px]">
                            <div className="rounded-lg border">
                                <input name="login" placeholder="login" type="text" className="rounded-lg p-[10px] w-full border-b"></input>
                                <input name="password" placeholder="password" type="password" className="rounded-lg p-[10px] w-full"></input>
                            </div>
                            <button type="submit" className="text-start border rounded-lg w-[100px] transition-all hover:bg-white hover:text-black duration- cursor-pointer flex justify-center p-[5px]">Log in</button>
                        </form>
                        <span>OR</span>
                        <div className=" mt-[20px]">
                            <span onClick={() => setPerekluchenie(true)} className="cursor-pointer hover:text-gray-400 transition-all duration-200">Create new Account</span>
                        </div> 
                    </div> : 
                    
                        <div className={`w-full h-full items-center flex-col flex transition-all duration-500 justify-center ${StartAnimationState ? "opacity-0" : ""}`}>
                        <div className="text-[40px] mt-[px]">Create new account!</div>
                        <form onSubmit={getInputRegistrationForms} className="w-[50%] flex flex-col gap-[20px] mt-[20px]">
                            <div className="rounded-lg border">
                                <input name="login" placeholder="login" type="text" className="rounded-lg p-[10px] w-full border-b"></input>
                                <input name="email" placeholder="email" type="text" className="rounded-lg p-[10px] w-full border-b"></input>
                                <input name="password" placeholder="password" type="password" className="rounded-lg p-[10px] w-full"></input>
                            </div>
                            <button type="submit" className="text-start border rounded-lg w-[100px] transition-all hover:bg-white hover:text-black duration- cursor-pointer flex justify-center p-[5px]">Create</button>
                        </form>
                        <span>OR</span>
                        <div className=" mt-[20px]">
                            <span onClick={() => setPerekluchenie(true)} className="cursor-pointer hover:text-gray-400 transition-all duration-200">{LogOrRegState ? "Already have account? Log in!" : "Create new account"}</span>
                        </div> 
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default LoginPage;