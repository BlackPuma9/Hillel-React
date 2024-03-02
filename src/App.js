import './App.css';
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Slider images={[
          process.env.PUBLIC_URL + "photo.jpg",
          process.env.PUBLIC_URL + "photo.jpg",
          process.env.PUBLIC_URL + "photo.jpg"
      ]}/>
    </div>
  );
}

export default App;
