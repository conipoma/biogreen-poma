import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sldoHome">
        <ItemListContainer greeting="Somos bienestar para tu hogar" name="Essencial"/>  
      </div>  
      
    </div>
  );
}

export default App;
