import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { projectsData } from "../Data/Data";
import styles from '../Styles/Projects.module.css';
import CardProject from "../Components/CardProject";

export default function Projects() {

    const { ref: section, inView: section_IsInView } = useInView()
    const { ref: title, inView: title_IsInView, entry: titleEntry } = useInView()
    const { ref: cardProjects, inView: cardProjects_IsInView, entry: cardProjectsEntry } = useInView()

    let animationDelay = 0.5;

    useEffect(() => {
        if (section_IsInView) {
            if (title_IsInView) {

                titleEntry.target.className += ' letterSpacingAnimation'
            }
            if (cardProjects_IsInView) {
                cardProjectsEntry.target.className += ' moveProjectsAnimation'
            }
        }
    }, [
        section_IsInView, title_IsInView, cardProjects_IsInView,
        titleEntry, cardProjectsEntry
    ])


    return (
        <>
            <span id="projects" style={{ paddingTop: '55px',visibility:"hidden"}}>projects</span>
            <section id="projects2" className={styles.projects} ref={section}>
                <div className={styles.titleProjects} ref={title}>What I Did</div>

                <div className={styles.containerProjects} ref={cardProjects}>

                    {projectsData.map((project, index) => {
                        animationDelay += 0.5;
                        return <CardProject key={index} animationDelay={animationDelay} backgroundImage={project.backgroundImage} name={project.name} normalName={project.normalName} madeWith={project.madeWith.join(' | ')} />
                    })}

                </div>

            </section>
        </>

    );
}