import styles from '../styles/BuilderLoop.module.css';

export default function BuilderLoop() {
    const steps = [
        { label: "Blueprint in ChatGPT", desc: 'system logic & constraints' },
        { label: 'Review in Claude', desc: 'deeper plan & pitfalls' },
        { label: 'Design in Figma', desc: 'from a quick HTML mock if useful'},
        { label: 'Build React UI', desc: 'AI-assisted backend/AI core'},
        { label: 'Refactor', desc: 'until every part is understood' },
        { label: 'Document', desc: 'what becomes reusable' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.label}>[PROCESS.MD]</div>

            <h2 className={styles.title}>My Process</h2>

            <ol className={styles.list}>    
                {steps.map((step, i) => (
                    <li key={i} className={styles.step}>
                        <span className={styles.number}>
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                            <strong className={styles.stepLabel}>{step.label}</strong>
                            <span className={styles.stepDesc}>- {step.desc}</span>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}