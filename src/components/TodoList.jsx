import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';
import { motion, AnimatePresence } from 'framer-motion';
import './TodoList.css';

const TodoList = () => {
  const { todos, addTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  // Count active and completed todos
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-list-container">
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>

      <div className="todo-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({todos.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active ({activeTodos})
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({completedTodos})
        </button>
      </div>

      <AnimatePresence>
        {filteredTodos.length > 0 ? (
          <motion.div 
            className="todo-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <p>
              {filter === 'all' 
                ? "You don't have any tasks yet. Add one above!" 
                : filter === 'active' 
                  ? "No active tasks. Great job!" 
                  : "No completed tasks yet."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
