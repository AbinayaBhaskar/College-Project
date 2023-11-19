import React from 'react'
import LineItem from './LineItem';
const ItemList = ({tasks,handleCheck,handleDelete}) => {
  return (
    <ul>
    {tasks.map((item)=>(
      <LineItem
        tasks={item}
        key={item.id}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    ))}
    </ul>
  )
}

export default ItemList