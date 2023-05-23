import "./styles/App.css";
import Navbar from "./components/Navbar";
import logoImg from "./logo192.png";
import Footer from "./components/Footer";
import ConfettiComponent from "./components/ConfettiComponent";

function App() {
  let studentName = "Zuzana";
  let studentName2 = "Yvo";
  let studentName3 = "Mauricio";
  return (
    <>
      <ConfettiComponent />
      <Navbar studentName={studentName2} />
      <div className="container">
        <section className="section1">{studentName}</section>
        <section className="section2">{studentName2}</section>
      </div>
      <img src={logoImg} alt="logo" id="logo" />
      <a href="https://www.google.com/" target="_blank">
        testing
      </a>
      <Footer />
    </>
  );
}

export default App;
