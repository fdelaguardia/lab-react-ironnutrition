
import { Card, Button } from 'antd';

// Iteration 2
function FoodBox({foods, setFoods, name, image, calories, servings}) {

    const deleteFood = () => {
        const newFoods = foods.filter((food) => food.name !== name);
        setFoods(newFoods);
    }

  return (
    
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: <b>{servings}</b></p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(name)}  > Delete </Button>
      </Card>
    
  );
}

export default FoodBox;