import { Link } from 'react-router-dom';

import styles from '../Styles/CardProject.module.css';

export default function CardProject(props) {
    return (
        <div className={styles.cardProjects} style={{animationDelay:props.animationDelay}}>
            <div style={{backgroundImage:props.backgroundImage}}></div>
            <div className={styles.leftCardProjects}></div>
            <div className={styles.rightCardProjects}></div>
            <div className={styles.details}><Link to={`project/${props.name}`} className={styles.more}>More Details</Link></div>
        </div>


    );
}