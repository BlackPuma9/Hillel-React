import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card title='Title passing'/>
      <Card text='Text passing'/>
      <Card title='Yul' text='See you soon...' />
    </div>
  );
}

export default App;
