import { useLoaderData, useNavigate, useSubmit } from "react-router-dom";
import BlogReq from "../components/request-components.jsx/blogReq";
import EditorReq from "../components/request-components.jsx/editorReq";
import PublishBlogReq from "../components/request-components.jsx/publishBlogReq";
import { getEditorReqs, getUser, postEditorReqChoice } from "../helper-functions/functions";

export async function loader() {
    const user = await getUser()
    const editorRequests = await getEditorReqs();
    return {editorRequests};
}

export default function Requests() {
    const navigate = useNavigate();
    const {editorRequests} = useLoaderData();
    async function editorReqOnSubmitFunc (id, choice){
        const res  = await postEditorReqChoice(id, choice);
        console.log(res);
        res===200 ? navigate('../editor/requests'): null
        return;   
    }
    return (
        <>
            <PublishBlogReq />
            <BlogReq />
            <EditorReq reqs={editorRequests} submitFunc ={editorReqOnSubmitFunc} />
        </>
    )
}