import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css';

const Blogs = ({handleBookmark}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
       

    }
    ,[])
    return (
        <div >
         {blogs.map(blog=><SingleBlog
         key ={blog.id}
          blog={blog}
          handleBookmark={handleBookmark}
         ></SingleBlog>)}
        </div>
    );
};

export default Blogs;