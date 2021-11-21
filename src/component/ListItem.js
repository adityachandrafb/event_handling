import React, {useState} from 'react'

export default function ListItem({todo,id,checkCompleted,handleDeleteTodos}) {
    const [onDelete, setOnDelete] = useState(false)
    const [deleteValue, setdeleteValue] = useState(todo.name)

    const handleOnDelete = () =>{
        setOnDelete(true)
    }

    const handleDelete = id =>{
        setOnDelete(false)
        if(deleteValue){
            handleDeleteTodos(deleteValue, id)
        }
        else{
            setdeleteValue(todo.title)
        }
    } 

    if(onDelete){
        return (
            <li>
                <input type="text" id="deleteValue" value={deleteValue} 
                title="deleteValue" 
                onChange={e => setdeleteValue(e.target.value.toLocaleLowerCase())} />
                
                <button onClick={() => handleDelete(id)}>Save</button>
            </li>
        )
    }else{   
    return (
        <li>
            <label htmlFor={id} className={todo.completed ?"active" : ""} >
                <input type="checkbox" id={id} checked={todo.completed}
                onChange={() => checkCompleted(id)}/>
                {todo.title}
            </label>
            <button disabled={todo.completed} onClick={handleOnDelete}>Edit</button>
        </li>
    )
    }
}
