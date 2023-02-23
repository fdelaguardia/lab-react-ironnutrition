//App.js
import { Row, Divider, Input } from "antd";
import './App.css';
import foodsData from './foods.json'
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {

  const [foods, setFoods] = useState(foodsData)

  const [query, setQuery] = useState("")

  const filteredFoods = foods.filter(food => {
    if (query === "") {
      return true; 
    } else {
      return food.name.toLowerCase().includes(query.toLowerCase());
    }
  });

  return (
    <div className="App">

        <AddFoodForm foods={foods} setFoods={setFoods}/>
        <br/>
        <br/>
        <Search query={query} setQuery={setQuery} />
        <br/>
        <br/>
        <Divider>Food List</Divider>
        <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoods.map((food) => {
          return (
            <FoodBox  foods={foods} setFoods={setFoods} name={food.name} image={food.image} calories={food.calories} servings={food.servings}/>
          )
        })}
        </Row>
       

    </div>
  );
}

export default App;
