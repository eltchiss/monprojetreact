import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




import Navigationbar from './components/Navigationbar';
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navigationbar/>
      <Footer/>
    </div>
  );
}



    






