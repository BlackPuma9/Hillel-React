import './App.css';
import HelloMessage from "./components/HelloMessage";
import List from "./components/List";
function App() {
    const serverdata = [
        {id: 1, name: 'Yuli'},
        {id: 2, name: 'Yani'}
    ]

  return (
    <div className="App">
      <HelloMessage name='Some name' type='Some type' quantity={100}/>

    <List data={serverdata}/>
    </div>
  );
}

export default App;
