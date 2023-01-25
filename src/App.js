import React from 'react';
import './App.css';
import ListOfGif from './Components/ListOfGif';
import { Link, Route} from 'wouter'
import Home from './Pages/Home/Home'




function App() {

  return (
    <div className="App">
      <section className="App-content">
      
      <Link to='/'>Isaias Romano App</Link>
    
      <Route 
        component={Home}
        path="/"
      />
        <Route
          component={ListOfGif}
          path="/search/:busqueda"
        />
        

      </section>

    </div>
  );
}

export default App;
