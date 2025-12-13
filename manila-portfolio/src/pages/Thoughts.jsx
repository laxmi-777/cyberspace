import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

const posts = [
  {
    slug: 'building-better-interfaces',
    title: 'Building Better Interfaces',
    date: 'Dec 10, 2024',
    excerpt: 'Thoughts on creating intuitive user experiences that feel natural and effortless.',
  },
  {
    slug: 'design-systems-that-scale',
    title: 'Design Systems That Scale',
    date: 'Nov 22, 2024',
    excerpt: 'Lessons learned from implementing design systems in growing organizations.',
  },
  {
    slug: 'minimalism-in-web-design',
    title: 'Minimalism in Web Design',
    date: 'Oct 15, 2024',
    excerpt: 'Why less is often more when it comes to digital product design.',
  },
  {
    slug: 'the-value-of-whitespace',
    title: 'The Value of Whitespace',
    date: 'Sep 8, 2024',
    excerpt: 'How negative space enhances readability and creates visual hierarchy.',
  },
];

export default function Thoughts() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const hoverColor = isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-200';
  const dateColor = isDarkMode ? 'text-gray-500' : 'text-gray-600';
  
  return (
    <div className="max-w-4xl mx-auto p-12 space-y-12">
      <section className="space-y-4">
        <h1 className={`text-4xl font-bold ${textColor}`}>thoughts</h1>
        <p className={`text-lg ${subtextColor} leading-relaxed`}>
          Writing about design, development, and everything in between
        </p>
      </section>

      <section className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/thoughts/${post.slug}`}
            className={`block group space-y-2 pb-6 border-b ${borderColor} last:border-0`}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className={`text-xl font-semibold ${textColor} ${hoverColor} transition-colors`}>
                {post.title}
              </h2>
              <span className={`text-sm ${dateColor} whitespace-nowrap mt-0.5`}>
                {post.date}
              </span>
            </div>
            <p className={`${subtextColor} leading-relaxed`}>
              {post.excerpt}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
