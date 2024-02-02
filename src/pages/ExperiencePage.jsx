import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ExperiencePage(){
    return(
        <div id="experience">
            <VerticalTimeline lineColor= '#222' layout='1-column-left'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021 - 2023"
                    iconStyle={{ background: "#BBCDE5", border: "#000" }}
                    >
                    <h3 className="vertical-timeline-element-title">
                        Des Moines University School of Osteopathic Medicine
                    </h3>
                    <p> Medical School- Voluntarily Withdrew</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2023 - August 2023"
                    iconStyle={{ background: "#BBCDE5", border: "#000" }}
                    
                    >
                    <h3 className="vertical-timeline-element-title">
                        Web Development Intern - The Scion Group
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Chicago, IL
                    </h4>
                    <p>Designed and built components for multiple sites using a headless Wordpress system</p>
                 </VerticalTimelineElement>
                 <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="August 2023 - December 2023"
                    iconStyle={{ background: "#BBCDE5", border: "#000" }}>
                        
                    <h3 className="vertical-timeline-element-title">
                        Northwestern University Full Stack Web Development Coding Bootcamp
                    </h3>
                    <p>Certification Course</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="December 2023 - Present"
                    iconStyle={{ background: "#BBCDE5", border: "#000" }}
                    >
                    <h3 className="vertical-timeline-element-title">
                        Freelance Web Developer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Chicago, IL
                    </h4>
                    <p>Web Developer and Consultant</p>
                 </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    )
}