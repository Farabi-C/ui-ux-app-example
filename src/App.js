import logo from './logo.svg';
import './App.css';

function MyButton() {
  function handleClick(){
    alert("Button was clicked");
  }
  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
}
// In JSX, the function must return a single element 
//
function App() {
  let her = "She";
  return (
    <div className="App">
      <h1><span style={{color:"purple"}}>{her}</span> fractured my solitude</h1>
      <MyButton/> {/* Unnecessary to add the starting tag when nesting components */}
      <h2>I feel I can give you everything without giving myself away</h2>
    </div>
  );
}

export default App;
