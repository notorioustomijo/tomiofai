import { useEffect, useRef } from 'react';
import styles from '../styles/NeuralBackground.module.css';

export default function NeuralBackground() {
    const canvasRef = useRef(null);
    const scrollY = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth < 768;
        const nodeCount = prefersReduced ? 0 : (isMobile ? 15 : 40);

        if (nodeCount === 0) return;

        const nodes = [];

        for (let i = 0; i< nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2
            });
        }

        const handleScroll = () => {
            scrollY.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        function animate() {
            ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const parallaxOffset = scrollY.current * 0.1;

            nodes.forEach((node, i) => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                const displayY = node.y - parallaxOffset;

                ctx.beginPath();
                ctx.arc(node.x, displayY, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 244, 255, 0.15)';
                ctx.fill();

                nodes.slice(i + 1).forEach(other => {
                    const dx = other.x - node.x;
                    const dy = (other.y - parallaxOffset) - displayY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, displayY);
                        ctx.lineTo(other.x, other.y - parallaxOffset);
                        ctx.strokeStyle = `rgba(0, 224, 255, ${0.08 * (1 - dist/120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <canvas 
            ref = {canvasRef}
            className={styles.canvas}
            aria-hidden='true'
        />
    );
}