import { Divider, Input } from 'antd';


function AddFoodForm(props) {


  return (

    <form onSubmit={props.handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input className='input' value={props.name} type="text"  onChange={props.updatedName}/>
      <br></br>
      <label>Image</label>
      <Input className='input' value={props.image} type="text" onChange={props.updatedImage}/>
      <br></br>
      <label>Calories</label>
      <Input className='input' value={props.calories} type="number" onChange={props.updatedCalories} />
      <br></br>
      <label>Servings</label>
      <Input className='input' value={props.servings} type="number"  onChange={props.updatedServings}/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;