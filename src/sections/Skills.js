import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { skillsData } from "../data/data";
import styles from '../styles/skills.module.css';
import CardSkill from "../components/CardSkill";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation()

    return (
        <>
            <span id="skills" style={{ paddingTop: '25px',visibility:"hidden"}}>skills</span>
            <section id="skills2" className={styles.skills} ref={section}>
                <div className={styles.titleSkills} ref={title}>{t("love")}</div>

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