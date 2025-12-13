export default function WhoIAm() {
  return (
    <div className="max-w-4xl mx-auto p-12 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-white">
          who i am
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a designer and developer focused on creating thoughtful digital experiences.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">About</h2>
        <p className="text-gray-300 leading-relaxed">
          Currently working at the intersection of design and code. I believe in building
          products that are both beautiful and functional, with careful attention to detail
          and user experience.
        </p>
        <p className="text-gray-300 leading-relaxed">
          When I'm not working, you'll find me exploring new technologies, reading, or
          enjoying the outdoors.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Contact</h2>
        <div className="space-y-2 text-gray-300">
          <p>
            <a href="mailto:hello@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              hello@example.com
            </a>
          </p>
          <p className="space-x-3">
            <a href="https://twitter.com/yourusername" className="text-blue-400 hover:text-blue-300 transition-colors">
              Twitter
            </a>
            <span className="text-gray-600">·</span>
            <a href="https://github.com/yourusername" className="text-blue-400 hover:text-blue-300 transition-colors">
              GitHub
            </a>
            <span className="text-gray-600">·</span>
            <a href="https://linkedin.com/in/yourusername" className="text-blue-400 hover:text-blue-300 transition-colors">
              LinkedIn
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
