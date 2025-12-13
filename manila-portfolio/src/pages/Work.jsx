import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const projectData = {
  'software-engineering': {
    subtitle: 'Full-stack development, UX design, and technical projects',
    projects: [
      {
        slug: 'gradecamp-gradehorizon',
        title: 'GradeCamp / GradeHorizon',
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
        slug: 'hoosactive-research',
        title: 'HoosActive: Research → Requirements → Metrics',
        description: 'Led the "make it measurable" work: turned user interviews/personas into clear requirements and evaluation metrics for the final product direction',
        year: '2025',
        categories: ['Research', 'Strategy', 'Metrics'],
      },
      {
        slug: 'grade-tool-mvp',
        title: 'Grade Tool: Scope & MVP Planning',
        description: 'Broke a big idea into a shippable MVP: prioritized features, wrote acceptance criteria, and planned a roadmap (including syllabus upload + AI analysis)',
        year: '2025',
        categories: ['Product', 'Planning', 'Documentation'],
      },
      {
        slug: 'security-findings',
        title: 'Security Findings: Risk Communication',
        description: 'Practice writing security findings so a non-technical audience can act: issue → impact → recommendation, with clear next steps and minimal jargon',
        year: '2025',
        categories: ['Communication', 'Risk', 'Clarity'],
      },
      {
        slug: 'team-delivery',
        title: 'Team Delivery: Coordination & Process',
        description: 'Organized work across teammates using lightweight structure (checklists, deadlines, "definition of done"), keeping deliverables moving without drama',
        year: '2025',
        categories: ['Process', 'Leadership', 'Execution'],
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
