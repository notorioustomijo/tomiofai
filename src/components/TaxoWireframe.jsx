import { useEffect, useState } from 'react';

export default function TaxoWireframe() {
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

            {/* Form Elements - Left Side */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 0.8s ease 0.2s' }}>
                {/* Form Container */}
                <rect x="80" y="60" width="300" height="280" 
                    fill="none" 
                    stroke="#8a7fff" 
                    strokeWidth="1.5" 
                    opacity="0.4"
                />
                
                {/* Input Field 1 */}
                <rect x="100" y="90" width="260" height="35" 
                    fill="rgba(138, 127, 255, 0.05)" 
                    stroke="#8a7fff" 
                    strokeWidth="1"
                    opacity="0.6"
                />
                <line x1="110" y1="107" x2="200" y2="107" stroke="#8a7fff" strokeWidth="1" opacity="0.3" />
                
                {/* Input Field 2 */}
                <rect x="100" y="140" width="260" height="35" 
                    fill="rgba(138, 127, 255, 0.05)" 
                    stroke="#8a7fff" 
                    strokeWidth="1"
                    opacity="0.6"
                />
                <line x1="110" y1="157" x2="240" y2="157" stroke="#8a7fff" strokeWidth="1" opacity="0.3" />
                
                {/* Dropdown */}
                <rect x="100" y="190" width="260" height="35" 
                    fill="rgba(138, 127, 255, 0.05)" 
                    stroke="#8a7fff" 
                    strokeWidth="1"
                    opacity="0.6"
                />
                <line x1="110" y1="207" x2="180" y2="207" stroke="#8a7fff" strokeWidth="1" opacity="0.3" />
                <path d="M 340 200 L 350 207 L 340 214" 
                    stroke="#8a7fff" 
                    strokeWidth="1.5" 
                    fill="none"
                    opacity="0.5"
                />
                
                {/* Text Area */}
                <rect x="100" y="240" width="260" height="70" 
                    fill="rgba(138, 127, 255, 0.05)" 
                    stroke="#8a7fff" 
                    strokeWidth="1"
                    opacity="0.6"
                />
                <line x1="110" y1="255" x2="340" y2="255" stroke="#8a7fff" strokeWidth="1" opacity="0.2" />
                <line x1="110" y1="270" x2="320" y2="270" stroke="#8a7fff" strokeWidth="1" opacity="0.2" />
                <line x1="110" y1="285" x2="350" y2="285" stroke="#8a7fff" strokeWidth="1" opacity="0.2" />
            </g>

            {/* Central AI Node */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 0.6s' }}>
                {/* Main AI Core */}
                <circle cx="400" cy="200" r="40" 
                    fill="rgba(0, 224, 255, 0.1)" 
                    stroke="#00e0ff" 
                    strokeWidth="2"
                    opacity="0.8"
                    filter="url(#glow)"
                >
                    <animate 
                        attributeName="r" 
                        values="40;42;40" 
                        dur="3s" 
                        repeatCount="indefinite" 
                    />
                </circle>
                
                {/* Inner Rings */}
                <circle cx="400" cy="200" r="28" 
                    fill="none" 
                    stroke="#00e0ff" 
                    strokeWidth="1"
                    opacity="0.4"
                />
                <circle cx="400" cy="200" r="20" 
                    fill="none" 
                    stroke="#00e0ff" 
                    strokeWidth="1"
                    opacity="0.3"
                />
                
                {/* AI Label */}
                <text x="400" y="205" 
                    fill="#00e0ff" 
                    fontSize="14" 
                    fontFamily="monospace"
                    textAnchor="middle"
                    opacity="0.8"
                >
                    AI
                </text>

                {/* Orbiting Nodes */}
                <circle cx="400" cy="160" r="4" fill="#00e0ff" opacity="0.7">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 400 200"
                        to="360 400 200"
                        dur="8s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="440" cy="200" r="4" fill="#00e0ff" opacity="0.7">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="120 400 200"
                        to="480 400 200"
                        dur="8s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="400" cy="240" r="4" fill="#00e0ff" opacity="0.7">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="240 400 200"
                        to="600 400 200"
                        dur="8s"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>

            {/* Data Flow Lines from Form to AI */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 0.8s' }}>
                <line x1="360" y1="107" x2="365" y2="185" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5" 
                    opacity="0.4"
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
                
                <line x1="360" y1="157" x2="368" y2="192" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5" 
                    opacity="0.4"
                    strokeDasharray="4,4"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="-8" 
                        dur="1.2s" 
                        repeatCount="indefinite" 
                    />
                </line>
                
                <line x1="360" y1="207" x2="370" y2="200" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5" 
                    opacity="0.4"
                    strokeDasharray="4,4"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="-8" 
                        dur="0.9s" 
                        repeatCount="indefinite" 
                    />
                </line>
            </g>

            {/* Output/Results - Right Side */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 1s' }}>
                {/* Results Container */}
                <rect x="470" y="80" width="280" height="240" 
                    fill="rgba(0, 224, 255, 0.03)" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5" 
                    opacity="0.6"
                />
                
                {/* Result Lines */}
                <line x1="490" y1="110" x2="720" y2="110" stroke="#00e0ff" strokeWidth="1" opacity="0.4" />
                <line x1="490" y1="125" x2="680" y2="125" stroke="#00e0ff" strokeWidth="1" opacity="0.3" />
                <line x1="490" y1="140" x2="730" y2="140" stroke="#00e0ff" strokeWidth="1" opacity="0.3" />
                
                <line x1="490" y1="170" x2="700" y2="170" stroke="#dcc178" strokeWidth="1" opacity="0.4" />
                <line x1="490" y1="185" x2="650" y2="185" stroke="#dcc178" strokeWidth="1" opacity="0.3" />
                
                <line x1="490" y1="215" x2="720" y2="215" stroke="#00e0ff" strokeWidth="1" opacity="0.4" />
                <line x1="490" y1="230" x2="680" y2="230" stroke="#00e0ff" strokeWidth="1" opacity="0.3" />
                <line x1="490" y1="245" x2="640" y2="245" stroke="#00e0ff" strokeWidth="1" opacity="0.3" />
                
                {/* Highlight Box */}
                <rect x="485" y="265" width="160" height="40" 
                    fill="rgba(220, 193, 120, 0.08)" 
                    stroke="#dcc178" 
                    strokeWidth="1.5"
                    opacity="0.7"
                />
                <text x="495" y="288" 
                    fill="#dcc178" 
                    fontSize="11" 
                    fontFamily="monospace"
                    opacity="0.8"
                >
                    Tax Calculation
                </text>
            </g>

            {/* Data Flow from AI to Results */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 1.2s' }}>
                <line x1="435" y1="185" x2="470" y2="140" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5" 
                    opacity="0.4"
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
            </g>

            {/* Corner Brackets */}
            <path d="M 50 30 L 50 50 M 50 30 L 70 30" 
                stroke="#00e0ff" 
                strokeWidth="2" 
                opacity="0.4"
            />
            <path d="M 780 30 L 760 30 M 780 30 L 780 50" 
                stroke="#00e0ff" 
                strokeWidth="2" 
                opacity="0.4"
            />
            <path d="M 50 370 L 50 350 M 50 370 L 70 370" 
                stroke="#00e0ff" 
                strokeWidth="2" 
                opacity="0.4"
            />
            <path d="M 780 370 L 760 370 M 780 370 L 780 350" 
                stroke="#00e0ff" 
                strokeWidth="2" 
                opacity="0.4"
            />
        </svg>
    );
}