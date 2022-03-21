import './App.css';

// to use svg in React you need to 
// - minify the file https://www.svgminify.com/
// or - more convoluted ways https://blog.logrocket.com/how-to-use-svgs-in-react/
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header smallScreen={false}/>
    </div>
  );
}

export default App;
