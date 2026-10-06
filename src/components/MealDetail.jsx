function MealDetail({ meal, onBack }) {
  return (
    <div className="meal-detail">
      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      <h2>{meal.name}</h2>

      <img
        src={meal.image}
        alt={meal.name}
      />

      <p>
        <strong>Category:</strong> {meal.category}
      </p>

      <p>
        <strong>Area:</strong> {meal.area}
      </p>

      <h3>Instructions</h3>

      <p>{meal.instructions}</p>
    </div>
  );
}

export default MealDetail;