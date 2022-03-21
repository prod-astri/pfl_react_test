import './App.css';
import { useState } from 'react'
// to use svg in React you need to 
// - minify the file https://www.svgminify.com/
// or - more convoluted ways https://blog.logrocket.com/how-to-use-svgs-in-react/
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';
import HeaderButtons from './components/HeaderButtons';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isWide, setIsWide] = useState(false);

  const toggleTheme = e => setDarkTheme(!darkTheme);

  const handleResize = () => {
    setIsWide(window.innerWidth < 600 ? false : true)
    console.log(window.innerWidth)
  }
  window.addEventListener("resize", handleResize)



  return (
    <div className={"App " + (darkTheme ? 'dark' : 'light')}>
      <Header >
        <HeaderButtons isWide={isWide} />
        <button className={darkTheme ? 'light' : 'dark'} onClick={toggleTheme}>
          {darkTheme ? 'set light theme' : 'set dark theme'}
        </button>
      </Header>
      <ProjectsList />
    </div>
  );
}

export default App;
