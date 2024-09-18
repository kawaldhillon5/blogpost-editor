import { Link, useLoaderData } from "react-router-dom";
import { getMyBlogs } from "../helper-functions/functions";


export async function loader(){
    const blogs = await getMyBlogs();
    return {blogs};
}
export default function MyBlogs(){
    const {blogs} = useLoaderData();

    return (
        <div id="all-blogs-div">
            {blogs.length ? (
                    <ul>
                        {blogs.map(blog =>
                            (<li key={blog._id}>
                                <Link to={`../editor/blog/${blog._id}`}>{blog._id}</Link>
                                <div className="post-link-author">{blog.author.last_name}</div>
                            </li>)
                        )}
                    </ul>
                ):(
                    <i>No Posts</i>
                )
            }
        </div>
    )

}