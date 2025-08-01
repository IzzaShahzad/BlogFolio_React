import React from 'react';

const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div>
    <strong>Filter by Category:</strong>
    {['All', ...categories].map((cat) => (
      <button
        key={cat}
        onClick={() => onSelect(cat)}
        style={{ marginLeft: "10px", background: selected === cat ? "#555" : "#333" }}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
