import axios from "axios";
const baseURL = "http://localhost:3000/";

export async function getMyBlogs(){
   return await axios.get(`${baseURL}editor/myBlogPosts`)
    .then((response) => {
        return response.data.blogs;
    })
    .catch(function(error){
        console.log(error);
    });
}

export async function getBlog(blogId){
    
    return await axios.get(`${baseURL}editor/blog/${blogId}`)
    .then((response) => {
        return response.data.post;
    })
    .catch(function(error){
        console.log(error);
    });
}

export async function postBlogData(data){
    return axios.post(`${baseURL}/editor/updateblog`, data)
    .then((response) => {
        return response.data;
    })
    .catch((error)=> {
        console.log(error);
    })
}