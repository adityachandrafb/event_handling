import React, {useContext, useState} from 'react'
import { DataContext } from './DataProvider' 

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false)
    const [todos,setTodos] = useContext(DataContext)

    const handleCheckAll = () =>{
        const newTodos = [...todos]
        newTodos.forEach(todo =>{
            todo.completed = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const deleteTodo = () =>{
        const newTodos = todos.filter(todo =>{
            return todos.completed === false
        })
        setTodos(newTodos)
        setCheckAll(false)
    }

    return (
        <>
        {
            todos.length === 0 ? <h2>Congartulations! Nothings To Do</h2>
                :<div className="row">
                    <label htmlFor="all">
                    <input type="checkbox" name="all" id="all"
                    onClick={handleCheckAll} checked={checkAll} />
                    ALL
                    </label>
                    <p>You have {todos.length} to do</p>
                    <button id="delete" onClick={deleteTodo}>Delete</button>
            </div>
      }
      </>
    )
}
