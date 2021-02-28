import styles from '../styles/components/ExperienceBar.module.css';



export function ExperienceBar(){
    return(
        <header className={styles.expirenceBar}>
            <span >0 xp</span>
            <div>
                <div style= {{ width: '50%'}}/>
                <span className={styles.currentExpirience} style={{left:'50%'}}>
                    300 xp
                </span>    
            </div>
            <span>600 xp</span>
            
            
        </header>
    );
}