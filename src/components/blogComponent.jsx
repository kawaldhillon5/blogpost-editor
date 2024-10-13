import { useLoaderData, useNavigate } from "react-router-dom";
import AcceptReject from "./acceptRejectComponent";
import { getBlog, postPublishBlogRequest } from "../helper-functions/functions";
import HtmlParser from "react-html-parser";

export async function loader(params) {
    const blog = await getBlog(params.params.blogId);
    const reqId = params.params.reqId;
    return {reqId,blog}
}

export default function BlogComponent() {

    const {reqId,blog} = useLoaderData();
    const navi= useNavigate();

    async function publishReqOnSubmitFunc(id, choice) {
        const res = await postPublishBlogRequest(id, choice);
        res===200 ? navi("../editor/requests"): null
        return;
    }

    return (
        <div id="blog_div">  
            <div>
                {blog.title}   {blog.date_created} 
                <AcceptReject req={reqId} submitFunc={publishReqOnSubmitFunc} ></AcceptReject>
            </div>
                <div id="blog_body_div">{HtmlParser(blog.body)}</div>
                <p>{`${blog.author.first_name} ${blog.author.last_name}`}</p>
        </div>

    )

}