import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FontContext } from '../contexts/FontContext';
import { motion } from 'framer-motion';
import './Settings.css';

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { font, setFont, fontOptions } = useContext(FontContext);

  return (
    <div className="settings-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Settings</h1>
        <p>Customize your experience</p>
      </motion.div>
      
      <motion.div 
        className="settings-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="settings-card">
          <h2>Appearance</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Theme</h3>
              <p>Choose between light and dark mode</p>
            </div>
            <div className="setting-control">
              <button 
                className={`theme-button ${theme === 'light' ? 'active' : ''}`}
                onClick={() => theme === 'dark' && toggleTheme()}
              >
                ☀️ Light
              </button>
              <button 
                className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => theme === 'light' && toggleTheme()}
              >
                🌙 Dark
              </button>
            </div>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Font Family</h3>
              <p>Select your preferred font</p>
            </div>
            <div className="setting-control">
              <select 
                value={font} 
                onChange={(e) => setFont(e.target.value)}
                className="font-select"
              >
                {fontOptions.map((option) => (
                  <option key={option.name} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="settings-card">
          <h2>Preview</h2>
          <div className="preview-container">
            <div className="preview-item">
              <h3>Heading Example</h3>
              <p>This is how your text will look with the selected font and theme.</p>
              <button className="btn btn-primary">Button Example</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
