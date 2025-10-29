import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 100);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.label}>
                [AI_ARTISAN.EXE]
            </div>

            <h1 className={`${styles.title} ${glitch ? styles.glitch : ''}`}>
                Technology should feel human.
            </h1>

            <div className={styles.subtitle}>
                <span className={styles.name}>TOMI JOSHUA</span>
                <span className={styles.separator}>•</span>
                <span className={styles.bracket}>{'<'}</span>
                Ex-Doctor
                <span className={styles.arrow}>{' → '}</span>
                AI Artisan
                <span className={styles.bracket}>{ ' />' }</span>
            </div>

            <div className={styles.statusBox}>
                <p className={styles.statusLabel}>
                    [CURRENT_STATUS]
                </p>
                <p className={styles.statusText}>
                Designer-engineer with 5 years in product design. Conversational in React. Passable in Express, and MongoDB. AI is the glue that helps me put it all together.
                </p>
            </div>
        </header>
    )
}