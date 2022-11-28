
import './App.css';
import { useState} from "react";
import TodoList from './componnets/todo-list/todo-list';
function App() {
  const [data, setData] = useState([
    {
    name: 'Learn React',
    id: 1
  },
  {
    name: 'Learn Javascript',
    id: 2
  }
]);

const addItem = () => {
    const name =  prompt('Enter name');
    setData((previousState) => {
      return [...previousState, {name, id: previousState[previousState.length-1].id + 1 || 0}]
    })
}

const deleteItem = (id) => {
  const filteredData = data.filter((val) => val.id !== id);
  setData(filteredData);
}

  return (

    
    <div>
      <button onClick={
        addItem
      }> Add List</button>
      <TodoList items = {data} deleteItem = {deleteItem}></TodoList>
    </div>
  )
}

export default App;
