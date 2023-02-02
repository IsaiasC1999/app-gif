import React from 'react';
import './App.css';
import ListOfGif from './Components/ListOfGif';
import { Link, Route} from 'wouter'
import Home from './Pages/Home/Home'




function App() {

  return (
    <div className="App">
      <section className="App-content">
      <header className='header'>

      <Link to='/'>IRomano App</Link>
      <h3>La app de gif mas grande de pais</h3>
      </header>
    
      <section className='section-listado-gif'>
      <Route
        component={ListOfGif}
        path="/search/:busqueda"
      />
      </section>
      <Route 
        component={Home}
        path="/"
      />
        

      </section>

    </div>
  );
}

export default App;
