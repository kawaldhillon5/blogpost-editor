import { useEffect, useState } from "react";
import AcceptReject from "../acceptRejectComponent";

export default function EditorReq({reqs, submitFunc}) {
    return (
        <div className="req_div" id="editor_req_div">
            <div className="req_div_title">Editor Requests</div>
            <ul id="editor_req_items_div">
            {(reqs.reqs.length === 0) 
            ?
                <li className="req_list_item">No Request</li>
            :   
                reqs.reqs.map((req) =>(
                    <li className="editor_req_list_item" key={req._id}>
                        <ListItem req={req} submitFunc={submitFunc} ></ListItem>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

function ListItem({req ,submitFunc}) {
    const [options, setOptions] = useState(false);

    useEffect(()=>{
        options ? document.querySelector("#accept_label").classList.add("labelActive"): null; 
    },[options])

    const onClickFunc = ()=> {
        options ? setOptions(false) : setOptions(true)
    }

    return(
        <>
            <div className="editor_req_top">
                <div className="editor_req_name">{req.firstName+" " +req.lastName}</div>
                <button className="editor_req_options_button" onClick={onClickFunc} >⫶</button>
            </div>
            <div className="editor_req_email">{req.email}</div>
            {
                options ? 
                <AcceptReject req = {req._id} submitFunc={submitFunc} />
                :
                null
            }
        </>
           
    )
}
