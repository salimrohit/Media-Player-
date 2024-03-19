import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import VideoCard from '../components/VideoCard'
import { addCategoryApi, deleteCategoryApi, getAVideoApi, getCategoryApi, updateCategory } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Category({videoDragAndRemoveStatus,setVideoDragAndRemoveStatus}) {
  //state to store the cateogry name
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCateogryStatus, setAddCategoryStatus] = useState(false)
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(categoryName);

  //function to add category
  const handleCategoryAdd = async () => {
    if (categoryName) {
      let reqBody = {
        category: categoryName,
        allVideos: []

      }

      const response = await addCategoryApi(reqBody)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success('Category added successfully')
        setAddCategoryStatus(true)
        handleClose()

      }
      else {
        alert('Failed to add')
      }

    }
    else {
      alert('Please enter the Category Name')
    }

  }

  //function to get category 
  const getAllCategory = async () => {
    const response = await getCategoryApi()
    /* console.log(response.data); */
    setAllCategory(response.data)
  }

  //function to delete category 
  const handleDeleteCategory = async (id) => {
    await deleteCategoryApi(id)
    setDeleteCategoryStatus(true)


  }

  //function to prevent data loss on drag
  const dragOver = (e) => {
    e.preventDefault()

  }

  //function for drop
  const videoDrop = async (e, categoryId) => {
    console.log(`category id is ${categoryId}`);

    //to get the videoid sent from the VideoCard component
    const videoid = e.dataTransfer.getData("VideoId")
    console.log(`video id is ${videoid}`);

    //api call to get a details of a particular video that is dragged
    /* const video = await getAVideoApi(videoid)
    console.log(video.data);  //by creating a new variable 'video' */
    const { data } = await getAVideoApi(videoid)
    console.log(data);  //destructured version

    //selected category 
    const selectedCategory = allCategory.find((item) => item.id == categoryId)
    console.log(selectedCategory);    

    if(selectedCategory.allVideos.find((item)=>item.id==videoid)){
      toast.error('Video already exists in category')
    }
    else{
      selectedCategory.allVideos.push(data)
    }

    //function to update category
    await updateCategory(categoryId, selectedCategory)
    getAllCategory()

  }

  //function to delete cards from category 
  const dragStart = (e, categoryId, videoId) => {
    console.log(`category id is ${categoryId}`);
    console.log(`video id is ${videoId}`);

    let dataShared = {
      categoryId, videoId
    }

    e.dataTransfer.setData("dataShared", JSON.stringify(dataShared))

  }





  console.log(allCategory);


  useEffect(() => {
    getAllCategory()
    setAddCategoryStatus(false)
    setDeleteCategoryStatus(false)
    setVideoDragAndRemoveStatus(false)

  }, [addCateogryStatus, deleteCategoryStatus,videoDragAndRemoveStatus])
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <button onClick={handleShow} className='btn btn-warning w-100'>Add new category</button>
      </div>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPencil} className='me-2 text-warning' />Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Category Name </p>
          <Form className='border rounded p-3 border-secondary'>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length > 0 ?
        allCategory?.map((item) => (
          <div className="border border-secondary w-100 p-3 rounded mt-5" droppable="true" onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item.id)}>
            <div className="d-flex justify-content-center align-items-center">
              <p>{item.category}</p>
              <button onClick={() => handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <Row>
              {item.allVideos?.length> 0 ?
                item.allVideos?.map((card) => (
                  <Col sm={12} draggable onDragStart={(e) => dragStart(e, item.id, card.id)}>
                    <VideoCard displayVideo={card} isPresent={true} />
                  </Col>))
                : null
              }
            </Row>

          </div>))

        :
        <p className='text-danger mt-5'>No category added yet</p>
      }


    </>
  )
}

export default Category
