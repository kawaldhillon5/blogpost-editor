import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

export default function EditorReq({reqs, submitFunc}) {
    return (
        <div id="editor_req_div">
            <p>Editor Requests</p>
            <div id="editor_req_item_div">
            {(reqs.reqs.length === 0) 
            ?
                <i>No Request</i>
            :   
                reqs.reqs.map((req) =>(
                    <li key={req._id}>
                        <ListItem req={req} submitFunc={submitFunc} ></ListItem>
                    </li>
                ))
            }
            </div>
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
            <div className="editor_req_name">{req.firstName+" " +req.lastName}</div>
            <div className="editor_req_email">{req.email}</div>
            <button onClick={onClickFunc} >Options</button>
            {
                options ? 
                <AcceptReject req = {req} submitFunc={submitFunc} />
                :
                null
            }
        </>
           
    )
}

function AcceptReject({req, submitFunc}){

    const acceptLabelAddClass = () => {
        document.querySelector("#accept_label").classList.add("labelActive");
        document.querySelector("#reject_label").classList.remove("labelActive");
    }

    const rejectLabelAddClass = () => {
        document.querySelector("#accept_label").classList.remove("labelActive");
        document.querySelector("#reject_label").classList.add("labelActive");
    }
    return (
        <>
            <Form method="post">
                <label htmlFor="acceptRadio" id="accept_label" onClick={acceptLabelAddClass}>Accept</label>
                <input type="radio" name="radio" id="acceptRadio" className="radioReq"  />
                <label htmlFor="rejectRadio" id="reject_label" onClick={rejectLabelAddClass}>Reject</label>
                <input type="radio" name="radio" id="rejectRadio" className="radioReq" />
                <button type="button" onClick={(e) => {
                        e.preventDefault();
                        let choice  = false
                        document.querySelector("#accept_label").classList.contains("labelActive")
                        ? choice = true : choice = false;
                        submitFunc(req._id, choice)}
                    }>Submit</button>
            </Form>
        </>
    )
}