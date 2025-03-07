import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Categories from './Components/Categories/Categories'
import Header from './Components/Header'
import ViewBlogs from './Components/ViewBlogs/ViewBlogs'
import React, { useState } from 'react';

function App() {

    const [filterBlog, setFilterBlog] = useState([])
    const [viewBlock, setViewBlock] = useState(null)
    
    const handleFilterBlog = (fBlock) => {
    
      setFilterBlog(fBlock)
    
    }
    const handleViewBlock = (blog) =>{

      setViewBlock(blog)
      }
  return (
    <>
    <div className='bg-slate-100'>
     <div className='w-10/12 mx-auto mb-4'>
      <Header></Header>
        <div className='flex gap-8 mt-6'>
        <Categories handleFilterBlog={handleFilterBlog}></Categories>
        <ViewBlogs viewBlock={viewBlock}></ViewBlogs>
        <Blogs handleViewBlock={handleViewBlock} filterBlog={filterBlog}></Blogs>
      </div>
      </div>
      </div>
    </>
  )
}

export default App