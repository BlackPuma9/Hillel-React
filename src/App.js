import './App.css';
import HelloMessage from "./components/HelloMessage";
import List from "./components/List";
import ButtonCN from "./components/ButtonCN";
function App() {
    const serverdata = [
        {id: 1, name: 'Yuli'},
        {id: 2, name: 'Yani'}
    ]

  return (
    <div className="App">
      <HelloMessage name='Some name' type='Some type' quantity={100}/>

      <h2>Unordered List</h2>
        <List data={serverdata}/>

       <ButtonCN  label={'Bbn1'} isPressed />
    </div>
  );
}

export default App;
