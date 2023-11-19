import React from 'react'
import ItemList from './ItemList'
const Content = ({tasks,handleCheck,handleDelete}) => {
  return (
    <div>
        {(tasks.length>0)?(
       <ItemList
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
        ):(
          <p>List is empty</p>
        )
}
    </div>
    
  )
}

export default Content