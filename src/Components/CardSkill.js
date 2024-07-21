import styles from '../Styles/CardSkill.module.css';

export default function CardSkill(props) {
    return (

        <div className={styles.cardSkill} style={{animationDelay:props.animationDelay +'s'}}>
            <span style={{ color: props.color }}>{props.text}</span>
            <div style={{backgroundImage: props.backgroundImage}}></div>
        </div>

    );
}