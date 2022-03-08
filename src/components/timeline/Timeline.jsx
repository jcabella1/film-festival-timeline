import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { BsFilm } from "react-icons/bs"
import "./timeline.scss";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements } from "../../timelineData";


export default function Timeline() {
    return(
        <div className="timeline">
            <h3>Timeline</h3>
            <VerticalTimeline>
                {timelineElements.map(e => {
                    return (
                        <VerticalTimelineElement
                        key={e.key}
                        date={e.date}
                        image={e.image}
                        iconStyle={{ background: "#06D6A0"}}
                        icon={<BsFilm />}
                        dateClassName="date">
                            <div className="img-container">
                                <img src={e.image} alt="timelineimg" />
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