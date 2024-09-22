import { Link } from "react-router-dom"

export default function Index(){
    return (
        <div id="auth_div">
            <p id="auth_div_wlcm_msg">
                Welcome to the Blog Editor
            </p>
            <div id="auth_form_div">
                <Link to={'/authenticate/logIn'} className="auth_link">Log In</Link>
            </div>
        </div>
    )
}