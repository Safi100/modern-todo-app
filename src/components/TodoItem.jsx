import { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { motion } from 'framer-motion';
import './TodoItem.css';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <motion.div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      layout
    >
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <div className="todo-actions">
            <button className="btn btn-success" onClick={handleEdit}>Save</button>
            <button 
              className="btn btn-danger" 
              onClick={() => {
                setEditText(todo.text);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
          </div>
          <div className="todo-actions">
            <button 
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
              disabled={todo.completed}
            >
              Edit
            </button>
            <button 
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default TodoItem;
