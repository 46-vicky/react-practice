import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate = useNavigate();
   const {data: posts,error,loading} = useFetch("https://jsonplaceholder.typicode.com/posts");
    
  const handleBtn = ()=>{
    navigate("create-post")
  } 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='post-cont'>
      <div className='btn-sec'>
        <button className='post-btn' onClick={handleBtn}>Create Post</button>
      </div>
        {posts && posts.map((post)=>
            <div key={post.id} className='post'>
                <h4 className='post-title'>{post.title}</h4>
                <p className='post-body'>{post.body}</p>
                <div className='btn-sec'>
                  <Link className='action-btn' to={`/editPost/${post.id}`}>Edit</Link>
                  <button className='action-btn'>Delete</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Home