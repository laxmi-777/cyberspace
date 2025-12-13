import { useParams, Link } from 'react-router-dom';

const projects = {
  'project-one': {
    title: 'Project One',
    year: '2024',
    categories: ['Design', 'Development'],
    description: 'A comprehensive design system for a SaaS platform',
    content: `
      This project involved creating a complete design system from the ground up for a rapidly
      growing SaaS platform. The challenge was to establish consistency across multiple products
      while maintaining flexibility for future growth.

      The system included a component library, design tokens, and comprehensive documentation
      that enabled the team to ship features faster while maintaining quality.

      Key outcomes included a 40% reduction in design-to-development time and improved
      consistency across all products.
    `,
    role: 'Lead Designer & Developer',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
  },
  'project-two': {
    title: 'Project Two',
    year: '2023',
    categories: ['Design', 'Research'],
    description: 'Mobile app redesign for improved user engagement',
    content: `
      A complete redesign of a mobile application to improve user engagement and retention.
      The project started with extensive user research and usability testing to identify
      pain points in the existing experience.

      Through iterative design and testing, we created a more intuitive interface that
      better aligned with user mental models and expectations.

      The redesign resulted in a 60% increase in daily active users and a 45% improvement
      in task completion rates.
    `,
    role: 'Product Designer',
    technologies: ['Figma', 'React Native', 'User Testing'],
  },
  'project-three': {
    title: 'Project Three',
    year: '2023',
    categories: ['Development'],
    description: 'Building a modern web application with React',
    content: `
      Development of a modern, performant web application using React and modern web technologies.
      The focus was on creating a fast, accessible, and maintainable codebase.

      Implemented best practices for code organization, testing, and deployment pipelines.
      The application was built with performance in mind, achieving excellent Core Web Vitals scores.

      Successfully launched to thousands of users with minimal issues and positive feedback.
    `,
    role: 'Frontend Developer',
    technologies: ['React', 'Vite', 'TypeScript', 'React Query'],
  },
};

export default function WorkDetail() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-12 space-y-8">
        <Link to="/what-i-do" className="inline-block text-gray-400 hover:text-white transition-colors">
          ← Back to what i do
        </Link>
        <h1 className="text-4xl font-bold text-white">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-12 space-y-12">
      <Link to="/what-i-do" className="inline-block text-gray-400 hover:text-white transition-colors">
        ← Back to what i do
      </Link>

      <section className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <span className="text-sm text-gray-500 whitespace-nowrap mt-2">{project.year}</span>
          </div>
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
        </div>

        <p className="text-xl text-gray-300 leading-relaxed">
          {project.description}
        </p>
      </section>

      <section className="space-y-6">
        <div className="prose prose-gray max-w-none">
          {project.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-4 pt-6 border-t border-gray-800">
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-medium text-white mb-1">Role</h3>
            <p className="text-gray-300">{project.role}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white mb-1">Technologies</h3>
            <p className="text-gray-300">{project.technologies.join(', ')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
