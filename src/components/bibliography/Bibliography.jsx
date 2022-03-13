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
            <p>See each timeline entry for image sources.</p>    

            <p>Website by J. Abella for ES 363 (Spring 2022)</p>
        </div>
    )
}