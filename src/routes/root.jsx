import { Form, Link, Outlet} from "react-router-dom";


export default function Root(){
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