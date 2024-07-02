import React from 'react';

export default function Task({ id, task_text, completed, estadoTask, forceUpdate }) {
    return (
        <li className="flex items-center bg-purple-100 rounded-lg p-2 mb-2">
            <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-purple-600 mr-2"
                checked={completed}
                onChange={() => estadoTask(id, forceUpdate)}
            />
            <span className={completed ? "line-through text-gray-400" : "text-gray-700"}>{task_text}</span>
        </li>
    );
}
