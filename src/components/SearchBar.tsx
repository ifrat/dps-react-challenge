import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: '8px',
          width: '100%',
          maxWidth: '300px',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default SearchBar;
