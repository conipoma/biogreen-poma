import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/navBar'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sldoHome">
        <Header greeting="Somos bienestar para tu hogar" name="Essencial"/>  
      </div> 

      <div>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
