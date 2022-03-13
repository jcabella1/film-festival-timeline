import './bibliography.scss';
import { bibliographyData } from "../../timelineData";

export default function Bibliography() {
    
    let listItems = bibliographyData.map((d) => 
        (<li key={d.id}>
            <div className="left">{d.title}</div>
            <div className="right"><a href={d.url} target="_blank" rel="noreferrer">{d.url}</a></div>
        </li>
    ));

    return(
        <div className="bibliography">
            <h3>Sources</h3>
            <div className="source-list">
                <ul>
                    {listItems}
                </ul>
            </div>
            <p>Images taken from <a href="https://caamedia.org/caamfest-history/" target="_blank" rel="noreferrer">CAAMedia.com</a> and <a href="https://bampfa.org/page/shelves-asian-american-cinema-rarities-bampfa-film-library-study-center" target="_blank" rel="noreferrer">BAMPFA.org</a></p>    

            <p>Website by J. Abella for ES 363 (Spring 2022)</p>
        </div>
    )
}