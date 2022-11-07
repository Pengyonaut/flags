import Flags from './components/Flags';
import Header from "./components/Header"
import TitleSection from './components/TitleSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/theme.scss"
import './App.css';



function App() {
  return (
    <div className="App">

      <Header/>

    <Flags/>

    </div>
  );
}

export default App;
