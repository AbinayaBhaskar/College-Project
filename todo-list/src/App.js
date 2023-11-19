import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [tasks,setTask]=useState(
    JSON.parse(localStorage.getItem("todo"))
   )

  const [newTask,setNewTask]=useState('')
  const [search,setSearch]=useState('')
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
        tasks={tasks.filter(item=>((item.task).toLowerCase()).includes((search).toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <AddItem
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Footer
      length={tasks.length}
      />
    </div>
  );
}

export default App;
