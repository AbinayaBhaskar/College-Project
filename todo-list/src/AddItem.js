import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newTask,setNewTask,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add task list</label>
        <input 
            autoFocus
            type="text" 
            id="addItem" 
            placeholder="Add task" 
            required 
            value={newTask} 
            onChange = {(e) => setNewTask(e.target.value)} 
        />
        <button type="submit" aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}

export default AddItem