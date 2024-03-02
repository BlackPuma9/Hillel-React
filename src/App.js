import './App.css';
import MyCollapse from "./components/MyCollapse";

function App() {
  const text = 'collapse me'
  return (
    <div className="App">
      <MyCollapse text={text} opened />
    </div>
  );
}

export default App;
