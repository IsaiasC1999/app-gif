import Gif from "./Gif";
import React from "react";
import useGif from "../Hooks/useGif";

export default function ListOfGif({ params }) {
    
    const {busqueda} = params    
    const {gifs} = useGif({busqueda})

    if(gifs.length === 0) { return <h3>Cargando...</h3>}

    return (
        <>
            {gifs.map((ele) => <Gif key={ele.id} url={ele.url} title={ele.title} id={ele.id} />)}
        </>
    )


}