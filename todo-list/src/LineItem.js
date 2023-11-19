import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({tasks,handleCheck,handleDelete}) => {
  return (
    <li key={tasks.id}>
        <input type="checkbox" checked={tasks.checked} onChange={()=>handleCheck(tasks.id)}/>
        <label 
          style={tasks.checked?{textDecoration:'line-through'}:null} 
          onDoubleClick={()=>handleCheck(tasks.id)}>{tasks.task}
        </label>
        <FaTrashAlt 
            role="button" 
            tabIndex="0" 
            onClick={()=>handleDelete(tasks.id)}
            aria-label={`Delete ${tasks.task}`}
        />
      </li>
  )
}

export default LineItem