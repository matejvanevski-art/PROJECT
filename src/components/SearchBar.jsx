import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (search.trim() === '') {
      return;
    }

    onSearch(search);
    setSearch('');
  }

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for a meal..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;