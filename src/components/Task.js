const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
            </h3>
            <p>{task.day}</p>
            <br />
            <div className="delete">
                <p onClick={() => onDelete(task.id)}>Delete</p>
            </div>
        </div>
    )
}

export default Task
