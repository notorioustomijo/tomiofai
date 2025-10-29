import { useState } from 'react';
import StatusBadge from './StatusBadge';
import styles from '../styles/BuildCard.module.css';

export default function BuildCard({ project }) {
    const [revealed, setRevealed] = useState(false);

    return (
        <article
            className={`${styles.card} ${revealed ? styles.revealed : ''}`}
            onMouseEnter={() => setRevealed(true)}
            onMouseLeave={() => setRevealed(false)}
        >
            <div className={`${styles.corner} ${styles.topLeft}`} aria-hidden="true"></div>
            <div className={`${styles.corner} ${styles.topRight}`} aria-hidden="true"></div>
            <div className={`${styles.corner} ${styles.bottomLeft}`} aria-hidden="true"></div>
            <div className={`${styles.corner} ${styles.bottomRight}`} aria-hidden="true"></div>

            <div className={styles.cardHeader}>
                <div className={styles.cardInfo}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <div className={styles.projectStack}>{project.stack}</div>
                </div>
                <StatusBadge status={project.status} />
            </div>

            <p className={styles.description}>{project.desc}</p>

            <div className={styles.visual}>
                <div className={styles.visualPlaceholder}>[PROJECT_VISUAL]</div>
                <div className={styles.grid}></div>
            </div>

            <div className={styles.anatomy}>
                <div className={styles.anatomySection}>
                    <div className={styles.anatomyLabel}>[CURRENT_STATE]</div>
                    <p className={styles.anatomyText}>{project.current}</p>
                </div>

                <div className={styles.anatomyDivider} aria-hidden="true"></div>

                <div className={styles.anatomySection}>
                    <div className={styles.anatomyLabel}>[NEXT_ITERATION]</div>
                    <p className={styles.anatomyText}>{project.next}</p>
                </div>

                {project.note && (
                    <div className={styles.note}>
                        {project.note}
                    </div>
                )}
            </div>
        </article>
    )
}