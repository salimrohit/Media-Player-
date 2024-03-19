import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//api for uploading video 
export const uploadVideoApi = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/video`,reqBody)
 
}


//api to get uploaded video 

export const getUploadedVideoApi = async()=>{
    return await commonAPI('GET',`${serverURL}/video`,"") //empty string is passed to GET data
}

//api to delete a particular video 

export const deleteAVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/video/${id}`,{}) //empty object is passed, as string wont be allowed 
}

//api to add video into history 

export const addToHistory = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/history`,reqBody)
} 

//api to get the video from history 

export const getAllVideoHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete watch history 

export const deleteWatchHistory = async(id)=>{
    return await commonAPI('DELETE', `${serverURL}/history/${id}`,{})
}

//api to add a category 

export const addCategoryApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/category`, reqBody)

}

//api to get the category

export const getCategoryApi = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}

//api to delete category 

export const deleteCategoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})

}

//api to get a single video from videos

export const getAVideoApi = async(id)=>{
    return await commonAPI('GET',`${serverURL}/video/${id}`,"")

}

//api to update category 

export const updateCategory = async(id,reqBody)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,reqBody)

}