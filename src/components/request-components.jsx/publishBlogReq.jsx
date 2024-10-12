export default function PublishBlogReq({reqs}) {
    return(
        <div id="pusblish_blog_req_div">
            <p>Publish Blog Requests</p>
            <div id="publish_blog_req_item">
                {   reqs.lenght === 0 
                    ? <i>No Requests</i>
                    : reqs.map((req) => (
                        <li key={req._id}>
                            {req.title}
                        </li>
                    ))
                }
            </div>
        </div>
    )
}