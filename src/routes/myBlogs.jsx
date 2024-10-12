import { Link, redirect, useLoaderData, Form } from "react-router-dom";
import { createNewEmptyBlog, getMyBlogs, getUser } from "../helper-functions/functions";

export async function action() {
    
    const blogId = await createNewEmptyBlog();
    return redirect(`../editor/blogEdit/${blogId}`);
}

export async function loader(){
    const blogs = await getMyBlogs();
    return {blogs};
}
export default function MyBlogs(){
    const {blogs} = useLoaderData();
    return (
        <div id="all-blogs-div">
            {blogs.length ? (
                    <div id="blogs_div">
                        <Form method="post"><button type="submit" id="new_blog_button">New Blog</button></Form>
                        <ul>
                            {blogs.map(blog =>
                                (<li key={blog._id}>
                                    <Link to={`../editor/blog/${blog._id}`}>{blog.title}</Link>
                                    <div className="post-link-author">{blog.author.last_name}</div>
                                </li>)
                            )}
                        </ul>
                    </div>
                ):(
                    <div id="no_blogs_div">
                        <i>No Posts</i>
                        <Form method="post"><button type="submit" id="new_blog_button">New</button></Form>
                    </div>
                )
            }
        </div>
    )

}