import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import {useEffect } from "react";
import LoginPage from "./loginpage/LoginPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MoviePage from "../../pages/MoviePage/MoviePage";
import pingServer from "../../services/pingServer";
import ServerIsDownPage from "./ErrorPages/ServerIsDown";

export default function RoutesPaths(){
    useEffect(() => {
        pingServer().then((res) => {
            console.log(res)
            if (res){
                if (!localStorage.getItem("token") && window.location.pathname !== "/loginpage"){
                    window.location.replace("/loginpage")
                }
            }
            else if (!res && window.location.pathname !== "/serverIsDown"){
                window.location.replace("/serverIsDown")
            }
        })
            
        
    },[])
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/loginpage" element={<LoginPage></LoginPage>}></Route>
            <Route path="/serverIsDown" element={<ServerIsDownPage></ServerIsDownPage>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
            <Route path="/movie/:id" element={<MoviePage></MoviePage>}></Route>
        </Routes>
       
        </BrowserRouter>
    )
}