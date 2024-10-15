import { Link, useLoaderData } from "react-router-dom"
import { getUser } from "../helper-functions/functions"
import  documImg from '../assets/images/document-Img.jpg'
 
export async function loader() {
    const user = await getUser();
    return {user}
}
export default function Index(){
    const {user} = useLoaderData();
    return (
        <div id="index_div">
            <div id="index_left_side">
                <img id="docu_img" src={documImg}></img>
            </div>
            <div id="index_right_side">
                <div id="index_div_wlcm_msg">
                    Welcome to the Blog Editor
                </div>
                {
                    (user.user === null) ?
                    <div id="auth_form_div">
                        <Link to={'/authenticate/logIn'} className="auth_link">Log In</Link>
                    </div> :
                    <div id="index_user_name">{user.username}</div>
                }
            </div>
        </div>
    )
}