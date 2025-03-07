import React from 'react';

const Blog = ({ Blog, handleViewBlock }) => {

    return (
        <div className='border rounded-sm p-4 mb-2 font-semibold bg-gray-50'>
            <div className='flex items-center gap-4'>
                <img className='w-16' src={Blog.cover_img} />
                <h1 className='text-xl'>{Blog.title}</h1>
            </div>
            <button onClick={()=>handleViewBlock(Blog)} className='btn btn-success text-white mt-4'>View Blog</button>
        </div>
    );
};

export default Blog;