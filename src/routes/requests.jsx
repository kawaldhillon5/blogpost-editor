import { useLoaderData } from "react-router-dom";
import BlogReq from "../components/request-components.jsx/blogReq";
import EditorReq from "../components/request-components.jsx/editorReq";
import PublishBlogReq from "../components/request-components.jsx/publishBlogReq";
import { getEditorReqs } from "../helper-functions/functions";

export async function loader() {
    const editorRequests = await getEditorReqs();
    return {editorRequests};
}

export default function Requests() {

    const {editorRequests} = useLoaderData();

    return (
        <>
            <PublishBlogReq />
            <BlogReq />
            <EditorReq reqs={editorRequests} />
        </>
    )
}