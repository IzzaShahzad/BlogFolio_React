import React from 'react';

const BlogCard = ({ post }) => (
  <div className="card">
    <img src={post.image} alt={post.title} />
    <h3>{post.title}</h3>
    <p>{post.description}</p>
    <small>{post.date}</small>
  </div>
);

export default BlogCard;
