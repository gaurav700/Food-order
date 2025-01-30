import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const requestConfig = {};
export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals ....</p>;
  }

  if (error) {
    return <Error title="Filaed to fetch meals" message={error} />;
  }

  return (
    <>
      <ul id="meals">
        {meals.map((m) => (
          <MealItem meal={m} key={m.id} />
        ))}
      </ul>
    </>
  );
}
