import './App.css'
import './index.css'
import Header from "./components/Header"
import Task_container from "./components/Tasks_container"
import React from 'react';

function App() {

  return (
    <div class="h-screen w-screen bg-[url(https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <div class="container mx-auto  h-screen w-2/6 bg-orange-50 rounded-3xl border-8 border-yellow-950">
      <Header titulo="Lista de tareas"/>
      <Task_container/>
      </div>
    </div>
  );
};

export default App;
