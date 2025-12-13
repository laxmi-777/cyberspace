import { Link } from 'react-router-dom';

const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    description: 'A comprehensive design system for a SaaS platform',
    year: '2024',
    categories: ['Design', 'Development'],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description: 'Mobile app redesign for improved user engagement',
    year: '2023',
    categories: ['Design', 'Research'],
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    description: 'Building a modern web application with React',
    year: '2023',
    categories: ['Development'],
  },
];

export default function WhatIDo() {
  return (
    <div className="flex h-full">
      {/* Line numbers sidebar */}
      <div className="w-12 bg-[#1e1e1e] border-r border-gray-800 flex-shrink-0 py-12 px-2">
        <div className="flex flex-col items-end text-xs text-gray-600 font-mono leading-6">
          {Array.from({ length: 30 }, (_, i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-12 space-y-12">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-white font-mono">what i do</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Selected projects and case studies
            </p>
          </section>

          <section className="space-y-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/what-i-do/${project.slug}`}
                className="block group space-y-3 pb-8 border-b border-gray-800 last:border-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-sm text-gray-500 whitespace-nowrap mt-1">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-block px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full"
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
