import "./App.css";
import Header from "./components/header";
import AnimatedCard from "./components/AnimatedCard.jsz";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="container">
          <Header />
          <AnimatedCard 
          title="My Card"
          description="This is a simple card component."
          />
        </div>
      </div>
    </>
  );
};

export default App;
