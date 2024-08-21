import { useState, useEffect } from "react";
import DataMail from '../data/available-meals';
import MealItem from "./MealItems";
import UseHttp from "../Hooks/useHttp";
import Error from "./Ui/Error";

const requestConfig={}

export default function Meal() {
  const [LoadedMeals, setLoadedMeals] = useState([]);
// const ={data:LoadedMeals,isLoading,error}=UseHttp("http://localhost:3000/meals",requestConfig,[])

// if(isLoading){
//   <p className="center">Data Fetch...</p>
// }
// if(error){
//   return( <Error Title="Faild To Fitch Data" Message={error}/>)

// }

  useEffect(() => {
    setLoadedMeals(DataMail);
  }, []);

  return (
    <ul id="meals">
      {LoadedMeals.map((meal) => (
        <MealItem meal={meal} />
      ))}
    </ul>
  );
}
