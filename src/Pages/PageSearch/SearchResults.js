import React from 'react';
import ListOfGif from '../../Components/ListOfGif';
import useGif from '../../Hooks/useGif';



export default function SearchResult({params}) {

 const {busqueda} = params; 
  const { gifs } = useGif({ busqueda })

  return (

    <div className='contenedor-gif'>
      {gifs.length === 0 ? 'Loading...' : <ListOfGif gifs={gifs}/>}  
    </div>
    
  );


}
