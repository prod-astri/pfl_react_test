import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './components/Header';
import ProjectsList from './pages/ProjectsList';
import HeaderButtons from './components/HeaderButtons';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {

  const [theme, setTheme] = useState('light');
  const [isWide, setIsWide] = useState(false);
  const [dropDown, setDropDown] = useState(false)
  
  const location = useLocation();

  function applyTheme(activeTheme) {
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

    let colorsArray = activeTheme === 'dark' ? darkThemeColors : lightThemeColors

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
    setIsWide(window.innerWidth < 800 ? false : true)
  }

  // check the size at the start
  useEffect(() => { handleResize() }, [])

  useEffect(() => { applyTheme(theme) }, [theme])

  window.addEventListener("resize", handleResize)


  const routes = [
    {path: '/', element: <HomePage/>, name: 'Home'},
    {path: '/projects', element: <ProjectsList/>, name: 'Projects'},
    {path: '/*', element: <ErrorPage/>, name: '404'},
  ]
  return (
    <div className={"App "}>
      <Header>
        <HeaderButtons isWide={isWide} theme={theme} toggleTheme={toggleTheme} {...{ dropDown, setDropDown }} >
        </HeaderButtons>
      </Header>

      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes location={location}>
           {routes.map(({path, element, name}, i) => <Route exact path={path} element={element} key={name + i}/>)} 
            
          </Routes>
        </CSSTransition>
      </TransitionGroup>


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

//   transitionGroup behaves differently:
//   working example at: https://codesandbox.io/s/6l1li?file=/src/index.tsx:790-821