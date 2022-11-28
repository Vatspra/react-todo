
const TodoItem = (props) => {
    const item = props.item;
    return (
        <div>
            <div>
                {item.name} 
                <button onClick={() => {
                    props.delete(item.id)
                }}>Delete Item</button>
            </div>
        </div>
    )
}

export default TodoItem;