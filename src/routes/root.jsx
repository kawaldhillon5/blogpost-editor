import { Form, Link, Outlet, useLoaderData, Navigate, useNavigate} from "react-router-dom";
import { getUser, LogOut } from "../helper-functions/functions";
import { useEffect, useState } from "react";


export default function Root(){
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        async function func() {
            const u = await getUser();
            if(u.user){
                setIsLogged(true);
            }   
        } func();
    },)

    const handleLogIn = () => {
        navigate('authenticate/logIn');
    }

    const handleLogOut = async ()=> {
        await LogOut();
        setIsLogged(false);
        navigate('/')
    }

    return (
        <>
            <div id="header">
                <h3 id="header_heading">blog Editor</h3>
                <form>
                    <input type="search" placeholder="Search Blogs and Requests here" name="header_search"></input>
                </form>
                <div id="header_links">
                    <Link to={`/editor/myBlogPosts`}>My Blogs</Link>
                    <Link to={`/editor/allBlogRequests`}>Blog Requests</Link>
                    <Link to={`/editor/about`}>About</Link>
                    {isLogged ? <button onClick={handleLogOut}>Log Out</button> : <button onClick={handleLogIn}>Log In</button>}
                </div>
            </div>
            <div id="content">
                <Outlet />
            </div>
            <div id="footer">
                <span>By</span>
                <a href="https://github.com/kawaldhillon5" target="_blank" >Kawal dhillon</a>
            </div>
        </>
    )
}