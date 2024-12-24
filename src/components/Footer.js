import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";
import SelectLanguage from "./SelectLanguage";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();
  
  return (
    <div className={styles.footer}>
      <SelectLanguage top={50}/>
      <div>
        {t("codeBy")} <Link to={"/"} style={{color:'black', fontWeight:'bolder', textDecoration:'none'}}>Anas Attoum</Link>
      </div>
    </div>
  );
}
