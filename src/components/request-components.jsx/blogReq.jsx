import { format } from "date-fns";

export default function BlogReq({reqs}) {
    return (
        <div className="req_div" id="blog_req_div">
            <div className="req_div_title">Blog Requests</div>
                <ul id="blog_req_items_div">
                    {   
                        reqs.length === 0 
                        ? <li className="req_list_item">No Requests</li>
                        : reqs.map((req)=>(
                            <li className="req_list_item" key={req._id}>
                                <div className="blog_req_item_title">{req.title} {format(req.date_created, "yyyy/mm/dd")}</div>
                                <div className="blog_req_item_user">-{req.user}</div>
                                <div className="blog-req_item_desc">{req.desc}</div>
                            </li>
                        ))
                    }
                </ul>
        </div>
    )
}