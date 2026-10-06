import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MealList from './components/MealList';
import MealDetail from './components/MealDetail';
import useFetch from './hooks/useFetch';

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('chicken');

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );

  function handleSearch(search) {
    setSearchTerm(search);
    setSelectedMeal(null);
  }

  const meals =
    data?.meals?.map((meal) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      category: meal.strCategory,
      area: meal.strArea,
      image: meal.strMealThumb,
      instructions: meal.strInstructions,
    })) || [];

  return (
    <div>
      <Header />

      {!selectedMeal && <SearchBar onSearch={handleSearch} />}

      {loading && <p>Loading meals...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && selectedMeal && (
        <MealDetail
          meal={selectedMeal}
          onBack={() => setSelectedMeal(null)}
        />
      )}

      {!loading && !error && !selectedMeal && meals.length > 0 && (
        <MealList
          meals={meals}
          onSelect={setSelectedMeal}
        />
      )}

      {!loading && !error && !selectedMeal && meals.length === 0 && (
        <p>No meals found.</p>
      )}
    </div>
  );
}

export default App;