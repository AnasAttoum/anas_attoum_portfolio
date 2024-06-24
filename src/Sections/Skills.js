import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { skillsData } from "../Data/Data";
import styles from '../Styles/Skills.module.css';
import CardSkill from "../Components/CardSkill";

export default function Skills() {
    const { ref: section, inView: section_IsInView } = useInView()
    const { ref: title, inView: title_IsInView, entry: titleEntry } = useInView()
    const { ref: cardSkill, inView: cardSkill_IsInView, entry: cardSkillEntry } = useInView()
    let animationDelay = 0;

    useEffect(() => {
        if (section_IsInView) {
            if (title_IsInView) {
                titleEntry.target.className += ' letterSpacingAnimation'
            }
            if (cardSkill_IsInView) {
                cardSkillEntry.target.className += ' scaleAnimation'
            }
        }
    }, [
        section_IsInView, title_IsInView,
        cardSkill_IsInView, cardSkillEntry,
        titleEntry
    ])

    return (
        <>
            <span id="skills" style={{ paddingTop: '25px',visibility:"hidden"}}>skills</span>
            <section id="skills2" className={styles.skills} ref={section}>
                <div className={styles.titleSkills} ref={title}>What I Love</div>

                <div className={styles.containerSkills} ref={cardSkill}>

                    {skillsData.map((skill, index) => {
                        animationDelay += 0.5;
                        return <CardSkill key={index} color={skill.color} text={skill.text} backgroundImage={skill.backgroundImage} animationDelay={animationDelay} />
                    })}

                </div>
            </section>
        </>
    );
}