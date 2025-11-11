import { useEffect } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Header from './components/Header';
import BuildCard from './components/BuildCard';
import BuilderLoop from './components/BuilderLoop';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import NovaWireframe from './components/NovaWireframe';
import TaxoWireframe from './components/TaxoWireframe';
import ClaraWireframe from './components/ClaraWireframe';
import './styles/global.css';
import styles from './styles/App.module.css';

export default function Portfolio() {
    const projects = [
        {
            name: 'Nova',
            stack: 'React • Express • MongoDB • LLM API • LangGraph',
            status: 'LIVE',
            desc: 'AI sales/support agent for the web. Designed to answer FAQs, qualify leads, and capture contact details.',
            current: 'Backend deployed and hosted. Widget built and hosted. Dashboard built and deployed.',
            next: 'Implement RAG to allow users provide a link Nova can crawl and generate a knowledgebase from',
            note: 'Goal is reliability over breadth-prove one clean path end-to-end before expanding.',
            link: 'https://nova.mavrikon.net/demo',
            wireframe: <NovaWireframe />
        },
        {
            name: 'Taxo',
            stack: 'React • ExpressJS • MongoDB • LLM API • LangChain',
            status: 'LIVE',
            desc: 'AI tax assistant for Nigerians. Clear prompts and guardrails to make answers usable and safe.',
            current: 'Live and functional; focusing on UX polish and answer clarity.',
            next: 'Evolve Taxo into an AI tax agent for freelancers, and SMEs',
            note: 'Built UI and flows myself; used AI to scaffold/debug backend and refine prompts; refactored until the pieces were clear.',
            link: 'https://taxo-ai.netlify.app',
            wireframe: <TaxoWireframe />
        },
        {
            name: 'Clara',
            stack: 'React • Flask • Whisper • GPT-4 • ElevenLabs • Twilio • LangGraph',
            status: 'BUILD',
            desc: 'Voice AI receptionist for real calls: answers, routes and books. Built with latency and interruptions in mind.',
            current: 'Prototype phase. Voice pipeline explored; mapping conversation flows and interruption handling.',
            next: 'Reduce response lag; handle barge-in patterns; test one real scheduling flow with a friendly business.',
            note: 'Voice is unforgiving—latency and barge-in handling make or break perceived intelligence.',
            link: 'https://github.com/notorioustomijo/new_clarai',
            wireframe: <ClaraWireframe />
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