import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { projectsData } from "../data/data";
import styles from '../styles/projects.module.css';
import CardProject from "../components/CardProject";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation()

    return (
        <>
            <span id="projects" style={{ paddingTop: '55px', visibility: "hidden" }}>projects</span>
            <section id="projects2" className={styles.projects} ref={section}>
                <div className={styles.titleProjects} ref={title}>{t("did")}</div>

                <div className={styles.categories} ref={categories} onClick={changeCat}>
                    <div id="all">{t("all")}</div>
                    <div id="project">{t("projects")}</div>
                    <div id="page">{t("pages")}</div>
                    <div id="game">{t("games")}</div>
                    <div id="component">{t("components")}</div>
                </div>

                <div className={styles.containerProjects} ref={cardProjects}>

                    {projects}

                </div>

            </section>
        </>

    );
}