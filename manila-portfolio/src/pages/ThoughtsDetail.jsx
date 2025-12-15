import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

const posts = {
  'building-this-website': {
    title: 'Building This Website',
    date: 'Dec 15, 2025',
    content: `
      I built this portfolio entirely through conversation with Claude Sonnet 4.5. Not by writing the code myself and asking for help—by describing what I wanted and letting the AI figure out how to make it happen.

      ## Why I did this

      I wanted to see what it's actually like to build something real using AI as the primary developer. Not a toy project or a demo, but a full portfolio site with custom interactions, animations, and real content.

      The experience was... interesting. And honestly, better than I expected.

      ## What worked really well

      **Iteration speed**: I could say "make the sidebar narrower" or "change this to purple" and it would just happen. No context switching between design and implementation—just conversation.

      **Complex features**: Things like the drawing canvas on the homepage and the "Who I Am" page, the typing animations, the interactive plant that grows when you click it—all of these came from simple requests. Claude handled the React hooks, canvas API, event handlers, and state management without me needing to dig into the details.

      **Design decisions**: I gave vague direction like "make it feel more intentional" or "add something playful here" and it would suggest specific implementations. Sometimes they worked perfectly, sometimes we iterated, but the creative back-and-forth felt collaborative.

      ## What was harder than expected

      **Precision**: Sometimes I'd ask for something and it would misunderstand the scope. Like when I wanted the drawing sidebar to "stretch to the footer"—it took a few tries to get the positioning right because describing spatial layouts in words is surprisingly ambiguous.

      **Debugging**: When something didn't work, I couldn't just open dev tools and fix it myself. I had to describe what was wrong and trust that Claude would find the issue. Usually it did, but it felt slower than just fixing it directly.

      **Knowing what's possible**: I had to already know what features I wanted. Claude is great at implementation but it doesn't proactively suggest "hey, you should add this." The creative direction was still on me.

      ## What I learned

      This workflow works best when you have a clear vision but don't want to get bogged down in implementation details. It's like having a really fast developer who does exactly what you ask, but doesn't read your mind.

      The handoff between idea and execution is *way* faster, but you still need to know what you want. AI doesn't replace product sense or design intuition—it just removes the friction of translating those ideas into code.

      ## Would I do this again?

      Absolutely. For projects where I care more about the end result than the process of writing code, this is game-changing. I got a fully custom portfolio site in a fraction of the time it would have taken me to code it myself, and it does exactly what I wanted.

      That said, I still love writing code. This approach is a tool, not a replacement. Sometimes I want the control and satisfaction of building something line by line. But for projects like this? Where I just want it to exist and work well? This is the way.

      ## The takeaway

      We're at a weird point where AI can build real, production-quality software through natural language conversation. It's not perfect, but it's shockingly capable. The bottleneck isn't the AI's ability to code—it's your ability to communicate what you want clearly and iterate thoughtfully.

      If you're someone who knows what good software looks like but doesn't want to spend weeks building it yourself, this is worth trying. The future of development might not be "no code"—it might just be "different code," written by AI from your specifications.
    `,
  },
  'what-university-taught-me': {
    title: 'What University Has Taught Me',
    date: 'Dec 12, 2025',
    content: `
      University is weird. You show up thinking it's about lectures and exams and getting good grades. And sure, that's part of it. But the real lessons? They happen everywhere else.

      ## Learning to work with people

      The most valuable thing I've learned at UVA isn't in any CS textbook. It's how to collaborate with people who think completely differently than you do.

      Group projects force you to figure out how to communicate technical ideas clearly, how to delegate without micromanaging, and how to navigate disagreements without burning bridges. These skills matter way more in the real world than knowing the optimal time complexity of a sorting algorithm.

      ## Failure is just data

      In university, you're allowed to fail in low-stakes ways. A bad grade on one assignment doesn't ruin your career. A project that doesn't work out is just a learning experience.

      I've learned to treat failure as feedback, not as a verdict on my abilities. That mindset shift has made me more willing to take risks and try things I'm not sure I can pull off.

      ## There's no "right" path

      One of the biggest realizations I've had is that everyone's path looks different, and that's okay. Some people know exactly what they want to do and go all-in. Others are still figuring it out senior year.

      University gives you the space to explore different interests, take random electives, and discover what actually excites you. I've learned to stop comparing my path to other people's and focus on what feels right for me.

      ## Independence requires structure

      Being on your own for the first time is liberating, but it's also overwhelming. No one's telling you when to study, when to sleep, when to eat. You have to build your own systems.

      I've learned that freedom without structure just leads to chaos. Routines, deadlines, and accountability are what make independence actually work.

      ## The best learning happens outside class

      Honestly, some of my most valuable learning experiences at UVA had nothing to do with coursework. Side projects, internships, hackathons, consulting work—that's where theory meets reality.

      Class teaches you the fundamentals, but real learning happens when you apply those fundamentals to messy, real-world problems that don't have clean answers.

      ## It's okay to not have it all figured out

      I'm still at UVA and I don't have my whole career mapped out. And I've learned that's completely normal. University isn't about having all the answers—it's about learning how to ask better questions and being okay with uncertainty.

      The people who seem like they have it all figured out? They're probably just as confused as everyone else. They're just better at faking confidence.
    `,
  },
  'trying-to-be-more-creative': {
    title: 'Trying to Be More Creative',
    date: 'Dec 8, 2025',
    content: `
      I used to think creativity was something you either had or you didn't. Like some people were just born creative and the rest of us had to accept being boring and practical.

      Turns out, that's not how it works.

      ## Creativity is a practice, not a personality trait

      The more I've tried to be creative, the more I've realized it's not about waiting for inspiration to strike. It's about showing up and making things, even when you don't feel inspired.

      You don't wait until you're "in the mood" to write code. You just write code and figure it out as you go. Creativity works the same way.

      ## Permission to make bad things

      One of the biggest blockers to creativity is the fear of making something bad. So you don't make anything at all, because at least then you can't be judged.

      I've been trying to give myself permission to make things that aren't perfect. This portfolio, for example, is full of experimental features that might be weird or over the top. But that's the point. If everything I made had to be polished and professional, I'd never try anything new.

      ## Constraints make you more creative

      Ironically, having *fewer* options often leads to more creative solutions. When you can do anything, you get paralyzed by choice. When you have limits, you have to get creative within those boundaries.

      I've found that setting constraints—like "I have to finish this in one day" or "I can only use these three colors"—forces me to focus and come up with ideas I wouldn't have thought of otherwise.

      ## Inspiration comes from weird places

      Some of my best ideas have come from completely unrelated things. A conversation with a friend. A random design I saw on a website. A video game mechanic that made me think differently about interaction design.

      Creativity isn't about having original ideas out of nowhere. It's about connecting things that don't usually go together and seeing what happens.

      ## It's okay to copy (at first)

      When I was first learning to code, I copied a lot. I'd find a tutorial, follow it step by step, and then try to modify it slightly to make it my own.

      That's how you learn. You imitate until you understand the patterns, and then you start experimenting. Creativity isn't about never being influenced by other people's work—it's about taking inspiration and making it your own.

      ## You have to care less about what people think

      The biggest killer of creativity is worrying too much about what other people will think. So you sand down all the weird edges and end up with something safe and boring.

      I've been trying to lean into the weird stuff. The interactive plant that grows when you click it? The drawing canvas on the homepage? Those aren't "professional portfolio" features. But they're fun and they make the site feel more like *me*.

      ## Creativity is just trying stuff

      At the end of the day, creativity isn't some mystical skill that only certain people have. It's just being willing to try things, make mistakes, and iterate until something clicks.

      You don't need to be "a creative person" to be creative. You just need to care enough to keep making things.
    `,
  },
  'the-value-of-side-projects': {
    title: 'The Value of Side Projects',
    date: 'Nov 28, 2025',
    content: `
      Side projects have a reputation for being resume padding. You build something, take some screenshots, write a nice description, and hope it impresses recruiters.

      But I think that misses the point.

      ## Side projects are where you learn what you care about

      In school, someone tells you what to build. In internships, someone gives you a ticket and a deadline. But with side projects, *you* decide what's worth building.

      That freedom is where you figure out what kind of work actually excites you. Do you like polishing UX details? Optimizing performance? Building developer tools? You won't know until you try.

      ## You learn by solving real problems

      Class projects are sanitized. The requirements are clear, the scope is defined, and there's a rubric telling you exactly what "good" looks like.

      Real projects are messy. Requirements change. Users want things you didn't plan for. You have to make trade-offs between features, performance, and maintainability. That's where the actual learning happens.

      ## No one cares if you fail

      The best thing about side projects is that failure is consequence-free. If a project doesn't work out, you just move on. No bad grade. No disappointed stakeholders. Just lessons learned.

      That freedom to fail makes you more willing to try ambitious things. Some of my best learning experiences came from projects that completely fell apart halfway through.

      ## They're proof you care

      Recruiters see a lot of resumes with coursework and internships. Everyone has those. But side projects? Those show you care enough to build things when no one's making you.

      It's not about having a perfect, polished portfolio. It's about showing that you're the kind of person who gets excited about building things and actually follows through.

      ## The best side projects are scratching your own itch

      The projects I've stuck with the longest are the ones that solve a problem I actually have. GradeHorizon exists because I wanted a better way to track my grades. This portfolio exists because I wanted a space that felt like me.

      When you're building something you actually want to use, motivation isn't a problem. You care about the details because *you're* the user.

      ## Don't optimize for your resume

      The worst side projects are the ones you build just because you think they'll look good. You pick trendy tech, add a bunch of features you don't care about, and burn out halfway through.

      Build things you'd actually want to use. Or things that sound fun. Or things that teach you something you're curious about. The resume value is a side effect, not the goal.

      ## It's okay to abandon projects

      Not every side project needs to be finished. Some are just experiments. Some are learning exercises. Some you lose interest in, and that's fine.

      The value isn't in having a portfolio full of completed projects. It's in the process of building, iterating, and learning along the way.
    `,
  },
};

export default function ThoughtsDetail() {
  const { slug } = useParams();
  const { isDarkMode } = useTheme();
  
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const bodyColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const linkColor = isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900';
  
  const post = posts[slug];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-12 space-y-8">
        <Link to="/thoughts" className={`inline-block ${linkColor} transition-colors`}>
          ← Back to thoughts
        </Link>
        <h1 className={`text-4xl font-bold ${textColor}`}>Post not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-12 space-y-12">
      <Link to="/thoughts" className={`inline-block ${linkColor} transition-colors`}>
        ← Back to thoughts
      </Link>

      <section className="space-y-4">
        <h1 className={`text-4xl font-bold ${textColor}`}>{post.title}</h1>
        <p className={`text-sm ${subtextColor}`}>{post.date}</p>
      </section>

      <article className="prose prose-gray max-w-none space-y-6">
        {post.content.split('\n\n').map((block, index) => {
          const trimmed = block.trim();
          if (trimmed.startsWith('## ')) {
            return (
              <h2 key={index} className={`text-2xl font-semibold ${textColor} mt-12 mb-4`}>
                {trimmed.replace('## ', '')}
              </h2>
            );
          }
          return (
            <p key={index} className={`${bodyColor} leading-relaxed`}>
              {trimmed}
            </p>
          );
        })}
      </article>
    </div>
  );
}
      </article>
    </div>
  );
}
