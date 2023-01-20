import React from "react"
import styles from "./TodoItem.module.css"
import { useState } from "react"

function TodoItem(props)  {
    const [state, setState] = useState(false)

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }
    const { completed, id, title } = props.todo

    function handleEditing () {
        // console.log("edit mode activated");
        setState(true)
      }

      let viewMode = {}
      let editMode = {}
      
      if (state) {
        viewMode.display = "none"
      } else {
        editMode.display = "none"
      }

    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setState(false)
          }
      }
    
  return (
    <>  
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}/>
                <button  onClick={() => props.deleteTodoProps(id)}>
                    Delete
                </button>
                <span style={props.todo.completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input 
                type="text" 
                className={styles.textInput} 
                style={editMode}
                value={title}
                onChange={e => {
                    props.setUpdate(e.target.value, id)}}
                onKeyDown={handleUpdatedDone} />
        </li>
    </>   
  )
}

export default TodoItem