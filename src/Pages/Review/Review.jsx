import React, { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader";
import LeftReview from "./Review Componemts/Left Section/LeftReview";
import ReviewDetails from "./Review Componemts/Right Section/ReviewDetails";

const Review = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogCategories, setBlogCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Review-Data/Reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/Review-Data/ReviewCategory.json")
      .then((res) => res.json())
      .then((data) => setBlogCategories(data));
  }, []);

  const handleCheckboxChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(
        selectedCategories.filter((name) => name !== categoryName)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
          <PageHeader page={"Review"} />
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          ) : (
            <div className="flex flex-col-reverse lg:flex-row gap-6">
              <div className="w-full lg:w-1/4">
                <LeftReview
                  blogCategories={blogCategories}
                  selectedCategories={selectedCategories}
                  handleCheckboxChange={handleCheckboxChange}
                />
              </div>
              <div className="w-full lg:w-3/4">
                <ReviewDetails
                  blogs={blogs}
                  selectedCategories={selectedCategories}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Review;
