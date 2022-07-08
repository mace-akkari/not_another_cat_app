import "./App.css";
import Cats from "./Cats";

const App = () => {
  return (
    <div className="app">
      <section>
        <div className="heading">Not Another Cat App</div>
        <Cats />
      </section>
    </div>
  );
};

export default App;
