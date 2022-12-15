import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  return (
    <>
    <br></br>
      <Divider>Search</Divider>

      <label className='searchBar'>Search</label>
      <Input className='inputSearch' value={props.name} type="text" onChange={props.onChangeFunction} />
    </>
  );
}

export default Search;


