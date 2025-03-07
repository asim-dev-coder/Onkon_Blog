import React, { useEffect, useState } from 'react';
import ViewBlog from './ViewBlog';

const ViewBlogs = ({viewBlock}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        
        <div className='w-2/4 p-4 pt-0'>
           <img src={viewBlock?.cover_img} alt="" />
           <h1>{viewBlock?.title}</h1>
        </div>
    );
};

export default ViewBlogs;

/*<div className='shadow-2xl mb-12 rounded-2xl'>
            <div>
                <div className="card bg-base-100  shadow-sm">
                    <figure>
                        <img src={blog.cover_img} alt="" />
                    </figure>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2 mt-4 ml-4 '>
                            <img className='w-16 rounded-full shadow-2xl' src={blog.author.img} alt="" />

                            <div>
                                <h1 className='font-bold text-xl'>{blog.author.name}</h1>
                                <p>Web developer</p>
                            </div>

                        </div>
                        <div className='flex items-center mr-12 mt-4'>
                            <CiBookmarkCheck  className='text-2xl text-indigo-900'/>
                            <p>Set As Bookmarks</p>

                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            {blog.title}
                            <div className="badge badge-info text-white">NEW</div>
                        </h2>
                        <p>{blog.description}</p>
                        <div className="card-actions justify-end">
                            <div className="btn btn-outline btn-info hover:text-white">Fashion</div>
                            <div className="btn btn-info text-white">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/