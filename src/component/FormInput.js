import React, {useState, useContext} from 'react'
import DataProvider, { DataContext } from './DataProvider'

export default function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoTitle, setTodoTitle] = useState('');

    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {title: todoTitle, completed: false}])
        setTodoTitle('');
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={addTodo}>
        <input type="text" name="todos" id="todos"
        required placeholder="Add todo..."
        value={todoTitle} 
        onChange={e => setTodoTitle(e.target.value.toLowerCase())}/>

        <button type="submit">Submit</button>
      </form>
        </div>
    )
}
