import logo from './logo.svg';
import './App.css';

const Daraz = () => {
  return (
    <div className="daraz-container" style={{}}>
      <h1 className="title">Daraz</h1>
      <input
        className="search-input"
        placeholder="Search Products"
      />
     <ol className="nav-list" type="A">
  <li><a href="#home">Home</a></li>
  <li><a href="#contact">Contact Us</a></li>
  <li><a href="#report">Report</a></li>
</ol>
    </div>)
}
function App() {
  return (
    
    <div className="App">
     
   
   <Daraz/>
    </div>

);
}

export default App;
