import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "laxmi ghanate";
  const [isComplete, setIsComplete] = useState(false);
  const [isDisintegrating, setIsDisintegrating] = useState(false);
  const [disintegratedChars, setDisintegratedChars] = useState(new Set());
  const [showIntro, setShowIntro] = useState(false);
  const [highlighterActive, setHighlighterActive] = useState(false);
  const [isHighlighting, setIsHighlighting] = useState(false);
  const [isSwinging, setIsSwinging] = useState(false);
  const { isDarkMode, setIsDarkMode } = useTheme();
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText]);

  useEffect(() => {
    if (highlighterActive && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const context = canvas.getContext('2d');
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.strokeStyle = isDarkMode ? 'rgba(168, 85, 247, 0.08)' : 'rgba(147, 51, 234, 0.1)';
      context.lineWidth = 24;
      context.globalCompositeOperation = 'source-over';
      contextRef.current = context;
    }
  }, [highlighterActive, isDarkMode]);

  const handleTextInteraction = () => {
    if (isComplete && !isDisintegrating) {
      setIsDisintegrating(true);
      
      const chars = fullText.split('').map((_, i) => i);
      const shuffled = chars.sort(() => Math.random() - 0.5);
      
      shuffled.forEach((charIndex, i) => {
        setTimeout(() => {
          setDisintegratedChars(prev => new Set([...prev, charIndex]));
        }, i * 20);
      });

      setTimeout(() => {
        setShowIntro(true);
        setHighlighterActive(true);
      }, shuffled.length * 20 + 500);
    }
  };

  const toggleLightMode = () => {
    setIsSwinging(true);
    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
      setIsSwinging(false);
    }, 500);
  };

  const startDrawing = ({ nativeEvent }) => {
    if (!highlighterActive) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsHighlighting(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isHighlighting || !highlighterActive) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    if (!highlighterActive) return;
    contextRef.current.closePath();
    setIsHighlighting(false);
  };

  const getRandomTransform = () => {
    const angle = Math.random() * 360;
    const distance = 300 + Math.random() * 400;
    const x = Math.cos(angle * Math.PI / 180) * distance;
    const y = Math.sin(angle * Math.PI / 180) * distance;
    const rotation = Math.random() * 720 - 360;
    return { x, y, rotation };
  };

  const bgColor = isDarkMode ? '#191919' : '#f5f5f5';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

  return (
    <div 
      className="relative h-screen w-full overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      {/* Lightbulb - Hanging from Top */}
      <div className="absolute top-0 right-8 z-50">
        <div className="relative">
          {/* Wire extending from top through viewport */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-500" 
               style={{ 
                 top: '-50vh',
                 height: 'calc(50vh + 60px)',
                 transformOrigin: 'top center' 
               }} />
          
          {/* Bulb Container */}
          <div 
            className={`relative cursor-pointer ${isSwinging ? 'animate-swing' : ''}`}
            onClick={toggleLightMode}
            style={{ 
              marginTop: '60px',
              transformOrigin: 'top center',
              animation: isSwinging ? 'swing 0.5s ease-in-out' : 'none'
            }}
          >
            {/* Lightbulb - Upside Down */}
            <svg 
              width="48" 
              height="64" 
              viewBox="0 0 48 64" 
              className="transition-all duration-300"
              style={{ transform: 'rotate(180deg)' }}
            >
              {/* Bulb glow effect when lit */}
              {!isDarkMode && (
                <circle 
                  cx="24" 
                  cy="24" 
                  r="20" 
                  fill="url(#glow)" 
                  opacity="0.6"
                />
              )}
              
              {/* Main bulb shape */}
              <path
                d="M24 4 C14 4 8 10 8 20 C8 26 10 30 14 36 L14 44 L34 44 L34 36 C38 30 40 26 40 20 C40 10 34 4 24 4 Z"
                fill={isDarkMode ? '#D1D5DB' : '#FCD34D'}
                stroke={isDarkMode ? '#9CA3AF' : '#F59E0B'}
                strokeWidth="1"
                className="transition-colors duration-300"
              />
              
              {/* Base */}
              <rect
                x="14"
                y="44"
                width="20"
                height="8"
                fill={isDarkMode ? '#6B7280' : '#9CA3AF'}
                className="transition-colors duration-300"
              />
              
              {/* Base lines */}
              <line x1="14" y1="47" x2="34" y2="47" stroke={isDarkMode ? '#4B5563' : '#6B7280'} strokeWidth="1" />
              <line x1="14" y1="49" x2="34" y2="49" stroke={isDarkMode ? '#4B5563' : '#6B7280'} strokeWidth="1" />
              
              {/* Filament (only visible when on) */}
              {!isDarkMode && (
                <path
                  d="M20 18 L22 24 L26 24 L28 18"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.8"
                />
              )}
              
              {/* Shine effect */}
              <ellipse
                cx="20"
                cy="16"
                rx="4"
                ry="6"
                fill="white"
                opacity={isDarkMode ? "0.2" : "0.3"}
              />
              
              {/* Gradients */}
              <defs>
                <radialGradient id="glow">
                  <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Dot Grid Background */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.25)'} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Drawing Canvas */}
      {highlighterActive && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-30 pointer-events-auto"
          style={{ cursor: 'crosshair' }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      )}
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-20 pointer-events-none">
        <div className="text-center space-y-6 px-4 pointer-events-auto">
          {!showIntro && (
            <>
              <h1 
                className={`text-5xl md:text-7xl font-bold ${textColor} min-h-[1.2em] cursor-pointer select-none transition-colors duration-500`}
                onClick={handleTextInteraction}
              >
                {displayedText.split('').map((char, i) => {
                  const transform = getRandomTransform();
                  return (
                    <span
                      key={i}
                      className={`inline-block transition-all duration-1000 ${
                        disintegratedChars.has(i) ? 'pointer-events-none' : ''
                      }`}
                      style={{
                        transform: disintegratedChars.has(i)
                          ? `translate(${transform.x}px, ${transform.y}px) rotate(${transform.rotation}deg) scale(0)`
                          : 'translate(0, 0) rotate(0deg) scale(1)',
                        opacity: disintegratedChars.has(i) ? 0 : 1,
                        filter: disintegratedChars.has(i) ? 'blur(8px)' : 'blur(0)',
                        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  );
                })}
                {!isComplete && !isDisintegrating && <span className="animate-pulse">|</span>}
              </h1>
              <p className={`${subtextColor} text-lg md:text-xl max-w-2xl mx-auto transition-opacity duration-500 ${isComplete && !isDisintegrating ? 'opacity-100' : 'opacity-0'}`}>
                explore the tabs on the left to learn more about me
              </p>
            </>
          )}
          
          {showIntro && (
            <div className={`${textColor} text-left max-w-3xl mx-auto space-y-4 transition-opacity duration-1000 ${showIntro ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-lg leading-relaxed">
                Hi there! I'm Laxmi Ghanate. You can find the basics on my homepage and my resume. I'm currently freelancing, and I'm studying Computer Science at the University of Virginia (2023–2026).
              </p>
              <p className="text-lg leading-relaxed">
                This site is where I keep notes on what I'm building and learning — web dev, design, product thinking, and occasionally security/CTF stuff. I also go back and edit old posts when I change my mind or something becomes outdated, so don't treat anything here like it's carved in stone. Opinions are my own, and I'm not speaking for UVA, past teams, or any clients. Feel free to reach out if you want to chat about anything you see here!
              </p>
              <p className="text-lg leading-relaxed">
                This was made with React + Vite, styled with Tailwind, and routed with React Router. I'm hosting it on GitHub Pages with a GitHub Actions workflow for deploys. The dark/light theme uses React Context, and a lot of the "fun" UI (the purple highlighter, typing/text effects, and animations) is custom — mostly Canvas + CSS. I kept the stack lightweight on purpose. Hope you like it :) If you have any thoughts reach out!
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${isDarkMode ? 'to-[#191919]/50' : 'to-[#f5f5f5]/50'} pointer-events-none transition-colors duration-500`} />
      
      <style>{`
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }
        
        .highlighter-cursor {
          cursor: url("data:image/svg+xml;charset=UTF-8,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='6' fill='%23a855f7'/%3e%3ccircle cx='8' cy='8' r='2' fill='white'/%3e%3c/svg%3e") 8 8, auto;
        }
      `}</style>
    </div>
  );
}
