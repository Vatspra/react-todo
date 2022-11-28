import TodoItem from "../todo-item/todo-item";

const TodoList = (props) => {
    const items = props.items;
    console.log(props)
    return (
        <div>
            {
                items.map((item, index) => 
                    <TodoItem item = {item} key = {index} delete ={props.deleteItem}/>)
            }
        </div>
    )
}


export default TodoList;