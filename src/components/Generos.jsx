import React from 'react';

function SelectGenres({ selectedGenres, setSelectedGenres }) {
  const allGenres = ['Animation', 'Terror', 'Adventure', 'Action', 'Sci-Fi'];

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className="genre-selector">
      {allGenres.map((genre) => (
        <button
          key={genre}
          className={`genre-btn ${selectedGenres.includes(genre) ? 'selected' : ''}`}
          onClick={() => toggleGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default SelectGenres;