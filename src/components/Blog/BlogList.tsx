// BlogList.js
import React from 'react';
import BlogItem from './BlogItem';
import parse from 'html-react-parser';

const BlogList = ({ blogs, grid }) => (
  <div className='flex flex-wrap gap-y-8 -mx-4 overflow-hidden'>
    {blogs.map((blog, index) => (
      <div 
        key={index} 
        className={`px-4 ${grid ? 'sm:w-1/2' : 'w-full'}`}
      >
        <BlogItem
          title={blog.title}
          content={parse(blog.content)}
          date={blog.date}
          previewText={blog.previewText}
          link={`/blog/${blog.slug}`}
        />
      </div>
    ))}
  </div>
);

export default BlogList;
