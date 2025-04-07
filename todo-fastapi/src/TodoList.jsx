import React, { useState} from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editingText, setEditingText] = useState("");

  // Remove fetchTasks() and mock it here instead

  // Add a new task locally
  const addTask = () => {
    if (editText.trim()) {
      const newTask = {
        id: tasks.length + 1,  // Assign a new unique ID
        title: editText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setEditText("");  // Clear input field
    }
  };

  // Update a task locally
  const updateTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: editingText } : task
    );
    setTasks(updatedTasks);
    setEditingId(null);
    setEditingText("");  // Reset only `editingText`, not `editText`
  };

  // Toggle the completed status of a task locally
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task locally
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add new task..."
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>
          ➕ Add Task
        </button>
      </div>
      <button
        className="toggle-theme"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="filter-container">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? "completed" : ""}`}
          >
            <div className="task-content">
              {editingId === task.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={() => updateTask(task.id)}
                  autoFocus
                />
              ) : (
                <span className={task.completed ? "completed" : ""}>
                  {task.title}
                </span>
              )}
            </div>

            <div className="task-actions">
              <button
                className={`complete-btn ${task.completed ? "completed" : ""}`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.completed ? "✅ Completed" : "✔ Complete"}
              </button>

              {editingId === task.id ? (
                <button className="edit-btn" onClick={() => updateTask(task.id)}>
                  💾 Save
                </button>
              ) : (
                <button
                  className="edit-btn"
                  onClick={() => {
                    setEditingId(task.id);
                    setEditingText(task.title);
                  }}
                >
                  ✎ Edit
                </button>
              )}

              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                🗑 Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
