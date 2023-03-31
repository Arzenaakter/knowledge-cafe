import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Blogs.css';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
       

    }
    ,[])
    return (
        <div>
         {blogs.map(blog=>console.log(blog))}
        </div>
    );
};

export default Blogs;