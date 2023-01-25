import { Link } from "wouter"

export default function Home() {

    const LINKS = ["Messi", "Cristiano", "Kawhi", "Nadal", "Federer"]

    // <Link to='/gif/cristiano'>Gif de Cristiano</Link>
    // <Link to='/gif/benzema'>Gif de Benzema</Link>

    return (
        <>
            <section>
                <h4>No desaparezcas</h4>
                <header>
                    <h3>La mejor app de gif de pais</h3>
                </header>
                <div className="linksPopulares">
                    {LINKS.map(ele => <div><Link to={`/search/${ele}`}>Gif de {ele}</Link> <br/></div>)}
                </div>
            </section>
        </>
    )
}