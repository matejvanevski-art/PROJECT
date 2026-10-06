import styles from './MealCard.module.css';

function MealCard({ meal, onSelect }) {
  return (
    <div
      className={styles.card}
      onClick={() => onSelect(meal)}
    >
      <img
        className={styles.image}
        src={meal.image}
        alt={meal.name}
      />

      <div className={styles.content}>
        <h2>{meal.name}</h2>

        <p>{meal.category}</p>

        <button className={styles.button}>
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default MealCard;