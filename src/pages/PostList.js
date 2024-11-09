import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
const PostList = () => {
  //https://jsonplaceholder.typicode.com/posts?_limit=50
  const { data: posts } = useLoaderData();

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   setLoading(true);
  //   const data = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=50"
  //   );
  //   const json = await data.json();
  //   setPosts(json);
  //   console.log(json);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
        
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export async function postLoader() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=50"
  );
  // console.log(response);
  return response;
}

export default PostList;
