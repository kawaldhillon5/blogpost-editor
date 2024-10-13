import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import BlogReq from "../components/request-components.jsx/blogReq";
import EditorReq from "../components/request-components.jsx/editorReq";
import PublishBlogReq from "../components/request-components.jsx/publishBlogReq";
import { getBlogRequests, getEditorReqs, getPublishBlogRequests, getUser, postEditorReqChoice, postPublishBlogRequest } from "../helper-functions/functions";

export async function loader() {
    const [editorRequests, blogRequests, publishBlogRequests] = await Promise.all([getEditorReqs(), getBlogRequests(), getPublishBlogRequests()]);
    return {editorRequests, blogRequests, publishBlogRequests};
}

export default function Requests() {
    const user = useOutletContext();
    const navigate = useNavigate();
    const {editorRequests, blogRequests, publishBlogRequests} = useLoaderData();

    async function editorReqOnSubmitFunc (id, choice){
        const res  = await postEditorReqChoice(id, choice);
        res===200 ? navigate('../editor/requests'): null
        return;   
    }
    
   
    return (
        <div id="main_req_div">  
            <BlogReq reqs={blogRequests} />
            {user.isAdmin?<PublishBlogReq reqs={publishBlogRequests}/>: null}
            {user.isAdmin?<EditorReq reqs={editorRequests} submitFunc ={editorReqOnSubmitFunc} />: null}
        </ div>
    )
}