import React, { useState } from 'react';
import Task from "./Task"

let tasks = [{ id: 1, task_text: "defender a putin", completed: false }];
let actualIndex = 1;

function estadoTask(id, forceUpdate) {
    for (let i = 0; i < actualIndex; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = !tasks[i].completed;
            forceUpdate(); // Forzar la actualización
            return;
        }
    }
}
function addTask(inputTask, forceUpdate) {
    let newTask = inputTask.value;
    if (newTask !== "") {
        newTask = newTask.trim();
        tasks[actualIndex] = { id: Date.now(), task_text: newTask, completed: false };
        actualIndex += 1;
        inputTask.value = '';
        forceUpdate(); 
    }
}


export default function TaskContainer() {
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    return (
        <div class="flex flex-col place-items-center ">
            <div class="flex py-8 w-5/6">
                <input id="inputTask" type="text" placeholder="Nueva tarea" class="border-solid border-2 border-slate-500 p-2 w-96 mr-2" />
                <button
                    type="submit"
                    onClick={() => addTask(document.getElementById('inputTask'), forceUpdate)}
                    class="rounded-md font-semibold bg-yellow-700 px-7 py-1"
                >
                    Añadir
                </button>
            </div>
            <ul class="flex flex-col gap-3 w-5/6">
                {tasks.map((task) => (
                    <Task key={task.id} {...task} estadoTask={estadoTask} forceUpdate={forceUpdate}/>
                ))}
            </ul>
        </div>
    );
}
