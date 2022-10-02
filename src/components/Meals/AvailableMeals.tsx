import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Nkwobi",
    description: "Finest Cow Head Sauce",
    price: 2500.00,
  },
  {
    id: "m2",
    name: "Isi-Ewu",
    description: "Well garnished goat head in sauce",
    price: 2500.00,
  },
  {
    id: "m3",
    name: "Ugba",
    description: "Sliced African Oil bean seed in sauce",
    price: 2000.00,
  },
  {
    id: "m4",
    name: "Ofe Uha",
    description: "Soup for your swallow with uha leaves",
    price: 1500.00,
  },
];

const AvailableMeals = () => {
  const mealsList = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
