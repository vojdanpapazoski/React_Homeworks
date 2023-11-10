import axios from "axios"
import { useState, useEffect } from "react"
const api = 'https://www.themealdb.com/api/json/v1/1/random.php'

export const FoodFetch = () => {
    const [meals,setMeals] = useState([])
    useEffect(() => {
        axios.get(api)
        .then((res) => {console.log(res.data.meals); setMeals(res.data.meals);})         
        .catch((err) => {console.log(err);});
    },[])
   
   
   
   
    return (
        <> 
{meals.map((meal) => (
        <div key={meal.idMeal}>
        
        <ul>
           <div className="info">
           Recipie: <h4>{meal.strMeal}</h4>
           Type: <h4>{meal.strCategory}</h4>
           Culture: <h4>{meal.strArea}</h4>
           </div>       
           <br />
           Recipie Description: <p className="desc">{meal.strInstructions}</p>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
        </ul>
        </div>
        ))}
        </>
    )
}