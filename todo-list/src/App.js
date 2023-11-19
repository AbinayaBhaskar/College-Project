import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
  const [tasks,setTask]=useState(
    [{
       id:1,
       task:"Read books",
       checked:true
     },
     {
       id:2,
       task:"Wash clothes",
       checked:false
     },
     {
       id:3,
       task:"Daily workout",
       checked:false
     },
     {
      id:4,
      task:"Drink water",
      checked:false
    }]
   )

  const [newTask,setNewTask]=useState('')

  const addItem=(item)=>{
    const getUniqueid = tasks.length ? tasks[tasks.length-1].id+1: 1;
    const addNewItem={id: getUniqueid,task: item,checked:false}
    const listTasks=[...tasks,addNewItem]
    console.log(listTasks)
    setTask(listTasks)
    localStorage.setItem("todo",JSON.stringify(listTasks))
  }

  const handleCheck=(id)=>{
    const checkedTask=tasks.map((item)=>
    item.id===id? {...item, checked:!item.checked}:item
    )
    setTask(checkedTask)
    localStorage.setItem("todo",JSON.stringify(checkedTask))
  }

  const handleDelete=(id)=>{
    const deletedTask=tasks.filter((item)=>
    item.id!==id
    )
    setTask(deletedTask)
    localStorage.setItem("todo",JSON.stringify(deletedTask))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newTask) return
    console.log(newTask)
    addItem(newTask)
    setNewTask('')
  }
  return (
    <div className="App">
      <Header title="Abinaya Todo List"/>
      <Content
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <AddItem
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <Footer
      length={tasks.length}
      />
    </div>
  );
}

export default App;