import { useState,useEffect } from 'react';
import './App.css';
import MemeCont from './MemeCont'
import Modal from 'react-bootstrap/Modal'
import NewMemeModal from './NewMemeModal';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button'
import { Button } from 'react-bootstrap'

// export const ROOT_URL="https://shikharsun-xmeme-api.herokuapp.com/"
export const ROOT_URL="http://127.0.0.1:8000/"

function App() {
  const [memearr,setmemearr] = useState([])
  const [length,setlength] = useState(0)
  const [show,setShow] = useState(false)

  useEffect( ()=> {
    const url=`${ROOT_URL}memes`
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => setmemearr(result))
      .catch(error => console.log('error', error));
  },[length]
  )

  function closeModal(){
    setShow(false)
  }

  function showModal(){
    setShow(true)
  }


  return (

    <div className="app">
      <div className="meme-cont">
        <MemeCont memearr={memearr} setLength={setlength}/>
      </div>
      <Modal show={show} onHide={closeModal} >
        <NewMemeModal closeModal={closeModal} setLength={setlength}/>
      </Modal>
      <Button className='addbtn' variant="primary" onClick={showModal} >Add new</Button>
    </div>    
  );
}

export default App;
