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
        return response.data.id;
    })
    .catch((error)=> {
        console.log(error);
    })
}

export async function postFinishedblog(data, blogId) {
    return await axios.post(`${baseURL}editor/finishBlog/${blogId}`, data)
    .then((response) => {
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

export async function LogOut(){
    return await axios.post(`${baseURL}authenticate/logOut`)
    .then((res)=> {
        return res.data.message;
    })
    .catch((error)=>{
        console.log(error);
    })
    
}

export async function getUser(){
    return await axios.get(`${baseURL}authenticate/user`)
    .then((response) =>{
        return response.data;
    })
    .catch((error) =>{
        console.log(error.data);
    });
}

export async function postSignUpData(data) {
    return await axios.post(`${baseURL}authenticate/signUp`,{data : data})
    .then((response) => {
        return response;
    })
    .catch((error) => {
        return error.response
    });
}

export async function getEditorReqs(user) {
    return await axios.get(`${baseURL}editor/editorReqs`)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error
    });   
}

export async function postEditorReqChoice(id, choice) {
    return await axios.post(`${baseURL}editor/editorReqChoice/${id}`, {data: {choice:choice}})
    .then((response)=>{
        return response.status
    })
    .catch((error)=>{
        console.log(error);
    })
}

export async function getBlogRequests() {
    return axios.get(`${baseURL}client/allBlogRequests`)
    .then((response)=>{
        return response.data.requests;
    })
    .catch((error)=>{
        console.log(error);
    });
}

export async function getPublishBlogRequests() {
    return axios.get(`${baseURL}editor/publishBlogRequests`)
    .then((response)=>{
        return response.data.data;
    })
    .catch((error)=>{
        console.log(error);
    });
}

