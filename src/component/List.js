import React, {useContext} from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider' 

export default function List() {
    const [todos, setTodos] = useContext(DataContext);
    
    const switchCompleted = id =>{
        const newTodos = [...todos]
        newTodos.forEach((todo, index)=>{
            if(index === id){
                todo.completed = !todo.completed
            }
        })
        setTodos(newTodos)
    }

    const handleDeleteTodos = (deletevalue, id) =>{
        const newTodos = [...todos]
        newTodos.forEach((todo, index) =>{
            if(index === id) {
                todo.title = deletevalue
            }
        })
        setTodos(newTodos)
    }


    return (
        <ul>
          {
              todos.map((todo, index) => (
                  <ListItem todo={todo} key={index} id={index} 
                  checkCompleted={switchCompleted} handleDeleteTodos={handleDeleteTodos} />
              ))
          }
      </ul>
    )
}
