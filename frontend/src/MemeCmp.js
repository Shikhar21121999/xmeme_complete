import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import UpdateMemeModal from './UpdateMemeModal'
import './App.css';


export default function MemeCmp({meme,setLength}) {
    const [show,setShow] = useState(false)

    function closeModal(){
        setShow(false)
    }
    
    function showModal(){
        setShow(true)
    }
    function deleteMeme(){
        // function to delete a meme
        var formdata = new FormData();

        var requestOptions = {
        method: 'DELETE',
        body: formdata,
        redirect: 'follow'
        };

        fetch(`http://127.0.0.1:8000/memes/${meme.id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        setLength(prevlength=> prevlength+1)
    }
    return (
        
        <>
            <Card className="mycard" style={{ width: '25rem' ,height:'35rem'}}>
                <h2>{meme.name}</h2>
                <h3>{meme.caption}</h3>
                <Card.Img className="memeimage" variant="bottom" src={meme.url} alt="invalid url" />
                <div className="btncnt">
                    {/* <Button variant="primary" onClick={showModal} >Update</Button> */}
                    <button class="updbtn" onClick={showModal}><i class="fa fa-pencil-square-o" ></i></button>
                    <button class="delbtn" onClick={deleteMeme}><i class="fa fa-trash"></i></button>
                </div>
            </Card>
            <Modal show={show} onHide={closeModal} >
                <UpdateMemeModal closeModal={closeModal} meme={meme}/>
            </Modal>
        </>
    )
}
