import { Form, redirect } from "react-router-dom";
import { logIn } from "../helper-functions/functions";

export async function action({request, params}) {
    const formData = await request.formData();
    try {
        const response = await logIn(formData.get("username"), formData.get("password"));
        if(response.status === 401) {
            throw new Error(response.data);
        }
    } catch (error){
        console.log(error.message);
        return 
    }
    return redirect('/');
}

export default function LogIn(){
    console.log('rendered');
    return (
        <div id="log_in_div">
            <Form method="post" id="log_in_form">
                <div id="form-input_div">
                    <label htmlFor="username">username:</label>
                    <input type="text" name="username" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password"/>
                </div>
                <button type="submit">Log In</button>
            </Form>
        </div>
    )
}