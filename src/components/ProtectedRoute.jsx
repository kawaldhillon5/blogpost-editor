import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../helper-functions/functions";

export default function ProtectedRoute({children}) {
    const res = getUser()
    const user = func();
    const navigate = useNavigate();

    async function func(){
        let userVal = await res;
        try {
            console.log(userVal);
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
            console.log(res);
            if(res === null) {
                navigate('/authenticate/logIn', {replace: true});
            }
    } fun()
    },[user ,navigate]);


    return children;
}