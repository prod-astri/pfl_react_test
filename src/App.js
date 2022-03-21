import './App.css';
import { useState } from 'react'

import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import HeaderButtons from './components/HeaderButtons';



function App() {
 
  const [theme, setTheme] = useState('light');
  const [isWide, setIsWide] = useState(false);

  const toggleTheme = e => setTheme(theme === 'light' ?  'dark' : 'light');

  const handleResize = () => {
    setIsWide(window.innerWidth < 600 ? false : true)
    console.log(window.innerWidth)
  }
  window.addEventListener("resize", handleResize)

  return (
    <div className={"App " + (theme)}>
      <Header >
        <HeaderButtons isWide={isWide} />
        <button className={theme} onClick={toggleTheme}>
          {theme === 'dark' ? "set light theme" : "set dark theme" }
        </button>
      </Header>
      <ProjectsList />
    </div>
  );
}

export default App;
