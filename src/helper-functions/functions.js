import axios from "axios";
const baseURL = "http://localhost:3000/";

axios.defaults.withCredentials = true;

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

export async function postBlogData(data, blogId){
    return await axios.post(`${baseURL}editor/updateBlog/${blogId}`, data)
    .then((response) => {
        console.log(response.data.id);
        return response.data.id;
    })
    .catch((error)=> {
        console.log(error);
    })
}

export async function createNewEmptyBlog(){
    return await axios.get(`${baseURL}editor/newBlog`)
    .then((response) => {
        return response.data.id;
    })
    .catch((error) => {
        console.log(error);
    })
}

export async function logIn(username, password){
    return await axios.post(`${baseURL}authenticate/logIn`, {username: username, password: password})
    .then((response)=>{
        return response;
    })
    .catch((error)=>{
        return error.response;
    })
}

export async function getUser(){
    console.log("function user run")
    return await axios.get(`${baseURL}authenticate/user`)
    .then((response) =>{
        return response.data
    })
    .catch((error) =>{
        return error.data;
    });
}

