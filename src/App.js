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

  const toggleTheme = e => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleResize = () => {
    setIsWide(window.innerWidth < 600 ? false : true)
  }

  useEffect(() => { handleResize() }, [])

  window.addEventListener("resize", handleResize)

  return (
    <div className={"App " + (theme)}>
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