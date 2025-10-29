import styles from '../styles/Philosophy.module.css';

export default function Philosophy() {
    return (
        <section className={styles.section}>
            <div className={styles.label}>[PHILOSOPHY.md]</div>

            <h2 className={styles.title}>How I Build</h2>

            <div className={styles.content}>
                <p className={styles.paragraph}>
                    My workflow starts in ChatGPT: I ideate, refine, and blueprint the system. I run those blueprints through Claude for technical review and a clearer build plan. I design flows in Figma (often from a quick HTML mock in Replit), build the frontend in React, and use AI to help scaffold and debug backend / AI core.
                </p>

                <p className={styles.paragraph}>
                    I test, refactor, and refine till it works. Five years in design means I can take an idea from concept → UX → code → deployment—solo, with AI as my collaborator.
                </p>
                
                <p className={styles.paragraph}>
                    In essence, the machines handle the grunt work. I handle the <span className={styles.highlight}>craft and taste</span>.
                </p>
            </div>

            <div className={styles.quote}>
                <div className={styles.quoteLabel}>{'>'} Core principle:</div>
                <div className={styles.quoteText}>
                    "Technology should feel human. Systems should serve with soul. Move fast yet deliberately."
                </div>
            </div>
        </section>
    )
}