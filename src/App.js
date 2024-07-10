import "./App.css";
import logo from "./logo.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header heading="FAST REACT PIZZA CO" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
