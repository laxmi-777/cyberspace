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
          I turn ambiguous ideas into products people actually use.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={`text-2xl font-semibold ${textColor}`}>About</h2>
        <p className={`${subtextColor} leading-relaxed`}>
          I'm Laxmi Ghanate, a computer science student at UVA who works at the intersection of engineering, UX, and clear communication. I'm happiest when I can define the problem, design the workflow, and build the solution — with the kind of structure that makes teams move faster.
        </p>
        <p className={`${subtextColor} leading-relaxed`}>
          Right now I'm focused on student-facing tools, human-centered design projects, and building a stronger security mindset into everything I ship.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={`text-2xl font-semibold ${textColor}`}>What I value</h2>
        <p className={`${subtextColor} leading-relaxed`}>
          Clarity &gt; complexity. Shipping &gt; perfect. Secure-by-default &gt; "we'll fix it later."
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={`text-2xl font-semibold ${textColor}`}>Contact</h2>
        <div className={`space-y-2 ${subtextColor}`}>
          <p>
            <span className={subtextColor}>Email: </span>
            <a href="mailto:laxmi.ghanate07@gmail.com" className={`${linkColor} transition-colors`}>
              laxmi.ghanate07@gmail.com
            </a>
          </p>
          <p>
            <span className={subtextColor}>GitHub: </span>
            <a href="https://github.com/laxmi-777" className={`${linkColor} transition-colors`} target="_blank" rel="noopener noreferrer">
              github.com/laxmi-777
            </a>
          </p>
          <p>
            <span className={subtextColor}>LinkedIn: </span>
            <a href="https://www.linkedin.com/in/laxmi-ghanate-33445b255/" className={`${linkColor} transition-colors`} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/laxmi-ghanate-33445b255
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
