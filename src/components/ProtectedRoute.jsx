import { useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../helper-functions/functions";

export default function ProtectedRoute() {
    const res = getUser()
    const user = func();
    const navigate = useNavigate();

    async function func(){
        let userVal = await res;
        try {
            if(userVal.user === null) {
              return null;
            } else {
                return userVal.user;
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    
    useEffect(()=>{
        async function fun(){
            const res = await user;
            if(res === null) {
                navigate('/authenticate/logIn', {replace: true});
            }
    } fun()
    },[user ,navigate]);


    return <Outlet/>
}