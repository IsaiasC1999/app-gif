import Gif from "./Gif";
import React, { useEffect, useState } from "react";
import getGifs from '../services/getGifs';

export default function ListOfGif({ params }) {
    const [gifs, setGifs] = useState([]);

    const { busqueda } = params


    useEffect(() => {
        getGifs({ busqueda })
        .then(resu => setGifs(resu))
    }, [busqueda])

    
    if(gifs.length === 0) { return <h3>Cargando...</h3>}

    return (
        <>
            {gifs.map((ele) => <Gif key={ele.id} url={ele.url} title={ele.title} id={ele.id} />)}
        </>
    )


}