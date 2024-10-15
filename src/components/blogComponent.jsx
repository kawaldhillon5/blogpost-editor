import { useLoaderData, useNavigate } from "react-router-dom";
import AcceptReject from "./acceptRejectComponent";
import { getBlog, postPublishBlogRequest } from "../helper-functions/functions";
import HtmlParser from "react-html-parser";
import "./publish-blog.css";

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
        <div id="blog_div_detail_main">  
            <div id="blog_detail_div">
                <div id="blog_req_detail_header">
                    <div id="blog_req_detail_title">{blog.title}</div>
                    <div id="blog_req_detail_date">{blog.date_created.slice(-24,-14)}</div>
                </div>
                    <div id="blog_req_detail_body">{HtmlParser(blog.body)}</div>
                    <div id="blog_req_detail_author">{`${blog.author.first_name} ${blog.author.last_name}`}</div>
                    <div id="blog_req_detail_form">
                        <AcceptReject req={reqId} submitFunc={publishReqOnSubmitFunc} ></AcceptReject>
                    </div>
            </div>
        </div>

    )

}