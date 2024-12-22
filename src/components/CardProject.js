import { Link } from 'react-router-dom';

import styles from '../styles/cardProject.module.css';
import { useTranslation } from 'react-i18next';

export default function CardProject(props) {

    const { t } = useTranslation()

    return (
        <div className={styles.cardProjects} style={{animationDelay:props.animationDelay + 's'}}>
            <div style={{backgroundImage:props.backgroundImage, borderRadius:'10px'}}></div>
            <div className={styles.leftCardProjects}></div>
            <div className={styles.rightCardProjects}></div>
            <div className={styles.title}>{props.normalName}</div>
            <div className={styles.details}><Link to={`project/${props.name}`} className={styles.more}>{t("moreDetails")}</Link></div>
            <div className={styles.title2}>{props.madeWith}</div>
        </div>


    );
}