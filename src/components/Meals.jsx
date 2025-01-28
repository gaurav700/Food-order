import { useEffect, useState } from "react";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      try {
        const res = await fetch("http://localhost:3000/meals");

        if (!res.ok) {
          throw new Error("Failed to fetch meals");
        }
        const data = await res.json();
        setMeals(data);
      } catch (error) {
        console.log(error);
      }
    }

    getMeals();
  }, []);

  return (
    <>
      <ul id="meals">
        {meals.map((m) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
    </>
  );
}
