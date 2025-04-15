import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FontProvider } from "./contexts/FontContext";
import { TodoProvider } from "./contexts/TodoContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import "./styles/index.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <TodoProvider>
          <Router basename="/">
            <div className="app">
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </div>
          </Router>
        </TodoProvider>
      </FontProvider>
    </ThemeProvider>
  );
}

export default App;
