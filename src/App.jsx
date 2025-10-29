import { useEffect } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Header from './components/Header';
import BuildCard from './components/BuildCard';
import BuilderLoop from './components/BuilderLoop';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import './styles/global.css';
import styles from './styles/App.module.css';

export default function Portfolio() {
    const projects = [
        {
            name: 'Taxo',
            stack: 'React • ExpressJS • MongoDB • LLM API • LangChain',
            status: 'LIVE',
            desc: 'AI tax assistant for Nigerians. Clear prompts and guardrails to make answers usable and safe.',
            current: 'Live and functional; focusing on UX polish and answer clarity. Flows are visible on-page.',
            next: 'Tighten top 3 UX papercuts; add one narrow, reliable guided flow; prepare a short on-page changelog section.',
            note: 'Built UI and flows myself; used AI to scaffold/debug backend and refine prompts; refactored until the pieces were clear.'
        },
        {
            name: 'Nova',
            stack: 'React • Express • MongoDB • LLM API • LangGraph',
            status: 'BUILD',
            desc: 'AI sales/support agent for the web. Designed to answer FAQs, qualify leads, and capture contact details.',
            current: 'Half-built. UI + initial intent path working; lead capture stubbed; backend wiring in progress.',
            next: 'Ship a thin slice: single intent -> canned answer -> lead saved -> simple list view. Add a tiny admin view for leads.',
            note: 'Goal is reliability over breadth-prove one clean path end-to-end before expanding.'
        },
        {
            name: 'Clara',
            stack: 'React • Flask • Whisper • GPT-4 • ElevenLabs • Twilio • LangGraph',
            status: 'BUILD',
            desc: 'Voice AI receptionist for real calls: answers, routes and books. Built with latency and interruptions in mind.',
            current: 'Prototype phase. Voice pipeline explored; mapping conversation flows and interruption handling.',
            next: 'Reduce response lag; handle barge-in patterns; test one real scheduling flow with a friendly business.',
            note: 'Voice is unforgiving—latency and barge-in handling make or break perceived intelligence.'
        }
    ];

    return (
        <>
            <NeuralBackground />
            <div className={styles.container}>
                <Header />

                <main>
                    <section className={styles.projectsSection}>
                        <h2 className={styles.sectionTitle}>
                            [SELECTED_BUILDS]
                        </h2>

                        {projects.map(project => (
                            <BuildCard key={project.name} project={project} />
                        ))}
                    </section>

                    <BuilderLoop />
                    <Philosophy />
                </main>

                <Footer />
            </div>
        </>
    )
}