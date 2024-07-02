import React, { useState } from 'react';
import Task from "./Task";

let tasks = [{ id: 1, task_text: "Defender a Putin", completed: false }];
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
        <div className="p-4">
            <div className="flex mb-4">
                <input id="inputTask" type="text" placeholder="Nueva tarea" className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-purple-400" />
                <button
                    type="submit"
                    onClick={() => addTask(document.getElementById('inputTask'), forceUpdate)}
                    className="bg-purple-400 text-white px-4 py-2 rounded-r-lg ml-2 focus:outline-none hover:bg-purple-500"
                >
                    Añadir
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <Task key={task.id} {...task} estadoTask={estadoTask} forceUpdate={forceUpdate} />
                ))}
            </ul>
        </div>
    );
}
