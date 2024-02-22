import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card title='Title without text'/>
      <Card text='Text without title'/>
      <Card title='Yul' text='See you soon...' />
    </div>
  );
}

export default App;
