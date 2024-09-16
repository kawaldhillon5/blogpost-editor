import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3000/";

export default function Test(){
    const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        console.log(response)
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <p>{post.body}</p>
    </div>
  );
}