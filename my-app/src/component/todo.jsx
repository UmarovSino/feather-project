import React, { useState } from "react";
import "./todo.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, room: "Living Room", text: "Add new furniture", completed: false, img: "src/assets/IMAGE (43).png" },
    { id: 2, room: "Bedroom", text: "Organize decor", completed: false, img: "src/assets/IMAGE (40).png" },
    { id: 3, room: "Home Office", text: "Clean desk", completed: false, img: "src/assets/IMAGE (41).png" },
    { id: 4, room: "Dining Room", text: "Wipe table", completed: false, img: "src/assets/IMAGE (42).png" }
  ]);

  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newRoom, setNewRoom] = useState("");
  const [newImg, setNewImg] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTask = () => {
    if (newTask.trim() && newRoom.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        room: newRoom,
        text: newTask,
        completed: false,
        img: newImg || "https://via.placeholder.com/150"
      }]);
      setNewTask("");
      setNewRoom("");
      setNewImg("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditingText(task.text);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: editingText } : task));
    setEditingTaskId(null);
    setEditingText("");
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(search.toLowerCase()) &&
    (selectedRoom ? task.room === selectedRoom : true)
  );

  return (
    <div className="todo-container">
      <div className="todo-controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="todo-input"
        />
        <select
          className="todo-select"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option value="">All Rooms</option>
          <option value="Living Room">Living Room</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Home Office">Home Office</option>
          <option value="Dining Room">Dining Room</option>
        </select>
      </div>

      <div className="todo-add">
        <input
          type="text"
          placeholder="New task description..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="todo-input"
        />
        <input
          type="text"
          placeholder="Room name..."
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
          className="todo-input"
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={newImg}
          onChange={(e) => setNewImg(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTask} className="todo-button">Add</button>
      </div>

      <ul className="todo-list">
        {filteredTasks.map(task => (
          <li key={task.id} className="todo-item">
            <img src={task.img} alt={task.room} style={{ width: "100%", height: "auto" }} />

            <div className="todo-task">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="todo-input"
                />
              ) : (
                <span className={task.completed ? "todo-completed" : ""}>[{task.room}] {task.text}</span>
              )}
            </div>

            {editingTaskId === task.id ? (
              <button onClick={() => saveEdit(task.id)} className="todo-button">Save</button>
            ) : (
              <button onClick={() => startEditing(task)} className="todo-button" style={{backgroundColor: '#ffc107'}}>Edit</button>
            )}

            <button onClick={() => deleteTask(task.id)} className="todo-delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;