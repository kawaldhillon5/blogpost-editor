import { Link, useLoaderData } from "react-router-dom"
import { getUser } from "../helper-functions/functions"
export async function loader() {
    const user = await getUser();
    return {user}
}
export default function Index(){
    const {user} = useLoaderData();
    return (
        <div id="auth_div">
            <p id="auth_div_wlcm_msg">
                Welcome to the Blog Editor
            </p>
            {
                (user.user === null) ?
                <div id="auth_form_div">
                    <Link to={'/authenticate/logIn'} className="auth_link">Log In</Link>
                </div> : 
                <div id="index_user_name">{user.username}</div>
            }
        </div>
    )
}