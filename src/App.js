import './App.css';

// to use svg in React you need to 
// - minify the file https://www.svgminify.com/
// or - more convoluted wys https://blog.logrocket.com/how-to-use-svgs-in-react/
import burger from "./assets/burger.svg"

const theId = 'title'
const title = <h1 id={theId}>A beutifull title</h1>

function App() {
  return (
    <div className="App">
      { title }
      <img src={burger} alt='menu icon' style={{width: '20px'}}/>
      
    </div>
  );
}

export default App;
