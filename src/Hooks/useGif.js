import {useState,useEffect} from 'react'

import getGifs from '../services/getGifs';


export default function useGif({busqueda}){

  const [gifs, setGifs] = useState([]);
  
    useEffect(() => {
        getGifs({ busqueda })
        .then(resu => setGifs(resu))
    }, [busqueda])

    return {gifs}

}