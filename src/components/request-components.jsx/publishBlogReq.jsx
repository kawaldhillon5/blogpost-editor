import { useNavigate } from "react-router-dom"

export default function PublishBlogReq({reqs}) {
    const navigate = useNavigate();
    return(
        <div className="req_div" id="pusblish_blog_req_div">
            <div className="req_div_title">Publish Blog Requests</div>
            <ul id="publish_blog_req_items_div">
                {   reqs.length === 0 
                    ? <li>No Requests</li>
                    :  
                        reqs.map((req) => (
                        <li className="req_list_item" key={req._id}
                            onClick={()=>{
                             navigate(`../editor/publish/${req._id}/blog/${req.blog}`)}}
                        >
                            <div className="publish_item_title">{req.title}</div>
                            <div className="publish_item_user">-{req.user.userName}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}