const Lists = ({ todoList, deleteTask }) => {
  return (
    <div className="tasks-container">
      {todoList.map((item, index) => (
        <div className="tasks" key={index}>
          <div className="tasks-list">
            <div className="todo-task">{item.newTask} </div>
            <div className="todo-date">{item.newDate}</div>
          </div>
          <button
            className="btn btn-danger delete-btn"
            onClick={() => {
              deleteTask(index);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Lists;
