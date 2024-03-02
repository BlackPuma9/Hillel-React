import React from "react";
import './App.css';
import MyAlert from "./components/MyAlert";

function App() {
  return (
    <div className="App">
      <MyAlert type='warning' text='what is love?' />
    </div>
  );
}
export default App;
