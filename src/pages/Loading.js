import styles from '../styles/logo.module.css';

export default function Loading() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'50px', justifyContent:'center', alignItems:'center',minHeight:'100vh'}}>
      <div>
        <div className={styles.logo}>
          <div className={styles.left}>
            <div className={styles.mid}></div>
          </div>
          <div className={styles.right}>Anas Attoum</div>
        </div>
      </div>
      <div className="loading"></div>
    </div>
  );
}
