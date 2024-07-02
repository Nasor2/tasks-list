import Header from "./components/Header";
import TaskContainer from "./components/TasksContainer";
import React from 'react';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-4 rounded-lg shadow-lg bg-white">
        <Header titulo="Lista de Tareas" />
        <TaskContainer />
      </div>
    </div>
  );
}

export default App;
