import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { uploadVideoApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Add({setUploadVideoStatus}) {
  
  const [show, setShow] = useState(false);
  const [video,setVideo] = useState({
    id:'',
    caption:'',
    imageUrl:'',
    embedLink:''
  })
  console.log(video);

  const getEmbedLink = (e)=>{
    /* console.log(e.target.value); */
    const text = e.target.value 
    if(text.startsWith('https://youtu.be/')){
      console.log( text.slice(17,28));
      const link = `https://www.youtube.com/embed/${text.slice(17,28)}?autoplay=1`
      setVideo({...video, embedLink:link})
    }
    else{
      console.log( text.slice(-11));
      const link = `https://www.youtube.com/embed/${text.slice(-11)}?autoplay=1`
      setVideo({...video, embedLink:link})
    }

  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async()=>{
    const {id , caption , imageUrl , embedLink} = video
    console.log(id, caption, imageUrl, embedLink);
    if(!id || !caption || !imageUrl || !embedLink){
      toast.info('Plese fill the details completely')
    }
    else{
      const response = await uploadVideoApi(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Video uploaded successfully')
        setUploadVideoStatus(response.data)
        setVideo({
          id:"",
          caption:"",
          imageUrl:"",
          embedLink:""
        })
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something went wrong')
      }

    }

  
  }

  return (
    <>
      <div className='d-flex'>
        <h5 className='me-3 mt-2'>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Please fill in the following details </p>
          <Form className='border rounded p-3 border-secondary'>

            <Form.Group className='mb-3'>            
              <Form.Control type="text" placeholder="Enter the video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>              
            </Form.Group>

            <Form.Group className='mb-3'>            
              <Form.Control type="text" placeholder="Enter the video caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>              
            </Form.Group>

            <Form.Group className='mb-3'>            
              <Form.Control type="text" placeholder="Enter the video image URL" onChange={(e)=>setVideo({...video,imageUrl:e.target.value})}/>              
            </Form.Group>

            <Form.Group className='mb-3'>            
              <Form.Control type="text" placeholder="Enter the youtube video link" onChange={(e)=>getEmbedLink(e)}/>              
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default Add 
