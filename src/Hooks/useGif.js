import {useState,useEffect} from 'react'

import getGifs from '../services/getGifs';


export default function useGif({busqueda}={busqueda : null}){

  const [gifs, setGifs] = useState([]);

    const busquedaFinal = busqueda  ||   'El david'

    useEffect(() => {
        getGifs({ busqueda : busquedaFinal })
        .then(resu => setGifs(resu))
    }, [busqueda])

    return {gifs}

}