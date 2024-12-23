import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { logIn } from "../helper-functions/functions";
import  documImg from '../assets/images/document-Img.jpg'

export async function action({request, params}) {
    const formData = await request.formData();
    try {
        const response = await logIn(formData.get("username"), formData.get("password"));
        if(response.status === 401) {
            throw new Error(response.data);
        }
    } catch (error){
        console.log(error.message);
        return error.message;
    }
    return redirect('/');
}

export default function LogIn(){
    let error = useActionData()

    return (
        <div id="login_div">
            <div id="left_login_div">
                <img id="docu_img" src={documImg}></img>
            </div>
            <div id="right_login_div">
                <Form method="post" id="log_in_form">
                    <div id="form_input_div_login">
                        <fieldset id="username_fieldset">
                            <label htmlFor="username">username:</label>
                            <input type="text" name="username" />
                        </fieldset>
                        <fieldset id="password_fieldset" >
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password"/>
                        </fieldset>
                    </div>
                    <button type="submit">Log In</button>
                    <span>{error}</span>
                </Form>
            </div>
        </div>
    )
}