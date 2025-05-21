import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import {useEffect } from "react";
import LoginPage from "./loginpage/LoginPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import MoviePage from "../../pages/MoviePage/MoviePage";

export default function RoutesPaths(){
    useEffect(() => {
        if (!localStorage.getItem("token") && window.location.pathname !== "/loginpage"){
            window.location.replace("/loginpage")
        }
    },[])
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/loginpage" element={<LoginPage></LoginPage>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
            <Route path="/movie/:id" element={<MoviePage></MoviePage>}></Route>
        </Routes>
       
        </BrowserRouter>
    )
}