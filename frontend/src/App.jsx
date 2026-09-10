import "./App.css";
import Header from "./components/header";
import AnimatedCard from "./components/AnimatedCard.jsx";
import AddBtn from "./components/addbtn";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="container">
          {/* <Header /> */}
          <AddBtn />
        </div>
      </div>
    </>
  );
};

export default App;
