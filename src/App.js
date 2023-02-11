
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Flightlist from "./components/flight/flightlist";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="container-xxl  container-xl container-lg container-md">
  <Header/>
  <Flightlist/>
  <Footer/>
    </div>
  );
}

export default App;
