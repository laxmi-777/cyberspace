import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const projectData = {
  'software-engineering': {
    subtitle: 'Full-stack development and system architecture projects',
    projects: [
      {
        slug: 'distributed-system',
        title: 'Distributed Data Pipeline',
        description: 'Built a scalable data processing system handling 10M+ events per day using Apache Kafka and microservices architecture',
        year: '2024',
        categories: ['Backend', 'DevOps', 'Architecture'],
      },
      {
        slug: 'real-time-app',
        title: 'Real-time Collaboration Platform',
        description: 'Developed a WebSocket-based collaboration tool with React, Node.js, and Redis for instant synchronization',
        year: '2024',
        categories: ['Full-stack', 'Real-time', 'React'],
      },
      {
        slug: 'api-gateway',
        title: 'GraphQL API Gateway',
        description: 'Designed and implemented a unified GraphQL gateway consolidating 12+ microservices with TypeScript and Apollo',
        year: '2023',
        categories: ['Backend', 'GraphQL', 'TypeScript'],
      },
    ],
  },
  'consulting': {
    subtitle: 'Strategic technical consulting and advisory engagements',
    projects: [
      {
        slug: 'cloud-migration',
        title: 'Enterprise Cloud Migration',
        description: 'Led technical strategy for migrating legacy monolith to AWS cloud-native architecture, reducing costs by 40%',
        year: '2024',
        categories: ['Strategy', 'Cloud', 'AWS'],
      },
      {
        slug: 'tech-assessment',
        title: 'Technology Stack Evaluation',
        description: 'Conducted comprehensive technical audit and provided recommendations for modernizing aging infrastructure',
        year: '2023',
        categories: ['Assessment', 'Strategy', 'Architecture'],
      },
      {
        slug: 'team-scaling',
        title: 'Engineering Team Scaling',
        description: 'Advised startup on engineering org structure, hiring strategy, and development practices during 3x growth phase',
        year: '2023',
        categories: ['Advisory', 'Leadership', 'Process'],
      },
    ],
  },
};

export default function WhatIDo() {
  const [activeTab, setActiveTab] = useState('software-engineering');
  const { isDarkMode } = useTheme();
  
  const bgColor = isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-50';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-200';
  const lineNumBg = isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-100';
  const lineNumText = isDarkMode ? 'text-gray-600' : 'text-gray-400';
  const hoverColor = isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600';
  const tagBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';
  const tagText = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const yearColor = isDarkMode ? 'text-gray-500' : 'text-gray-600';
  const inactiveTabBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';
  const inactiveTabText = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const inactiveTabHover = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300';

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
    <div className="flex h-full">
      {/* Line numbers sidebar */}
      <div className={`w-12 ${lineNumBg} border-r ${borderColor} flex-shrink-0 py-12 px-2 transition-colors duration-500`}>
        <div className={`flex flex-col items-end text-xs ${lineNumText} font-mono leading-6`}>
          {Array.from({ length: 30 }, (_, i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className={`flex-1 overflow-auto ${bgColor} transition-colors duration-500`}>
        <div className="max-w-4xl mx-auto p-12 space-y-8">
          <section className="space-y-4">
            <h1 className={`text-4xl font-bold ${textColor} font-mono`}>what i do</h1>
            
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
                    ? 'bg-blue-600 text-white'
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
                    ? 'bg-blue-600 text-white'
                    : `${inactiveTabBg} ${inactiveTabText} ${inactiveTabHover}`
                }`}
              >
                Consulting
              </button>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              {currentData.subtitle}
            </p>
          </section>

          <section id="projects-panel" role="tabpanel" className="space-y-8">
            {currentData.projects.map((project) => (
              <Link
                key={project.slug}
                to={`/what-i-do/${project.slug}`}
                className="block group space-y-3 pb-8 border-b border-gray-800 last:border-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
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
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
