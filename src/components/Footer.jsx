import { useState } from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    const [hoveredLink, setHoveredLink] = useState(null);

    const links = [
        { label: 'Email', href: 'mailto:joshua.tomi1@gmail.com'},
        { label: 'Github', href: 'https://github.com/notorioustomijo'},
        { label: "LinkedIn", href: "https://linkedin.com/in/tomibuildsdifferent"},
        { label: "X", href: "https://x.com/tomiofai"}
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.label}>
                [CONTACT_NODES]
            </div>
            
            <nav className={styles.nav}>
                {links.map(link => (
                    <a 
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`${styles.link} ${hoveredLink === link.label ? styles.linkHovered : ''}`}
                        onMouseEnter={() => setHoveredLink(link.label)}
                        onMouseLeave={()=> setHoveredLink(null)}
                    >
                        [{link.label.toUpperCase()}]
                    </a>
                ))}
            </nav>

            <div className={styles.fellowship}>
                ©2025 AI_ARTISAN. All Rights Reserved.
            </div>

            <div className={styles.system}>
                [SYSTEM: READY]
            </div>
        </footer>

    )
}