import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const projectData = {
  'software-engineering': {
    subtitle: 'Full-stack development, UX design, and technical projects',
    projects: [
      {
        slug: 'sustainability-calculator-fullstack',
        title: 'Sustainability Calculator: Full-Stack Build + DevOps Cleanup',
        description: 'Built and deployed a Django web app for carbon footprint calculation—took over DevOps when deployment pipeline broke',
        year: '2025',
        categories: ['Development', 'Django', 'DevOps'],
      },
      {
        slug: 'gradecamp-gradehorizon',
        title: 'GradeHorizon',
        description: 'Built an interactive grade planner that lets students track classes, add assignments, and see real-time "what I need on the final" scenarios',
        year: '2025',
        categories: ['Development', 'UX', 'JavaScript'],
      },
      {
        slug: 'hoosactive',
        title: 'HoosActive (HCI Team Project)',
        description: 'Designed and prototyped a social accountability gym experience focused on quick logging, motivation loops, and usability for busy students',
        year: '2025',
        categories: ['Development', 'UX', 'Collaboration'],
      },
      {
        slug: 'cybersecurity-labs',
        title: 'Cybersecurity Labs & Writeups',
        description: 'Documented practical security workflows (web testing, forensics basics, debugging) with clean explanations and sanitized evidence—focused on methodology, not spoilers',
        year: '2025',
        categories: ['Security', 'Linux', 'Analysis'],
      },
      {
        slug: 'test-oracle-research',
        title: 'Automated Test Oracle Research (LLM)',
        description: 'Worked on using LLMs to generate or evaluate test oracles; built small experiments to compare outputs and identify failure modes',
        year: '2025',
        categories: ['Research', 'Python', 'LLMs'],
      },
      {
        slug: 'dd-now',
        title: 'DD Now (Startup Web Dev)',
        description: 'Built web features for a student safety startup connecting volunteer drivers to reduce drunk driving; shipped UI + functionality under real constraints',
        year: '2023/2024',
        categories: ['Development', 'Web', 'Impact'],
      },
    ],
  },
  'consulting': {
    subtitle: 'Product strategy, research translation, and project coordination',
    projects: [
      {
        slug: 'sustainability-calculator',
        title: 'Sustainability Calculator: Requirements Management',
        description: 'Defined tool behavior, assumptions, and acceptance criteria to turn a moral idea into a defensible decision system',
        year: '2025',
        categories: ['Requirements', 'Systems', 'Documentation'],
      },
      {
        slug: 'hoosactive-research',
        title: 'HoosActive: Research → Requirements → Metrics',
        description: 'Led the "make it measurable" work: turned user interviews/personas into clear requirements and evaluation metrics for the final product direction',
        year: '2025',
        categories: ['Research', 'Strategy', 'Metrics'],
      },
      {
        slug: 'ai-iot-risk-analysis',
        title: 'Risk Analysis of AI-Driven Cybersecurity in Smart Home IoT Systems',
        description: 'Built a layered risk framework for smart home security: threat prioritization, attack modeling, resilience analysis, and recovery dynamics',
        year: '2025',
        categories: ['Risk Analysis', 'Systems', 'Security'],
      },
    ],
  },
};

export default function WhatIDo() {
  const [activeTab, setActiveTab] = useState('software-engineering');
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "what i do";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [subtitleDisplayed, setSubtitleDisplayed] = useState('');
  const [isSubtitleComplete, setIsSubtitleComplete] = useState(false);
  const [plantSize, setPlantSize] = useState(1);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedText]);

  useEffect(() => {
    const currentSubtitle = projectData[activeTab].subtitle;
    setSubtitleDisplayed('');
    setIsSubtitleComplete(false);
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < currentSubtitle.length) {
        setSubtitleDisplayed(currentSubtitle.slice(0, index + 1));
        index++;
      } else {
        setIsSubtitleComplete(true);
        clearInterval(interval);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [activeTab]);
  
  const bgColor = isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-300';
  const lineNumBg = isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-100';
  const lineNumText = isDarkMode ? 'text-gray-600' : 'text-gray-400';
  const hoverColor = isDarkMode ? 'group-hover:text-purple-400' : 'group-hover:text-purple-600';
  const tagBg = isDarkMode ? 'bg-gray-800' : 'bg-purple-100';
  const tagText = isDarkMode ? 'text-gray-300' : 'text-purple-800';
  const yearColor = isDarkMode ? 'text-gray-500' : 'text-gray-600';
  const inactiveTabBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
  const inactiveTabText = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const inactiveTabHover = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200';

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = (e, tab) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(tab);
    }
  };

  const currentData = projectData[activeTab];

  return (
    <div className={`flex-1 overflow-auto ${bgColor} transition-colors duration-500`}>
      <div className="max-w-4xl mx-auto p-12 space-y-8">
        <section className="space-y-4">
          <div className="flex items-center gap-6">
            <h1 className={`text-4xl font-bold ${textColor} font-mono`}>
              {displayedText}
              {!isTypingComplete && <span className="animate-pulse">|</span>}
            </h1>
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => setPlantSize(prev => prev >= 3 ? 1 : prev + 0.3)}
                className="cursor-pointer transition-transform hover:scale-105 focus:outline-none"
                aria-label="Click to grow the plant"
              >
                <svg
                  width="60"
                  height="80"
                  viewBox="0 0 60 80"
                  style={{ transform: `scale(${plantSize})`, transition: 'transform 0.3s ease' }}
                >
                  {/* Pot */}
                  <path
                    d="M20 60 L15 75 L45 75 L40 60 Z"
                    fill={isDarkMode ? '#7c3aed' : '#9333ea'}
                    stroke={isDarkMode ? '#a855f7' : '#7c3aed'}
                    strokeWidth="1.5"
                  />
                  {/* Soil */}
                  <ellipse cx="30" cy="60" rx="10" ry="3" fill={isDarkMode ? '#4a5568' : '#2d3748'} />
                  {/* Stem */}
                  <line x1="30" y1="60" x2="30" y2="40" stroke={isDarkMode ? '#10b981' : '#059669'} strokeWidth="2.5" />
                  {/* Left leaf */}
                  <path
                    d="M30 50 Q20 48 18 42"
                    fill="none"
                    stroke={isDarkMode ? '#34d399' : '#10b981'}
                    strokeWidth="2"
                  />
                  <ellipse cx="18" cy="42" rx="6" ry="4" fill={isDarkMode ? '#34d399' : '#10b981'} />
                  {/* Right leaf */}
                  <path
                    d="M30 50 Q40 48 42 42"
                    fill="none"
                    stroke={isDarkMode ? '#34d399' : '#10b981'}
                    strokeWidth="2"
                  />
                  <ellipse cx="42" cy="42" rx="6" ry="4" fill={isDarkMode ? '#34d399' : '#10b981'} />
                  {/* Flower */}
                  <circle cx="30" cy="38" r="5" fill={isDarkMode ? '#f472b6' : '#ec4899'} />
                  <circle cx="26" cy="36" r="4" fill={isDarkMode ? '#f472b6' : '#ec4899'} />
                  <circle cx="34" cy="36" r="4" fill={isDarkMode ? '#f472b6' : '#ec4899'} />
                  <circle cx="28" cy="32" r="4" fill={isDarkMode ? '#f472b6' : '#ec4899'} />
                  <circle cx="32" cy="32" r="4" fill={isDarkMode ? '#f472b6' : '#ec4899'} />
                  <circle cx="30" cy="35" r="3" fill={isDarkMode ? '#fde047' : '#facc15'} />
                </svg>
              </button>
              <p className={`text-xs ${subtextColor} italic text-center`}>click me to grow!</p>
            </div>
          </div>
            
            {/* Tabbed Toggle */}
            <div className="flex gap-2 pt-4" role="tablist" aria-label="Project categories">
              <button
                role="tab"
                aria-selected={activeTab === 'software-engineering'}
                aria-controls="projects-panel"
                onClick={() => handleTabClick('software-engineering')}
                onKeyDown={(e) => handleKeyDown(e, 'software-engineering')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === 'software-engineering'
                    ? 'bg-purple-600 text-white'
                    : `${inactiveTabBg} ${inactiveTabText} ${inactiveTabHover}`
                }`}
              >
                Software Engineering
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'consulting'}
                aria-controls="projects-panel"
                onClick={() => handleTabClick('consulting')}
                onKeyDown={(e) => handleKeyDown(e, 'consulting')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === 'consulting'
                    ? 'bg-purple-600 text-white'
                    : `${inactiveTabBg} ${inactiveTabText} ${inactiveTabHover}`
                }`}
              >
                Consulting
              </button>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              {subtitleDisplayed}
              {!isSubtitleComplete && <span className="animate-pulse">|</span>}
            </p>
          </section>

          <section id="projects-panel" role="tabpanel" className={activeTab === 'software-engineering' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-8'}>
            {currentData.projects.map((project) => (
              activeTab === 'software-engineering' ? (
                <Link
                  key={project.slug}
                  to={`/what-i-do/${project.slug}`}
                  className={`block group p-6 rounded-lg border ${borderColor} ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} transition-all hover:border-purple-500 hover:shadow-lg`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className={`text-xl font-semibold ${textColor} ${hoverColor} transition-colors`}>
                        {project.title}
                      </h2>
                      <span className={`text-xs ${yearColor} whitespace-nowrap mt-1`}>
                        {project.year}
                      </span>
                    </div>
                    <p className={`${subtextColor} text-sm leading-relaxed line-clamp-3`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((category) => (
                        <span
                          key={category}
                          className={`inline-block px-2 py-1 text-xs font-medium ${tagText} ${tagBg} rounded-full`}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ) : (
                <Link
                  key={project.slug}
                  to={`/what-i-do/${project.slug}`}
                  className={`block group space-y-3 pb-8 border-b ${borderColor} last:border-0`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className={`text-2xl font-semibold ${textColor} ${hoverColor} transition-colors`}>
                      {project.title}
                    </h2>
                    <span className={`text-sm ${yearColor} whitespace-nowrap mt-1`}>
                      {project.year}
                    </span>
                  </div>
                  <p className={`${subtextColor} leading-relaxed`}>
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className={`inline-block px-3 py-1 text-xs font-medium ${tagText} ${tagBg} rounded-full`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            ))}
          </section>
      </div>
    </div>
  );
}
