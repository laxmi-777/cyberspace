import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

const posts = [
  {
    slug: 'building-this-website',
    title: 'Building This Website',
    date: 'Dec 15, 2025',
    excerpt: 'My experience iterating and building this portfolio with Claude Sonnet 4.5—what worked, what didn\'t, and what I learned about AI-assisted development.',
  },
  {
    slug: 'what-university-taught-me',
    title: 'What University Has Taught Me',
    date: 'Dec 12, 2025',
    excerpt: 'Beyond lectures and exams—lessons about collaboration, failure, and finding your own path in a sea of expectations.',
  },
  {
    slug: 'trying-to-be-more-creative',
    title: 'Trying to Be More Creative',
    date: 'Dec 8, 2025',
    excerpt: 'Creativity isn\'t about waiting for inspiration. It\'s about showing up, experimenting, and letting yourself make things that don\'t have to be perfect.',
  },
  {
    slug: 'the-value-of-side-projects',
    title: 'The Value of Side Projects',
    date: 'Nov 28, 2025',
    excerpt: 'Side projects aren\'t just resume padding—they\'re where you learn what you actually care about building when no one\'s telling you what to do.',
  },
];

export default function Thoughts() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const hoverColor = isDarkMode ? 'hover:text-purple-400' : 'hover:text-purple-600';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-200';
  const bgColor = isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white';
  
  return (
    <div className={`flex-1 ${bgColor} transition-colors duration-500`}>
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        <section className="space-y-3">
          <h1 className={`text-5xl font-bold ${textColor}`}>thoughts</h1>
          <p className={`text-lg ${subtextColor}`}>
            Writing about things I'm learning and thinking about
          </p>
        </section>

        <section className="space-y-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/thoughts/${post.slug}`}
              className="block group space-y-3"
            >
              <h2 className={`text-2xl font-semibold ${textColor} ${hoverColor} transition-colors`}>
                {post.title}
              </h2>
              <p className={`${subtextColor} leading-relaxed`}>
                {post.excerpt}
              </p>
              <div className={`text-sm ${subtextColor}`}>
                {post.date}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
