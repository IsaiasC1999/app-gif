import React from 'react';
import './App.css';
import { Link, Route} from 'wouter'
import Home from './Pages/Home/Home'
import SearchResult from './Pages/PageSearch/SearchResults';




function App() {

  return (
    <div className="App">
      <section className="App-content">
      <header className='header'>
      <Link to='/Home'>IRomano App</Link>
      <div>
      <button className='btn-login'>Login</button>  
      <button className='btn-login'>Registrar</button>
      </div>
      </header>
    
      
      <Route
        component={SearchResult}
        path="/search/:busqueda"
      />
      
      <Route 
        component={Home}
        path="/Home"
      />
        

      </section>

    </div>
  );
}

export default App;
