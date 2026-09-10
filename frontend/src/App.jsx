import "./App.css";
import Header from "./components/header";
import AddBtn from "./components/addbtn";

const App = () => {
  return (
    <main className="app-shell">
      <div className="container">
        <Header />
        <AddBtn />
      </div>
    </main>
  );
};

export default App;
