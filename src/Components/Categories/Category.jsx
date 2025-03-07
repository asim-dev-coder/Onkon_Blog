import React from 'react';
import { TbCategory } from "react-icons/tb";

const Category = ({Category, handleFilterBlog}) => {     
    
    return (
        <div className='border border-gray-300  rounded-sm p-4 font-semibold flex items-center gap-4 bg-gray-50'>
           <h1 onClick={()=>handleFilterBlog(Category.name)} className='text-xl'>{Category.name}</h1> 
           <TbCategory className='text-xl text-blue-800' />
        </div>
    );
};

export default Category;