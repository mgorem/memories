// implementing calls to the backend api
// axios- used to make api calls
import axios from "axios";

// url pointing to our backend route
const url = "http://localhost:5000/posts";

// makes an axios get call to our url
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
