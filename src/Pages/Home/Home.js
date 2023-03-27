import { Link, useLocation } from "wouter"
import { useState } from 'react'
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import ListOfGif from "../../Components/ListOfGif";
import useGif from "../../Hooks/useGif";
export default function Home() {

  const LINKS = ["Messi", "Cristiano", "Kawhi", "Nadal", "Federer"]
  const [busqueda, serBusqueda] = useState('');
  const [path, pushLocation] = useLocation()
  const {gifs} = useGif()
  // <Link to='/gif/cristiano'>Gif de Cristiano</Link>
  // <Link to='/gif/benzema'>Gif de Benzema</Link>

  // const Onchanges

  const OnSubmitForm = (evt) => {
    evt.preventDefault()
    pushLocation(`/search/${busqueda}`)
  }

  const OnchangeInpunt = (evt) => {
    serBusqueda(evt.target.value);
  }

  return (

    <>
      <section className="section-home">
        <div className="linksPopulares">
          <h4>Los gif mas populares</h4>
          {LINKS.map(ele => <div><Link to={`/search/${ele}`}>Gif de {ele}</Link> <br /></div>)}
        </div>
        <div className="div-form">
          <form onSubmit={OnSubmitForm} className="form-busqueda">
            <input type='text' onChange={OnchangeInpunt} placeholder="Buscar un gif" value={busqueda} />
            <input type='submit' value='Buscar' className="btn-login" />
          </form>
        </div>
      </section>
      {/* <div className="contenedor-gif-home">
        <ListOfGif gifs={gifs} />
        </div> */}


    </>
  )
}