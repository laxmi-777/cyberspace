import { useParams, Link } from 'react-router-dom';

const posts = {
  'building-better-interfaces': {
    title: 'Building Better Interfaces',
    date: 'Dec 10, 2024',
    content: `
      Creating intuitive user interfaces is both an art and a science. It requires understanding
      not just what users want to accomplish, but how they think about the tasks they're trying
      to complete.

      The best interfaces feel invisible—they get out of the way and let users focus on their
      goals. This requires careful attention to information hierarchy, clear visual design, and
      thoughtful interaction patterns.

      ## Start with user needs

      Before designing any interface, spend time understanding who your users are and what they're
      trying to accomplish. User research, interviews, and observation can reveal insights that
      aren't obvious from assumptions.

      ## Keep it simple

      Simplicity is harder than complexity. It requires making difficult decisions about what to
      include and, more importantly, what to leave out. Every element should serve a purpose.

      ## Test and iterate

      No interface is perfect on the first try. Regular testing with real users reveals problems
      and opportunities for improvement that you might never discover on your own.

      The goal is to create experiences that feel natural and effortless, where users can accomplish
      their goals without friction or confusion.
    `,
  },
  'design-systems-that-scale': {
    title: 'Design Systems That Scale',
    date: 'Nov 22, 2024',
    content: `
      A design system is more than just a component library or style guide. It's a shared language
      that enables teams to work together more effectively and ship better products faster.

      ## Why design systems matter

      As organizations grow, maintaining consistency becomes increasingly challenging. Different
      teams may solve the same problems in different ways, leading to inconsistent experiences
      and wasted effort.

      A well-implemented design system addresses these challenges by providing reusable components,
      clear guidelines, and shared principles that align teams around common goals.

      ## Building for growth

      The best design systems are built with growth in mind. They're flexible enough to adapt to
      new use cases while maintaining consistency across all implementations.

      This requires careful planning, clear documentation, and ongoing maintenance. It's not a
      one-time project but an evolving foundation for your products.

      ## Getting started

      Start small and focus on the most common patterns in your products. Build momentum with
      quick wins before tackling more complex challenges. Most importantly, involve your team
      in the process—adoption depends on buy-in.
    `,
  },
  'minimalism-in-web-design': {
    title: 'Minimalism in Web Design',
    date: 'Oct 15, 2024',
    content: `
      Minimalism in web design isn't about removing features or making things harder to use.
      It's about focusing on what truly matters and eliminating everything that doesn't.

      ## The power of restraint

      Every element you add to a page competes for attention. By using restraint and only
      including what's necessary, you make it easier for users to focus on what's important.

      This doesn't mean designs need to be boring or austere. Minimalism done well can be
      beautiful, engaging, and highly effective.

      ## Focus on content

      When you strip away unnecessary decoration and complexity, content becomes the star.
      Good typography, thoughtful spacing, and clear hierarchy let your message shine through.

      ## Performance benefits

      Minimal designs tend to be faster and more performant. Fewer elements mean less code,
      smaller file sizes, and faster load times—all of which improve the user experience.

      The key is knowing what to keep and what to remove, and having the confidence to trust
      that less really can be more.
    `,
  },
  'the-value-of-whitespace': {
    title: 'The Value of Whitespace',
    date: 'Sep 8, 2024',
    content: `
      Whitespace—also called negative space—is one of the most powerful tools in a designer's
      toolkit. Yet it's often undervalued or seen as "empty" space that needs to be filled.

      ## Creating breathing room

      Whitespace gives content room to breathe. It improves readability, reduces cognitive load,
      and makes interfaces feel less cluttered and overwhelming.

      Generous spacing around important elements draws attention to them and makes hierarchies
      clear. Users can quickly understand what's important and how different elements relate.

      ## Guiding the eye

      Strategic use of whitespace guides users through a page in a logical flow. It creates
      natural breaks between sections and helps organize information in a way that feels intuitive.

      ## A sign of quality

      Whitespace is often associated with luxury and quality. Brands that use generous spacing
      in their designs feel more premium and confident. It shows restraint and attention to detail.

      Don't be afraid of whitespace. Learn to use it deliberately as an active element in your
      designs, not just as the space left over between other elements.
    `,
  },
};

export default function ThoughtsDetail() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-12 space-y-8">
        <Link to="/thoughts" className="inline-block text-gray-400 hover:text-white transition-colors">
          ← Back to thoughts
        </Link>
        <h1 className="text-4xl font-bold text-white">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-12 space-y-12">
      <Link to="/thoughts" className="inline-block text-gray-400 hover:text-white transition-colors">
        ← Back to thoughts
      </Link>

      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-white">{post.title}</h1>
        <p className="text-sm text-gray-500">{post.date}</p>
      </section>

      <article className="prose prose-gray max-w-none space-y-6">
        {post.content.split('\n\n').map((block, index) => {
          const trimmed = block.trim();
          if (trimmed.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl font-semibold text-white mt-12 mb-4">
                {trimmed.replace('## ', '')}
              </h2>
            );
          }
          return (
            <p key={index} className="text-gray-300 leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </article>
    </div>
  );
}
