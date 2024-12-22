import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useParams } from 'react-router-dom';

import { projectsData } from "../data/data"; 
import styles from '../styles/moreDetailsPage.module.css'
import MoreDetailsHeader from "../components/MoreDetailsHeader";
import MoreDetailsAboutProject from "../sections/MoreDetailsAboutProject";
import MoreDetailsVideo from "../sections/MoreDetailsVideo";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation()

    return (
        <>
            <MoreDetailsHeader title={project.title} codeURL={project.codeURL} demoURL={project.demoURL} />

            <div className={styles.title} ref={title}>
                {t("overview")}
            </div>

            <div className={styles.image} style={{ backgroundImage: project.mockup }} ref={image}></div>

            <div style={{display:'flex',justifyContent:'center'}}>
                <div className={styles.madeWithContainer} ref={madeWith}>
                    {(project.madeWith) ? project.madeWith.map((value, index) => {
                        return <div className={styles.madeWith} key={index}>{value}</div>
                    }) : null}
                </div>
            </div>

            <MoreDetailsAboutProject logo={project.logo} text={project.text} />


            <MoreDetailsVideo video={project.video} normalName={project.normalName} />
        </>
    );
}