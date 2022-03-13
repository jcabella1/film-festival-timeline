import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { BsFilm } from "react-icons/bs"
import "./timeline.scss";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements } from "../../timelineData";


export default function Timeline() {
    return(
        <div className="timeline" id="timeline">

            <div className="timeline-title">
                <img src="/assets/divider-left.png" alt=""/>
                <h3>Timeline</h3>
                <img src="/assets/divider-right.png" alt=""/>
            </div>
            <VerticalTimeline>
                {timelineElements.map(e => {
                    return (
                        <VerticalTimelineElement
                        key={e.id}
                        date={e.date}
                        image={e.image}
                        iconStyle={{ background: "#06D6A0"}}
                        icon={<BsFilm />}
                        dateClassName="date">
                            <div className="img-container">
                                <img src={e.image} alt="timelineimg" />
                                <div className="img-src"><a href={e.imagesrc} target="_blank" rel="noreferrer">Image Source↗</a></div>
                            </div>
                            <h4>{e.date}</h4>
                            <h3 className="vertical-timeline-element-title">{e.title}</h3>
                            <p className="description">{e.description}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    );
}