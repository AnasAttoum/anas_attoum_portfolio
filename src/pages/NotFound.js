import MoreDetailsHeader from '../components/MoreDetailsHeader'
import styles from "../styles/logo.module.css";

export default function NotFound() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'50px', justifyContent:'center', alignItems:'center',minHeight:'100vh'}}>
        <MoreDetailsHeader
        title={"404"}
        codeURL={""}
        demoURL={""}
        />
        <div>
            <div className={styles.logo}>
                <div className={styles.left}>
                    <div className={styles.mid}></div>
                </div>
                <div className={styles.right}>Anas Attoum</div>
            </div>
        </div>
        <h3>Project Not Found</h3>
    </div>
  )
}
