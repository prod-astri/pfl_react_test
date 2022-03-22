import './App.css';
import { useEffect, useState } from 'react'

import Header from './components/Header';
import ProjectsList from './pages/ProjectsList';
import HeaderButtons from './components/HeaderButtons';

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {

  const [theme, setTheme] = useState('light');
  const [isWide, setIsWide] = useState(false);

  function applyTheme(theme) {
    console.log(theme)
    const lightThemeColors = [
      ["--main-color", "rgb(226, 245, 255)"],
      ["--second-color", "rgb(10, 20, 40)"],
      ["--highlight-color", "rgb(100, 20, 100)"]
    ]

    const darkThemeColors = [
      ["--main-color", "rgb(0, 20, 40)"],
      ["--second-color", "rgb(226, 245, 255)"],
      ["--highlight-color", "rgb(100, 255, 100)"]
    ]

    let colorsArray = theme === 'dark' ? darkThemeColors : lightThemeColors

    for (let [varName, color] of colorsArray) {
      document.querySelector(":root").style.setProperty(varName, color);
    }
  }

  function toggleTheme() {
    console.log(`Set ${theme} theme`);

    if (theme === 'light') {
      setTheme('dark');
      applyTheme(theme);
    } else if (theme === 'dark') {
      setTheme('light');
      applyTheme(theme);
    }

  }

  // could get the same with @media in css
  const handleResize = () => {
    setIsWide(window.innerWidth < 600 ? false : true)
  }

  // check the size at the start
  useEffect(() => { handleResize() }, [])

  useEffect(() => { applyTheme(theme) }, [theme])

  window.addEventListener("resize", handleResize)


  return (
    <div className={"App "}>
      <Header>
        <HeaderButtons isWide={isWide} theme={theme} toggleTheme={toggleTheme} />
      </Header>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<ProjectsList />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;



// NOTES:
// - not working from v6:
//   import { Switch, Route } from 'react-router-dom'
//   <Switch>
//     <Route path="/" component={HomePage} />
//     <Route component={ErrorPage} />  
//   </Switch>
//   info at https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom/69849271#69849271