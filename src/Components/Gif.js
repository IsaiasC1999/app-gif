const Gif = ({ url, title, id }) => {

    return (
      <div>
        <a className="gif" href={`#${id}`}>
            <h3>{title}</h3>
            <br /><small>{id}</small>
            <div className="contenedor-img">
              <img src={url} alt="gif1" />

            </div>
        </a>
      </div>
    );

}


export default Gif;