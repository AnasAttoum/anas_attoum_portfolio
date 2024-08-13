import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { projectsData } from "../Data/Data";
import styles from '../Styles/Projects.module.css';
import CardProject from "../Components/CardProject";

export default function Projects() {

    const { ref: section, inView: section_IsInView } = useInView()
    const { ref: title, inView: title_IsInView, entry: titleEntry } = useInView()
    const { ref: cardProjects, inView: cardProjects_IsInView, entry: cardProjectsEntry } = useInView()

    const categories = useRef()

    let animationDelay = 0.5;

    const [projects, setProjects] = useState(
        projectsData.map((project, index) => {
            animationDelay += 0.5;
            return <CardProject key={index} animationDelay={animationDelay} backgroundImage={project.backgroundImage} name={project.name} normalName={project.normalName} madeWith={project.madeWith.join(' | ')} />
        })
    )

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

    useEffect(() => {
        categories.current.childNodes[0].classList.add(styles.active)
    }, [])

    const changeCat = (e) => {
        setProjects()
        setTimeout(() => {
            categories.current.childNodes.forEach(element => {
                element.classList.remove(styles.active)
            });

            if (e.target.id) {
                e.target.classList.add(styles.active)

                let animationDelay = -0.5;
                if (e.target.id !== 'all') {
                    setProjects(
                        projectsData.filter(element => { return element.type === e.target.id }).map((project, index) => {
                            animationDelay += 0.5;
                            return <CardProject key={index} animationDelay={animationDelay} backgroundImage={project.backgroundImage} name={project.name} normalName={project.normalName} madeWith={project.madeWith.join(' | ')} />
                        })
                    )
                }
                else {
                    setProjects(
                        projectsData.map((project, index) => {
                            animationDelay += 0.5;
                            return <CardProject key={index} animationDelay={animationDelay} backgroundImage={project.backgroundImage} name={project.name} normalName={project.normalName} madeWith={project.madeWith.join(' | ')} />
                        })
                    )
                }
            }
        }, 1)
    }


    return (
        <>
            <span id="projects" style={{ paddingTop: '55px', visibility: "hidden" }}>projects</span>
            <section id="projects2" className={styles.projects} ref={section}>
                <div className={styles.titleProjects} ref={title}>What I Did</div>

                <div className={styles.categories} ref={categories} onClick={changeCat}>
                    <div id="all">All</div>
                    <div id="project">Projects</div>
                    <div id="page">Pages</div>
                    <div id="game">Games</div>
                    <div id="component">Components</div>
                </div>

                <div className={styles.containerProjects} ref={cardProjects}>

                    {projects}

                </div>

            </section>
        </>

    );
}