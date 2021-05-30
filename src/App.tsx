import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './themes/themeContext';
import Header from './components/Header/Header';

/**
 * App Component
 * @return {React.ReactNode}
 */
function App() {
  return (
    <ThemeProvider initialTheme={''}>
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="bg-white text-red-500">
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
