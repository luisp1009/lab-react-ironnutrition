import './App.css';
import foodData from './foods.json'
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row } from 'antd'
import Search from './components/Search';


function App() {

  const [foods, setFoods] = useState(foodData)

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

  const [filteredFoodArr, setFilteredFoodArr] = useState(foodData)

  const updatedName = event => {
    setName(event.target.value)
  }
  const updatedImage = event => {
    setImage(event.target.value)
  }
  const updatedCalories = event => {
    setCalories(event.target.value)
  }
  const updatedServings = event => {
    setServings(event.target.value)
  }


  //search bar
  const onChangeFunction = (event) => {
    const newList = foods.filter(singleFood => {
      console.log(event.target.value)
      return (
        singleFood.name.toLowerCase().includes(event.target.value.toLowerCase())
        );

    });
    setFilteredFoodArr(newList)
    console.log(newList)
  }


  // submit form 
  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    }


    const copyFoodArr = [...foods, newFood]

    setFoods(copyFoodArr)
    setFilteredFoodArr(copyFoodArr)
    setName('')
    setImage('')
    setCalories(0)
    setServings(0)
  }

  //delete 
 const deleteFunction = (singleFood) => {
 
    const deleteArr = filteredFoodArr.filter(element => {
      return (
        element.name !== singleFood.name
      );
    })

    setFilteredFoodArr(deleteArr);
    setFoods(deleteArr)
 }

  return (
    <div>

      <div>
        <AddFoodForm
          name={name}
          image={image}
          calories={calories}
          servings={servings}
          updatedName={updatedName}
          updatedImage={updatedImage}
          updatedCalories={updatedCalories}
          updatedServings={updatedServings}
          handleSubmit={handleSubmit}
        />


      </div>


      <div>
        <Search onChangeFunction={onChangeFunction} />
      </div>


      <h1>Food List:</h1>


      <Row>
       
        {filteredFoodArr.map(e => {
          return (
            <div>
              <FoodBox food={e} deleteFunction={deleteFunction}/>
            </div>

          );
        })}
      </Row>


    </div>
  );
}

export default App;