import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleCookDetails }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs/Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-8/12">
      <div className="grid grid-cols-2 gap-5">
        {blogs.map((blogs) => (
          <Blog
            key={blogs.id}
            blogs={blogs}
            handleCookDetails={handleCookDetails}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
