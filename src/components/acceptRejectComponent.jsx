import { Form } from "react-router-dom";
export default function AcceptReject({req, submitFunc}){

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
                <label htmlFor="acceptRadio" id="accept_label" className="labelActive" onClick={acceptLabelAddClass}>Accept</label>
                <input type="radio" name="radio" id="acceptRadio" className="radioReq"  />
                <label htmlFor="rejectRadio" id="reject_label" onClick={rejectLabelAddClass}>Reject</label>
                <input type="radio" name="radio" id="rejectRadio" className="radioReq" />
                <button type="button" onClick={(e) => {
                        e.preventDefault();
                        let choice  = false
                        document.querySelector("#accept_label").classList.contains("labelActive")
                        ? choice = true : choice = false;
                        submitFunc(req, choice)}
                    }>Submit</button>
            </Form>
        </>
    )
}