import TodoList from '../components/TodoList';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My Tasks</h1>
        <p>Organize your day and boost your productivity</p>
      </motion.div>
      
      <TodoList />
    </div>
  );
};

export default Home;
