import "./App.css";
import Filter from "./components/filter";
import Header from "./components/header";
import Summary from "./components/summary";

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <Summary />
      </div>
    </>
  );
}

export default App;
