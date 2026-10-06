import MealCard from './MealCard';

function MealList({ meals, onSelect }) {
  return (
    <div className="meal-grid">
      {meals.map((meal) => (
        <MealCard
          key={meal.id}
          meal={meal}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default MealList;