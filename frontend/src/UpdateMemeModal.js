import React,{useRef} from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export default function UpdateMemeModal({closeModal,meme}) {
    const captionRef=useRef()
    const urlRef=useRef()
    
    const ROOT_URL="http://127.0.0.1:8000/"
    function sendPatch(){
        var formdata = new FormData();
        formdata.append("caption", captionRef.current.value);
        formdata.append("url", urlRef.current.value);

        var requestOptions = {
        method: 'PATCH',
        body: formdata,
        redirect: 'follow'
        };
        const url=`${ROOT_URL}memes/${meme.id}`
        console.log(url)

        fetch(url, requestOptions)
        .then(response => response.txt)
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        meme.caption=captionRef.current.value
        meme.url=urlRef.current.value
    }

    function handelsubmit(e){
        e.preventDefault();
        sendPatch()
        console.log("data sent")
        closeModal()
    }


    return (
        <>
            <Modal.Header>Update Meme</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handelsubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={meme.name} readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Caption</Form.Label>
                        <Form.Control type="text" defaultValue={meme.caption} ref={captionRef}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Url</Form.Label>
                        <Form.Control type="Url" defaultValue={meme.url} ref={urlRef}></Form.Control>
                    </Form.Group>
                    <Button type="Update">Submit</Button>
                </Form> 
            </Modal.Body>
        </>
    )
}
