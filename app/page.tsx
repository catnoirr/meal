import Meal from './components/Meal';

interface MealItem {
  name: string;
  quantity: number;
  calories: number;
  protein: number;
}

interface MealData {
  mealNumber: string;
  mealTitle: string;
  items: MealItem[];
  totalCalories: number;
  totalProtein: number;
}

export default function Home() {
  const mealPlan: MealData[] = [
    {
      mealNumber: 'Meal 1',
      mealTitle: 'Breakfast (8:00 AM)',
      items: [
        { name: 'Oats', quantity: 80, calories: 320, protein: 12 },
        { name: 'Milk (skimmed)', quantity: 250, calories: 88, protein: 8 },
        { name: 'Boiled eggs', quantity: 3, calories: 240, protein: 18 },
        { name: 'Banana', quantity: 100, calories: 89, protein: 1 },
      ],
      totalCalories: 737,
      totalProtein: 39,
    },
    {
      mealNumber: 'Meal 2',
      mealTitle: 'Mid-Morning Snack (11:00 AM)',
      items: [
        { name: 'Greek yogurt (plain, low-fat)', quantity: 150, calories: 95, protein: 12 },
        { name: 'Mixed nuts (almonds, walnuts)', quantity: 20, calories: 130, protein: 4 },
      ],
      totalCalories: 225,
      totalProtein: 16,
    },
    {
      mealNumber: 'Meal 3',
      mealTitle: 'Lunch (1:00 PM)',
      items: [
        { name: 'Paneer (low-fat)', quantity: 100, calories: 190, protein: 18 },
        { name: 'Brown rice', quantity: 100, calories: 112, protein: 3 },
        { name: 'Mixed vegetable curry (spinach, carrots, peas)', quantity: 200, calories: 150, protein: 6 },
        { name: 'Roti (whole wheat)', quantity: 2, calories: 210, protein: 6 },
      ],
      totalCalories: 662,
      totalProtein: 33,
    },
    {
      mealNumber: 'Meal 4',
      mealTitle: 'Pre-Workout Snack (4:00 PM)',
      items: [
        { name: 'Boiled eggs', quantity: 2, calories: 160, protein: 12 },
        { name: 'Sweet potato', quantity: 100, calories: 86, protein: 2 },
      ],
      totalCalories: 246,
      totalProtein: 14,
    },
    {
      mealNumber: 'Meal 5',
      mealTitle: 'Post-Workout (7:30 PM)',
      items: [
        { name: 'Scrambled eggs', quantity: 4, calories: 320, protein: 24 },
        { name: 'Whole wheat bread', quantity: 2, calories: 180, protein: 6 },
        { name: 'Fruit (apple or orange)', quantity: 100, calories: 80, protein: 1 },
      ],
      totalCalories: 580,
      totalProtein: 31,
    },
    {
      mealNumber: 'Meal 6',
      mealTitle: 'Dinner (8:30 PM)',
      items: [
        { name: 'Lentils (dal)', quantity: 200, calories: 230, protein: 16 },
        { name: 'Roti (whole wheat)', quantity: 2, calories: 210, protein: 6 },
        { name: 'Vegetable stir-fry (broccoli, capsicum, zucchini)', quantity: 150, calories: 70, protein: 4 },
      ],
      totalCalories: 510,
      totalProtein: 26,
    },
    {
      mealNumber: 'Meal 7',
      mealTitle: 'Before Bed (10:30 PM)',
      items: [
        { name: 'Boiled eggs', quantity: 2, calories: 160, protein: 12 },
        { name: 'Peanut butter (natural, unsweetened)', quantity: 20, calories: 118, protein: 5 },
      ],
      totalCalories: 278,
      totalProtein: 17,
    },
  ];

  const totalCalories = mealPlan.reduce((total, meal) => total + meal.totalCalories, 0);
  const totalProtein = mealPlan.reduce((total, meal) => total + meal.totalProtein, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Diet Plan (2800-3100 Calories, Muscle Building)</h1>
      {mealPlan.map((meal, index) => (
        <Meal
          key={index}
          mealNumber={meal.mealNumber}
          mealTitle={meal.mealTitle}
          items={meal.items}
          totalCalories={meal.totalCalories}
          totalProtein={meal.totalProtein}
        />
      ))}
      <div className="mt-8 p-4 border-t-2 border-gray-300">
        <h2 className="text-xl font-semibold">Daily Totals</h2>
        <p><strong>Calories:</strong> {totalCalories} kcal</p>
        <p><strong>Protein:</strong> {totalProtein} g</p>
      </div>
    </div>
  );
}
