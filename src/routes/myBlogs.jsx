import { Link, redirect, useLoaderData, Form, useActionData, NavLink, useNavigation } from "react-router-dom";
import { createNewEmptyBlog, getMyBlogs, getUser } from "../helper-functions/functions";
import "./myBlogs.css"

export async function action() {
    
    try{
        const response = await createNewEmptyBlog();
        console.log(response);
        if(response.status === 404){
            throw new Error(response.data)
        }
        return redirect(`../editor/blogEdit/${response.data.id}`);
    } catch(err){
        return err;
    }
}

export async function loader(){
    const blogs = await getMyBlogs();
    return {blogs};
}
export default function MyBlogs(){
    const {blogs} = useLoaderData();
    const error = useActionData();
    const navigation = useNavigation();
    
    return (
        <div id="blogs_div_main">
            {blogs.length ? (
                    <div id="blogs_div">
                        <div id="blogs_header">
                            <div id="blogs_div_title">All Blogs</div>
                            <Form method="post"><button type="submit" id="new_blog_button">New Blog</button></Form>
                        </div>
                        <ul id="blogs_list">
                            {blogs.map(blog =>
                                (<li className="blogs_list_item" key={blog._id}>
                                    <NavLink className={({ isActive, isPending }) =>
                                            isActive
                                            ? "blog_list_item_a active"
                                            : isPending
                                            ? "blog_list_item_a pending"
                                            : "blog_list_item_a"
                                        }to={`../editor/blog/${blog._id}`}>{blog.title}
                                     </NavLink>
                                    <PubReqStatus reqStatus={blog.publishReqStatus} />
                                </li>)
                            )}
                        </ul>
                    </div>
                ):(
                    <div id="no_blogs_div">
                        <i>No Posts</i>
                        <Form method="post"><button type="submit" id="new_blog_button">New</button></Form>{error ? <span>{error.message}</span> : null}
                    </div>
                )
            }
        </div>
    )

}

function PubReqStatus({reqStatus}) {
    let message = null;

    switch (reqStatus) {
        case 0:
            message = "Not Sent"
            break;
        case 1:
            message = "Sent";
        break;
        case 2:
            message = "Accepted";
            break;
        case 3:
            message = "Rejected";
            break;
        default:
            message = "Invalid"; // Handle unexpected values
            break;
    }

    return (
        <>
            <div className={`blog_req_status_main status_color${reqStatus}`}>
                <p>{message}</p>
            </div>
        </>
    );
}