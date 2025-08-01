import React, { useState } from 'react';
import postsData from './data';
import BlogCard from './components/BlogCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';

const POSTS_PER_PAGE = 4;

const App = () => {
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [...new Set(postsData.map(p => p.category))];

  // FILTERING
  const filteredPosts = postsData.filter(post => {
    const matchesCategory = category === 'All' || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // PAGINATION
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  const handleCategoryChange = (newCat) => {
    setCategory(newCat);
    setCurrentPage(1); // reset to first page
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <>
      <header>
        <h1>My Personal Blog</h1>
      </header>
      <div className="container">
        <div className="filters">
          <SearchBar query={searchQuery} onChange={handleSearchChange} />
          <CategoryFilter
            categories={categories}
            selected={category}
            onSelect={handleCategoryChange}
          />
        </div>

        <div className="blog-grid">
          {visiblePosts.length > 0 ? (
            visiblePosts.map(post => <BlogCard key={post.id} post={post} />)
          ) : (
            <p>No posts found.</p>
          )}
        </div>

        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
          <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default App;
