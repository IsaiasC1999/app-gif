import { Link , useLocation } from "wouter"
import { useState } from 'react'
import { keyboard } from "@testing-library/user-event/dist/keyboard";
export default function Home() {

  const LINKS = ["Messi", "Cristiano", "Kawhi", "Nadal", "Federer"]
  const [busqueda, serBusqueda] = useState('');
  const [path,pushLocation] = useLocation()
  // <Link to='/gif/cristiano'>Gif de Cristiano</Link>
  // <Link to='/gif/benzema'>Gif de Benzema</Link>

  // const Onchanges

  const OnSubmitForm = (evt)=>{
    evt.preventDefault()
    pushLocation(`/search/${busqueda}`)
  }

  const OnchangeInpunt = (evt)=>{
      serBusqueda(evt.target.value);
  }

  return (

    <>
      <section onSubmit={OnSubmitForm}>
        <div className="div-form">
          <form className="form-busqueda">
                <input type='text' onChange={OnchangeInpunt}  placeholder="Buscar un gif" value={busqueda} />
                <input type='submit' value='Buscar'/>
          </form>
        </div>
        <div className="linksPopulares">
          <h3>Los gif mas populares</h3>
          {LINKS.map(ele => <div><Link to={`/search/${ele}`}>Gif de {ele}</Link> <br /></div>)}
        </div>
      </section>
    </>
  )
}