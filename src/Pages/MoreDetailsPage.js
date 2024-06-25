import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useParams } from 'react-router-dom';

import { projectsData } from '../Data/Data'
import styles from '../Styles/MoreDetailsPage.module.css'
import MoreDetailsHeader from "../Sections/MoreDetailsHeader";
import MoreDetailsAboutProject from "../Sections/MoreDetailsAboutProject";
import MoreDetailsVideo from "../Sections/MoreDetailsVideo";

export default function MoreDetailsPage() {


    const param = useParams()
    const [project, setProject] = useState('')


    useEffect(() => {
        setProject(projectsData.find(element => { return element.name === param.projectName }))
    }, [param.projectName])


    const { ref: title, inView: title_IsInView, entry: titleEntry } = useInView()
    const { ref: image, inView: image_IsInView, entry: imageEntry } = useInView()
    const { ref: madeWith, inView: madeWith_IsInView, entry: madeWithEntry } = useInView()


    useEffect(() => {
        if (title_IsInView) {
            titleEntry.target.className += ' letterSpacingAnimation'
            titleEntry.target.style.animationDelay = '1s'
        }
        if (image_IsInView) {
            imageEntry.target.className += ' opacityAnimation'
        }
        if (madeWith_IsInView) {
            madeWithEntry.target.className += ' opacityAnimation'
            madeWithEntry.target.style.animationDelay = ' 1s'
        }
    }, [
        title_IsInView, titleEntry,
        image_IsInView, imageEntry,
        madeWith_IsInView, madeWithEntry
    ])

    useEffect(() => {
        document.title = 'Anas Attoum | ' + project.normalName
    }, [project.normalName])


    return (
        <>
            <MoreDetailsHeader title={project.title} codeURL={project.codeURL} demoURL={project.demoURL} />

            <div className={styles.title} ref={title}>
                Overview
            </div>

            <div className={styles.image} style={{ backgroundImage: project.mockup }} ref={image}></div>

            <div className={styles.madeWithContainer} ref={madeWith}>
                {(project.madeWith) ? project.madeWith.map((value,index) => {
                    return <div className={styles.madeWith} key={index}>{value}</div>
                }) : null}
            </div>

            <MoreDetailsAboutProject logo={project.logo} text={project.text} />


            <MoreDetailsVideo video={project.video} normalName={project.normalName}/>
        </>
    );
}