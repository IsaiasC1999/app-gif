
const getGifs = ({ busqueda = "messi" } = {}) => {
   const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=eIUwaBk2YU5HWqlYqLnzKQTGmbG6APSc&q=${busqueda}&limit=5&offset=0&rating=g&lang=en`

   return fetch(apiUrl)
      .then(res => res.json())
      .then(response => {
         const { data } = response
         const gifs = data.map(single => {
            const { url } = single.images.downsized_medium
            const { title, id } = single
            return { url, title, id }
         })
         return gifs;
      })


}



export default getGifs;