import { useEffect, useState } from 'react';

export default function NovaWireframe() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <svg
            viewBox="0 0 800 400"
            style={{
                width: '100%',
                height: '100%',
                background: 'rgba(5, 5, 5, 0.8)'
            }}
        >
            <defs>
                <linearGradient id="wireGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#00e0ff', stopOpacity: 0 }} />
                    <stop offset="50%" style={{ stopColor: '#00e0ff', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#00e0ff', stopOpacity: 0 }} />
                </linearGradient>
                
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            {/* Grid Background */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 224, 255, 0.05)" strokeWidth="0.5"/>
            </pattern>
            <rect width="800" height="400" fill="url(#grid)" />

            {/* Chat Interface Container */}
            <rect x="50" y="50" width="700" height="300" 
                fill="none" 
                stroke="#00e0ff" 
                strokeWidth="1.5" 
                opacity="0.3"
            />

            {/* Header Bar */}
            <line x1="50" y1="90" x2="750" y2="90" 
                stroke="#00e0ff" 
                strokeWidth="1" 
                opacity="0.4"
            />
            <circle cx="70" cy="70" r="4" fill="#00e0ff" opacity="0.6" />
            <circle cx="90" cy="70" r="4" fill="#00e0ff" opacity="0.6" />
            <circle cx="110" cy="70" r="4" fill="#00e0ff" opacity="0.6" />

            {/* Message Bubbles - User */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 0.8s ease 0.3s' }}>
                <rect x="450" y="120" width="250" height="40" 
                    fill="none" 
                    stroke="#8a7fff" 
                    strokeWidth="1.5"
                    opacity="0.6"
                />
                <line x1="465" y1="130" x2="685" y2="130" stroke="#8a7fff" strokeWidth="0.8" opacity="0.3" />
                <line x1="465" y1="142" x2="640" y2="142" stroke="#8a7fff" strokeWidth="0.8" opacity="0.3" />
            </g>

            {/* Message Bubbles - AI */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 0.8s ease 0.6s' }}>
                <rect x="100" y="180" width="280" height="50" 
                    fill="rgba(0, 224, 255, 0.05)" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5"
                    opacity="0.8"
                />
                <line x1="115" y1="195" x2="365" y2="195" stroke="#00e0ff" strokeWidth="0.8" opacity="0.4" />
                <line x1="115" y1="207" x2="340" y2="207" stroke="#00e0ff" strokeWidth="0.8" opacity="0.4" />
                <line x1="115" y1="219" x2="290" y2="219" stroke="#00e0ff" strokeWidth="0.8" opacity="0.4" />
            </g>

            {/* User Message 2 */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 0.8s ease 0.9s' }}>
                <rect x="500" y="250" width="200" height="35" 
                    fill="none" 
                    stroke="#8a7fff" 
                    strokeWidth="1.5"
                    opacity="0.6"
                />
                <line x1="515" y1="262" x2="685" y2="262" stroke="#8a7fff" strokeWidth="0.8" opacity="0.3" />
                <line x1="515" y1="274" x2="640" y2="274" stroke="#8a7fff" strokeWidth="0.8" opacity="0.3" />
            </g>

            {/* Data Flow Lines */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 1.2s' }}>
                {/* To Backend */}
                <line x1="400" y1="200" x2="600" y2="100" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5" 
                    opacity="0.3"
                    strokeDasharray="4,4"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="-8" 
                        dur="1s" 
                        repeatCount="indefinite" 
                    />
                </line>

                {/* Backend Node */}
                <circle cx="600" cy="100" r="8" 
                    fill="#00e0ff" 
                    opacity="0.6"
                    filter="url(#glow)"
                >
                    <animate 
                        attributeName="opacity" 
                        values="0.4;0.8;0.4" 
                        dur="2s" 
                        repeatCount="indefinite" 
                    />
                </circle>
                <circle cx="600" cy="100" r="12" 
                    fill="none" 
                    stroke="#00e0ff" 
                    strokeWidth="1" 
                    opacity="0.3"
                />

                {/* To Database */}
                <line x1="600" y1="100" x2="700" y2="200" 
                    stroke="#dcc178" 
                    strokeWidth="1.5" 
                    opacity="0.3"
                    strokeDasharray="4,4"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="-8" 
                        dur="1s" 
                        repeatCount="indefinite" 
                    />
                </line>

                {/* Database Node */}
                <rect x="690" y="190" width="20" height="20" 
                    fill="none" 
                    stroke="#dcc178" 
                    strokeWidth="1.5"
                    opacity="0.6"
                />
                <line x1="695" y1="195" x2="705" y2="195" stroke="#dcc178" strokeWidth="0.8" opacity="0.4" />
                <line x1="695" y1="200" x2="705" y2="200" stroke="#dcc178" strokeWidth="0.8" opacity="0.4" />
                <line x1="695" y1="205" x2="705" y2="205" stroke="#dcc178" strokeWidth="0.8" opacity="0.4" />
            </g>

            {/* Input Field */}
            <rect x="100" y="320" width="500" height="20" 
                fill="none" 
                stroke="#00e0ff" 
                strokeWidth="1" 
                opacity="0.4"
            />
            <circle cx="620" cy="330" r="8" 
                fill="none" 
                stroke="#00e0ff" 
                strokeWidth="1.5"
                opacity="0.5"
            />

            {/* Corner Brackets */}
            <path d="M 50 50 L 50 70 M 50 50 L 70 50" 
                stroke="#00e0ff" 
                strokeWidth="2" 
                opacity="0.5"
            />
            <path d="M 750 50 L 730 50 M 750 50 L 750 70" 
                stroke="#00e0ff" 
                strokeWidth="2" 
                opacity="0.5"
            />
            <path d="M 50 350 L 50 330 M 50 350 L 70 350" 
                stroke="#00e0ff" 
                strokeWidth="2" 
                opacity="0.5"
            />
            <path d="M 750 350 L 730 350 M 750 350 L 750 330" 
                stroke="#00e0ff" 
                strokeWidth="2" 
                opacity="0.5"
            />
        </svg>
    )
}