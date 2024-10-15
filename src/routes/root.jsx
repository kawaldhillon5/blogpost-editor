import { Form, Link, Outlet, useLoaderData, Navigate, useNavigate} from "react-router-dom";
import { getUser, LogOut } from "../helper-functions/functions";
import { useEffect, useState } from "react";

export async function loader() {
    const user = await getUser()
    return {user}
}

export default function Root(){
    const [isLogged, setIsLogged] = useState(false);
    const {user} = useLoaderData();
    const navigate = useNavigate();

    useEffect(()=>{
         function func() {
            const u = user
            if(u.user){
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        } func();
    })

    const handleLogIn = () => {
        navigate('authenticate/logIn');
    }

    const handleLogOut = async ()=> {
        LogOut().then(()=>{
            setIsLogged(false);
            navigate('/');
        })
    }
    return (
        <>
            <div id="header">
                <Link to={"/"} id="header_heading">blog Editor</Link>
                <form>
                    <input type="search" placeholder="Search Blogs and Requests here" name="header_search"></input>
                </form>
                <div id="header_links">
                    <Link to={`/editor/myBlogPosts`}>My Blogs</Link>
                    <Link to={`/editor/requests`}>Requests</Link>
                    <Link to={`/editor/about`}>About</Link>
                    {isLogged ? <button onClick={handleLogOut}>Log Out</button> : <button onClick={handleLogIn}>Log In</button>}
                </div>
            </div>
            <div id="content">
                <Outlet context={user}/>
            </div>
            <div id="footer">
                <span>By</span>
                <a href="https://github.com/kawaldhillon5" target="_blank" >Kawal dhillon</a>
            </div>
        </>
    )
}