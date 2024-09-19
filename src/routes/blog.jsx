import { useLoaderData, Form, redirect } from "react-router-dom";
import { getBlog } from "../helper-functions/functions";
import HtmlParser from "react-html-parser";

export async function action({params}) {
    return redirect(`/editor/blogEdit/${params.blogId}`)
}

export async function loader({params}){
    const blog = await getBlog(params.blogId);
    return {blog}
}

export default function Blog(){
    const {blog} = useLoaderData();
    return (

        <div id="blog_div">  
            <div>
                {blog.title}   {blog.date_created} 
                <Form method="post">
                    <button type="submit">Edit</button>
                </Form>
            </div>
            <div id="blog_body_div">{HtmlParser(blog.body)}</div>
            <p>{`${blog.author.first_name} ${blog.author.last_name}`}</p>
        </div>

    )
}