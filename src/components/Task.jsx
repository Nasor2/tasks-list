
export default function Task(props) {
    return (
        <li key={props.id} class="border-solid border-2 border-slate-500 p-2 mb-1 flex items-center">
            <input
                class="mr-2"
                type="checkbox"
                checked={props.completed}
                onChange={() => props.estadoTask(props.id, props.forceUpdate)}
            />
            <span class={props.completed ? 'line-through' : ''}>{props.task_text}</span>
        </li>
    );
}