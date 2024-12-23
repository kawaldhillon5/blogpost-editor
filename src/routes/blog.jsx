import { useLoaderData, Form, redirect, useNavigate } from "react-router-dom";
import { getBlog, postDeleteBlogReq } from "../helper-functions/functions";
import HtmlParser from "react-html-parser";
import { format } from "date-fns";

export async function loader({params}){
    const blog = await getBlog(params.blogId);
    
    return {blog, params}
}

export default function Blog(){
    const {blog, params} = useLoaderData();
    const navigate = useNavigate();
    return (

        <div id="blog_div">  
            <div id="blog_title_div_edit">
                <div className="blog_title">{blog.title}</div>   
                <div id="blog_div_header_btns">
                    <div className="blog_date">{format(blog.date_created,"yyyy/mm/dd")}</div>
                    <button className="blog_btn" onClick={()=>{navigate(`/editor/blogEdit/${params.blogId}`)}}>Edit</button>
                    <button className="blog_btn" onClick={()=>{onClickDelete()}}>Delete</button>
                    <dialog id="del_dia">
                        <p>Delete This Blog ?</p>
                        <div id="dia_btns">
                            <button onClick={async ()=>{await diaClickYes(params.blogId); navigate('/editor/myBlogPosts')}}>Yes</button>
                            <button onClick={()=>{diaClickNo()}}>No</button>
                        </div>
                        <div id="del_dia_text"></div>
                    </dialog>
                    <div className="votes_comments_main_edit_page">
                        <div className="votes_count">{blog.votes}</div>
                        <div className="comments_count">{blog.comments.length}</div>
                    </div>
                </div>
            </div>
            <div id="blog_body_div">{HtmlParser(blog.body)}</div>
            <div id="blog_author">-{`${blog.author.first_name} ${blog.author.last_name}`}</div>
        </div>

    )
}

function onClickDelete() {
    const dia = document.querySelector("#del_dia");
    dia.classList.add('show_dia');
    dia.showModal();
}

async function diaClickYes(blogId) {
    const dia = document.querySelector("#del_dia");
    const diaText = document.querySelector("#del_dia_text")
    const res = await postDeleteBlogReq(blogId);
    diaText.textContent = res.data;   
    setTimeout(()=>{
        diaText.textContent = '';   
        dia.classList.remove('show_dia');
        dia.close();
    }, 1000)
}

function diaClickNo() {
    const dia = document.querySelector("#del_dia");
    dia.classList.remove('show_dia');
    dia.close();
}