import React from 'react';

interface MealProps {
  mealNumber: string;
  mealTitle: string;
  items: {
    name: string;
    quantity: number;
    calories: number;
    protein: number;
  }[];
  totalCalories: number;
  totalProtein: number;
}

const Meal: React.FC<MealProps> = ({ mealNumber, mealTitle, items, totalCalories, totalProtein }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">{mealNumber}: {mealTitle}</h2>
      <ul className="mb-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item.name} - {item.quantity}g ({item.calories} kcal, {item.protein}g protein)
          </li>
        ))}
      </ul>
      <p><strong>Total Calories:</strong> {totalCalories} kcal</p>
      <p><strong>Total Protein:</strong> {totalProtein}g</p>
    </div>
  );
};

export default Meal;
