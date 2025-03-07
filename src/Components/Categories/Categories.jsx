import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = ({handleFilterBlog}) => {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    

    return (
        
        <div className='w-1/4 px-6 py-6 bg-gray-200 rounded-xl'>
            {
                categories.map(categorie => <Category handleFilterBlog={handleFilterBlog} Category={categorie}></Category>)
            }
            <div className="card bg-base-100 w-84 mt-16 shadow-sm">
                <figure>
                    <img
                        src="https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-info text-white">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Remove from Cart</div>
                        <div className="badge badge-outline">Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Categories;