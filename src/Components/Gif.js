const Gif = ({ url, title, id }) => {

    return (

        <a className="gif" href={`#${id}`}>
            <h2>{title}</h2>
            <br /><small>{id}</small>
            <img src={url} alt="gif1" />
        </a>
    );

}


export default Gif;