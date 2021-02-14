import React,{useRef} from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { ROOT_URL } from './App.js'
export default function NewMemeModal({closeModal,setLength}) {
    // modal component to create a modal
    // and submit a new modal

    const nameRef=useRef()
    const captionRef=useRef()
    const urlRef=useRef()

    function sendPost(){
        var formdata = new FormData();
        formdata.append("name", nameRef.current.value);
        formdata.append("caption", captionRef.current.value);
        formdata.append("url", urlRef.current.value);

        const url=`${ROOT_URL}memes`
        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        setLength(prevlength=> prevlength+1)
    }

    function handelsubmit(e){
        e.preventDefault();
        sendPost()
        console.log("data sent")
        closeModal()
    }

    return (
        <>
            <Modal.Header>Submit New Meme</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handelsubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Caption</Form.Label>
                        <Form.Control type="text" ref={captionRef}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Url</Form.Label>
                        <Form.Control type="Url" ref={urlRef}></Form.Control>
                    </Form.Group>
                    <Button type="Submit">Submit</Button>
                </Form> 
            </Modal.Body>
        </>
    )
}
