import { Link, redirect, useLoaderData, useSubmit, Form } from "react-router-dom";
import { getBlog, postBlogData, postFinishedblog } from "../helper-functions/functions";
import { Editor } from "@tinymce/tinymce-react";
import { useRef} from "react";
import "./blog-editor.css"

export async function action({request, params}){
    const formData = await request.formData();
    if(formData.get("save_button")){
        await postBlogData({title:formData.get("blog_title_edit"), body: formData.get("blog_body_edit")}, params.blogId);
    } else {
        await postFinishedblog({title:formData.get("blog_title_edit"), body: formData.get("blog_body_edit")}, params.blogId);
    }
    return redirect(`/editor/blog/${params.blogId}`)
}

export async function loader({params}) {
    const blog = await getBlog(params.blogId);
    return {blog};
}

export default function EditBlog() {
    const {blog}= useLoaderData();
    const editorRef = useRef(null);
    const submit = useSubmit();
    const getMCEData = () => {
        if (editorRef.current) {
          return editorRef.current.getContent();
        }
      };

    return (
        <div id="blog_edit_div">
            <Form method="post">
                <div id="title_edit_div">
                    <label htmlFor="edit_title_input">Blog Title:</label>
                    <input id="edit_title_input" name="blog_title_edit" type="text" defaultValue ={blog.title}/>
                </div>
                <div id="tags_edit_div">
                    <label htmlFor="blog_tags">Tags:</label>
                    <input name="blog_tags" type="textarea" defaultValue={blog.tags} />
                </div>
                <div id="body_edit_div">
                <Editor
                    apiKey='t2hjlizfwre228cruv3b99ekjahquf6qqc7o788ludexidvk'
                    onInit={(_evt, editor) => editorRef.current = editor}
                    initialValue={`${blog.body}`}
                    init={{
                        height: "100%",
                        width: "95%",
                        menubar: {
                        file: { title: 'File', items: 'newdocument restoredraft | preview | importword exportpdf exportword | print | deleteallconversations' },
                        edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
                        view: { title: 'View', items: 'code revisionhistory | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
                        insert: { title: 'Insert', items: 'image link media addcomment pageembed codesample inserttable | math | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
                        format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
                        tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
                        table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
                        help: { title: 'Help', items: 'help' }
                        },
                        plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                </div>
                <div id="blog_edit_btns">
                    <button type="button"
                     onClick={(e)=> {
                        e.preventDefault();
                        let formData = new FormData();
                        formData.append("blog_body_edit", getMCEData());
                        formData.append("blog_title_edit",document.querySelector("#edit_title_input").value);
                        formData.append("save_button", true);
                        submit(formData, {method: "post"});
                     }}
                    >Save</button>
                    <button type="button"
                     onClick={(e)=> {
                        e.preventDefault();
                        let formData = new FormData();
                        formData.append("blog_body_edit", getMCEData());
                        formData.append("blog_title_edit",document.querySelector("#edit_title_input").value);
                        formData.append("finish_button", true);
                        submit(formData, {method: "post"});
                     }}
                    >Finish</button>
                </div>
            </Form>
        </div>
    )
}