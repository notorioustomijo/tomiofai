import { useEffect, useState } from 'react';

export default function ClaraWireframe() {
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
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#00e0ff', stopOpacity: 0 }} />
                    <stop offset="50%" style={{ stopColor: '#00e0ff', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#00e0ff', stopOpacity: 0 }} />
                </linearGradient>
            </defs>

            {/* Grid Background */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 224, 255, 0.05)" strokeWidth="0.5"/>
            </pattern>
            <rect width="800" height="400" fill="url(#grid)" />

            {/* Voice Input - Left Side */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 0.8s ease 0.2s' }}>
                {/* Phone Icon */}
                <rect x="80" y="160" width="80" height="80" 
                    fill="none" 
                    stroke="#8a7fff" 
                    strokeWidth="2"
                    rx="8"
                    opacity="0.6"
                />
                <path d="M 100 180 Q 100 175 105 175 L 135 175 Q 140 175 140 180 L 140 220 Q 140 225 135 225 L 105 225 Q 100 225 100 220 Z" 
                    fill="none" 
                    stroke="#8a7fff" 
                    strokeWidth="1.5"
                    opacity="0.7"
                />
                <circle cx="120" cy="215" r="3" fill="#8a7fff" opacity="0.6" />
                
                {/* Sound Waves emanating from phone */}
                <path d="M 170 180 Q 185 180 185 200 Q 185 220 170 220" 
                    fill="none" 
                    stroke="#8a7fff" 
                    strokeWidth="1.5"
                    opacity="0.4"
                >
                    <animate 
                        attributeName="opacity" 
                        values="0.2;0.6;0.2" 
                        dur="2s" 
                        repeatCount="indefinite" 
                    />
                </path>
                <path d="M 185 170 Q 205 170 205 200 Q 205 230 185 230" 
                    fill="none" 
                    stroke="#8a7fff" 
                    strokeWidth="1.5"
                    opacity="0.3"
                >
                    <animate 
                        attributeName="opacity" 
                        values="0.1;0.5;0.1" 
                        dur="2s" 
                        begin="0.3s"
                        repeatCount="indefinite" 
                    />
                </path>
            </g>

            {/* Voice Waveform - Center Top */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 0.5s' }}>
                {/* Waveform Container */}
                <rect x="250" y="50" width="300" height="80" 
                    fill="rgba(0, 224, 255, 0.03)" 
                    stroke="#00e0ff" 
                    strokeWidth="1"
                    opacity="0.5"
                />
                
                {/* Animated Waveform */}
                <path d="M 260 90 L 270 85 L 280 90 L 290 70 L 300 90 L 310 80 L 320 90 L 330 75 L 340 90 L 350 85 L 360 90 L 370 65 L 380 90 L 390 80 L 400 90 L 410 70 L 420 90 L 430 85 L 440 90 L 450 75 L 460 90 L 470 80 L 480 90 L 490 85 L 500 90 L 510 70 L 520 90 L 530 85 L 540 90" 
                    fill="none" 
                    stroke="#00e0ff" 
                    strokeWidth="2"
                    opacity="0.7"
                    filter="url(#glow)"
                >
                    <animate 
                        attributeName="d" 
                        values="M 260 90 L 270 85 L 280 90 L 290 70 L 300 90 L 310 80 L 320 90 L 330 75 L 340 90 L 350 85 L 360 90 L 370 65 L 380 90 L 390 80 L 400 90 L 410 70 L 420 90 L 430 85 L 440 90 L 450 75 L 460 90 L 470 80 L 480 90 L 490 85 L 500 90 L 510 70 L 520 90 L 530 85 L 540 90;
                                M 260 90 L 270 80 L 280 90 L 290 75 L 300 90 L 310 85 L 320 90 L 330 65 L 340 90 L 350 80 L 360 90 L 370 70 L 380 90 L 390 85 L 400 90 L 410 75 L 420 90 L 430 80 L 440 90 L 450 70 L 460 90 L 470 85 L 480 90 L 490 80 L 500 90 L 510 65 L 520 90 L 530 80 L 540 90;
                                M 260 90 L 270 85 L 280 90 L 290 70 L 300 90 L 310 80 L 320 90 L 330 75 L 340 90 L 350 85 L 360 90 L 370 65 L 380 90 L 390 80 L 400 90 L 410 70 L 420 90 L 430 85 L 440 90 L 450 75 L 460 90 L 470 80 L 480 90 L 490 85 L 500 90 L 510 70 L 520 90 L 530 85 L 540 90" 
                        dur="1.5s" 
                        repeatCount="indefinite" 
                    />
                </path>
                
                <text x="400" y="25" 
                    fill="#00e0ff" 
                    fontSize="10" 
                    fontFamily="monospace"
                    textAnchor="middle"
                    opacity="0.6"
                >
                    [VOICE_INPUT]
                </text>
            </g>

            {/* Processing Pipeline - Center */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 0.8s' }}>
                {/* STT Node */}
                <rect x="280" y="160" width="60" height="40" 
                    fill="rgba(138, 127, 255, 0.1)" 
                    stroke="#8a7fff" 
                    strokeWidth="1.5"
                    opacity="0.7"
                />
                <text x="310" y="183" 
                    fill="#8a7fff" 
                    fontSize="9" 
                    fontFamily="monospace"
                    textAnchor="middle"
                    opacity="0.8"
                >
                    STT
                </text>
                
                {/* AI Processing Node */}
                <circle cx="400" cy="180" r="35" 
                    fill="rgba(0, 224, 255, 0.1)" 
                    stroke="#00e0ff" 
                    strokeWidth="2"
                    opacity="0.8"
                    filter="url(#glow)"
                >
                    <animate 
                        attributeName="r" 
                        values="35;37;35" 
                        dur="3s" 
                        repeatCount="indefinite" 
                    />
                </circle>
                <circle cx="400" cy="180" r="24" 
                    fill="none" 
                    stroke="#00e0ff" 
                    strokeWidth="1"
                    opacity="0.3"
                />
                <text x="400" y="185" 
                    fill="#00e0ff" 
                    fontSize="12" 
                    fontFamily="monospace"
                    textAnchor="middle"
                    opacity="0.9"
                >
                    AI
                </text>
                
                {/* TTS Node */}
                <rect x="460" y="160" width="60" height="40" 
                    fill="rgba(0, 224, 255, 0.1)" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5"
                    opacity="0.7"
                />
                <text x="490" y="183" 
                    fill="#00e0ff" 
                    fontSize="9" 
                    fontFamily="monospace"
                    textAnchor="middle"
                    opacity="0.8"
                >
                    TTS
                </text>
            </g>

            {/* Data Flow Lines */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 1s' }}>
                {/* Phone to STT */}
                <line x1="205" y1="200" x2="280" y2="180" 
                    stroke="#8a7fff" 
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
                
                {/* STT to AI */}
                <line x1="340" y1="180" x2="365" y2="180" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5" 
                    opacity="0.5"
                    strokeDasharray="4,4"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="-8" 
                        dur="0.8s" 
                        repeatCount="indefinite" 
                    />
                </line>
                
                {/* AI to TTS */}
                <line x1="435" y1="180" x2="460" y2="180" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5" 
                    opacity="0.5"
                    strokeDasharray="4,4"
                >
                    <animate 
                        attributeName="stroke-dashoffset" 
                        from="0" 
                        to="-8" 
                        dur="0.8s" 
                        repeatCount="indefinite" 
                    />
                </line>
                
                {/* TTS to Output */}
                <line x1="520" y1="180" x2="600" y2="200" 
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

            {/* Response Output - Right Side */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 1.2s' }}>
                {/* Speaker Icon */}
                <rect x="600" y="160" width="80" height="80" 
                    fill="none" 
                    stroke="#00e0ff" 
                    strokeWidth="2"
                    rx="8"
                    opacity="0.6"
                />
                <path d="M 620 190 L 630 185 L 630 215 L 620 210 Z" 
                    fill="#00e0ff" 
                    opacity="0.6"
                />
                <path d="M 635 185 L 645 180 L 645 220 L 635 215 Z" 
                    fill="none" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5"
                    opacity="0.6"
                />
                
                {/* Sound waves from speaker */}
                <path d="M 650 185 Q 660 185 660 200 Q 660 215 650 215" 
                    fill="none" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5"
                    opacity="0.5"
                >
                    <animate 
                        attributeName="opacity" 
                        values="0.3;0.7;0.3" 
                        dur="2s" 
                        repeatCount="indefinite" 
                    />
                </path>
                <path d="M 660 175 Q 675 175 675 200 Q 675 225 660 225" 
                    fill="none" 
                    stroke="#00e0ff" 
                    strokeWidth="1.5"
                    opacity="0.4"
                >
                    <animate 
                        attributeName="opacity" 
                        values="0.2;0.6;0.2" 
                        dur="2s" 
                        begin="0.3s"
                        repeatCount="indefinite" 
                    />
                </path>
            </g>

            {/* Conversation Flow - Bottom */}
            <g opacity={animate ? "1" : "0"} style={{ transition: 'opacity 1s ease 1.4s' }}>
                <rect x="200" y="280" width="400" height="80" 
                    fill="rgba(220, 193, 120, 0.05)" 
                    stroke="#dcc178" 
                    strokeWidth="1"
                    opacity="0.5"
                />
                
                {/* Flow Steps */}
                <circle cx="250" cy="320" r="8" fill="#dcc178" opacity="0.6" />
                <text x="250" y="345" fill="#dcc178" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.6">Listen</text>
                
                <line x1="258" y1="320" x2="292" y2="320" stroke="#dcc178" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
                
                <circle cx="300" cy="320" r="8" fill="#dcc178" opacity="0.6" />
                <text x="300" y="345" fill="#dcc178" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.6">Process</text>
                
                <line x1="308" y1="320" x2="342" y2="320" stroke="#dcc178" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
                
                <circle cx="350" cy="320" r="8" fill="#dcc178" opacity="0.6" />
                <text x="350" y="345" fill="#dcc178" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.6">Decide</text>
                
                <line x1="358" y1="320" x2="392" y2="320" stroke="#dcc178" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
                
                <circle cx="400" cy="320" r="8" fill="#dcc178" opacity="0.6" />
                <text x="400" y="345" fill="#dcc178" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.6">Route</text>
                
                <line x1="408" y1="320" x2="442" y2="320" stroke="#dcc178" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
                
                <circle cx="450" cy="320" r="8" fill="#dcc178" opacity="0.6" />
                <text x="450" y="345" fill="#dcc178" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.6">Respond</text>
                
                <line x1="458" y1="320" x2="492" y2="320" stroke="#dcc178" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
                
                <circle cx="500" cy="320" r="8" fill="#dcc178" opacity="0.6" />
                <text x="500" y="345" fill="#dcc178" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.6">Book</text>
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