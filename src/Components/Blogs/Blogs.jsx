import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { TbCategory } from "react-icons/tb";

const Blogs = ({filterBlog, handleViewBlock}) => {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const filterdData = blogs.filter(blog => blog.category === filterBlog)
    return (
        <div className='w-1/4 px-6 py-6 bg-gray-200 rounded-xl'>
            {
            filterdData.map(blog=> <Blog handleViewBlock={handleViewBlock} Blog={blog}> </Blog>)
            }
        </div>
    );
};

export default Blogs;

