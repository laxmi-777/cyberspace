import { useTheme } from '../context/ThemeContext.jsx';

export default function WhoIAm() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const linkColor = isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700';
  const borderColor = isDarkMode ? 'text-gray-600' : 'text-gray-400';
  
  return (
    <div className="max-w-4xl mx-auto p-12 space-y-12">
      <section className="space-y-4">
        <h1 className={`text-4xl font-bold ${textColor}`}>
          who i am
        </h1>
        <p className={`text-lg ${subtextColor} leading-relaxed`}>
          I'm a designer and developer focused on creating thoughtful digital experiences.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={`text-2xl font-semibold ${textColor}`}>About</h2>
        <p className={`${subtextColor} leading-relaxed`}>
          Currently working at the intersection of design and code. I believe in building
          products that are both beautiful and functional, with careful attention to detail
          and user experience.
        </p>
        <p className={`${subtextColor} leading-relaxed`}>
          When I'm not working, you'll find me exploring new technologies, reading, or
          enjoying the outdoors.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={`text-2xl font-semibold ${textColor}`}>Contact</h2>
        <div className={`space-y-2 ${subtextColor}`}>
          <p>
            <a href="mailto:hello@example.com" className={`${linkColor} transition-colors`}>
              hello@example.com
            </a>
          </p>
          <p className="space-x-3">
            <a href="https://twitter.com/yourusername" className={`${linkColor} transition-colors`}>
              Twitter
            </a>
            <span className={borderColor}>·</span>
            <a href="https://github.com/yourusername" className={`${linkColor} transition-colors`}>
              GitHub
            </a>
            <span className={borderColor}>·</span>
            <a href="https://linkedin.com/in/yourusername" className={`${linkColor} transition-colors`}>
              LinkedIn
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
