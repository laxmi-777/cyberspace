import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

const projects = {
  'gradecamp-gradehorizon': {
    title: 'GradeHorizon',
    year: '2025',
    categories: ['Development', 'UX', 'JavaScript'],
    description: 'Built an interactive grade planner that lets students track classes, add assignments, and see real-time "what I need on the final" scenarios',
    content: `
      GradeHorizon is a grade-planning tool built around a situation most students recognize immediately: you can understand a class intellectually and still feel constantly unsure about where you stand. The "grade" is not just a number. It shapes how people allocate time, how they interpret feedback, and how much anxiety they carry week to week. In that sense, the grade system acts like an infrastructure: it quietly organizes student behavior, even when no one is actively thinking about it.

      The tool is meant to make that infrastructure visible. Instead of forcing students into a vague "current grade" snapshot, GradeHorizon models what students actually do: track what's left, test scenarios ("what do I need on the final?"), and make decisions under constraints (weights, drops, replacement rules, late policies, curve uncertainty). My goal is not to reduce school to numbers—it's to give students a clearer way to reason about the numbers that already shape them.

      This project is still in progress, and I'm treating it explicitly as a sociotechnical system: the interface is only one layer. The real design problem is the relationship between policies, incentives, and student agency—and what happens when those collide during a semester.
    `,
    role: 'Designer & Developer',
    technologies: ['JavaScript', 'UX Design', 'Web Development'],
    status: 'work in progress (Capstone, 2025)',
    links: {
      project: '/gradehorizon'
    }
  },
  'hoosactive': {
    title: 'HoosActive',
    year: '2025',
    categories: ['Development', 'UX', 'Collaboration'],
    description: 'Designed and prototyped a social accountability gym experience focused on quick logging, motivation loops, and usability for busy students',
    content: `
      HoosActive is a social accountability gym experience designed for busy students who genuinely want to work out, and still don't go. The barrier is rarely motivation in the abstract. It's time, friction, and the mental overhead of getting started when life is already full. Our project treated the gym not just as a place, but as an everyday system students have to fit themselves into.

      To understand that system, through a semester long project, our team worked through multiple phases and iterations: early discovery to define the problem as students experience it (not as we imagined it), ideation to explore different accountability models, prototyping to make those models concrete, and evaluation to see where the design failed in practice. Each phase changed the design, because each phase changed what we thought the problem actually was.

      What the prototype aims to support is not "perfect fitness behavior." It supports the smallest realistic action: showing up, logging quickly, and feeling momentum without making the experience feel like another obligation. The design focuses on quick interactions, lightweight social pressure, and feedback loops that are motivating without being intense or performative.
    `,
    role: 'UX Designer & Researcher',
    technologies: ['Figma', 'User Research', 'Prototyping', 'HCI'],
    status: 'HCI Team Project, 2025',
    links: {
      'team site': 'https://sites.google.com/view/hci-f25-team-baboons/home',
      'prototype': 'https://www.figma.com/proto/oEEaDgoalLQYLJSpKnIr8I/HOOS-ACTIVE?node-id=8-73&t=trZb5YQLTmDhi7Oj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A73&hotspot-hints=0'
    }
  },
  'hoosactive-research': {
    title: 'HoosActive: Research → Requirements → Metrics',
    year: '2025',
    categories: ['Research', 'Strategy', 'Metrics'],
    description: 'Led the "make it measurable" work: turned user interviews/personas into clear requirements and evaluation metrics for the final product direction',
    content: `
      HoosActive began with a problem that sounds simple until you sit with it: students want to go to the gym, and yet they don't. The gap is not a lack of information. Most people already know what they "should" do. The gap is infrastructure—time blocks, energy levels, social pressure, intimidation, distance, and the quiet friction of starting. The gym becomes one more system students have to negotiate.

      Our team treated the project like an unfolding conversation between the product and its users. We moved through phases—research, personas, requirements, prototyping, evaluation—not because the course demanded it, but because each phase changed what we believed was true. Early interviews produced a pattern: the gym is rarely avoided because people dislike exercise. It is avoided because the day is full, and the cost of switching into "gym mode" is higher than it looks.

      My role was to make the project measurable, because without that step, teams can build forever and still feel unsure about what they built. I translated interviews and personas into requirements that could survive disagreement. I wrote evaluation metrics that forced clarity: what does "quick logging" mean in seconds? what does "motivation loop" mean in behavior? what does "usability for busy students" mean when someone is standing outside the gym deciding whether to go in?

      The deliverable was not just a set of documents. It was a narrowing. Requirements created boundaries. Metrics created consequences. Together, they changed the direction of the product—away from features that sounded exciting in theory and toward interactions that made sense in the actual grain of student life.

      What I produced:
      • A requirements layer grounded in research (not opinions)
      • Evaluation metrics tied to the direction we chose (not everything we could build)
      • Phase-by-phase iteration notes showing what we changed and why
    `,
    role: 'Requirements & Metrics Lead',
    technologies: ['User Research', 'Requirements Engineering', 'Evaluation Metrics', 'HCI'],
    links: {
      'team site': 'https://sites.google.com/view/hci-f25-team-baboons/home',
      'prototype': 'https://www.figma.com/proto/oEEaDgoalLQYLJSpKnIr8I/HOOS-ACTIVE?node-id=8-73&t=trZb5YQLTmDhi7Oj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A73&hotspot-hints=0'
    }
  },
  'cybersecurity-labs': {
    title: 'Cybersecurity Labs & Writeups',
    year: '2025',
    categories: ['Security', 'Linux', 'Analysis'],
    description: 'Documented practical security workflows (web testing, forensics basics, debugging) with clean explanations and sanitized evidence—focused on methodology, not spoilers',
    content: `
      This section is a collection of cybersecurity lab writeups in PDF form. They document workflows I've practiced—web testing, basic forensics, debugging, and the small decision points that determine whether you actually learn something or just copy steps until it "works." I keep the focus on process, not spoilers, because the value is in how you reason under uncertainty.

      Most of the writeups are built the same way: I start with a question, collect evidence, form a hypothesis, and then test it. When something fails (which is most of the time), I keep that in the record, because the dead ends are usually the real lesson. I also sanitize anything sensitive and avoid including details that would turn the document into an answer key.

      I think of security as a kind of literacy: not fear-based, not performative—just the ability to see systems clearly, notice what they assume, and understand what breaks when the assumptions aren't true.
    `,
    role: 'Security Analyst & Researcher',
    technologies: ['Linux', 'Web Security', 'Forensics', 'Debugging'],
    labs: [
      { name: 'Password Cracking Lab', file: 'Lab1_Password_Cracking_COMPLETED.pdf' },
      { name: 'Exploiting Vulnerabilities Lab', file: 'Lab4_Exploiting_COMPLETED1.pdf' },
      { name: 'Injection Attacks Lab', file: 'Lab5_Injection_DONE.pdf' },
      { name: 'Baseline Analysis, Firewall & IDS Lab', file: 'Lab7_BA_FW_IDS_Completed.pdf' },
      { name: 'Dictionaries & Password Analysis', file: 'Lab 9 Activity - Dictionaries.pdf' },
      { name: 'Cryptography Lab', file: 'Lab 10 Activity - Crypto.pdf' }
    ]
  },
  'test-oracle-research': {
    title: 'Automated Test Oracle Research (LLM)',
    year: '2025',
    categories: ['Research', 'Python', 'LLMs'],
    description: 'Worked on using LLMs to generate or evaluate test oracles; built small experiments to compare outputs and identify failure modes',
    content: `
      This project sits inside a deceptively simple question: how do you know a test "passed" when the output is hard to verify? Test oracles are the infrastructure behind correctness. When they are weak, missing, or expensive, software quality becomes less about truth and more about what is easy to check.

      My work in this area explores how LLMs can generate or evaluate test oracles, and where that breaks down. The interesting part is not whether an LLM can produce something plausible—it often can. The interesting part is reliability: consistency across runs, sensitivity to prompt framing, and the specific failure modes where the model sounds confident while drifting away from correctness.

      I'm especially interested in this as a systems problem, not a hype problem. If an LLM is going to be used anywhere near testing, it needs guardrails: clear evaluation criteria, good baselines, and a way to detect when the model is outside its depth. The paper linked below is a relevant anchor for this space; my ongoing work is about making the tradeoffs legible.
    `,
    role: 'Researcher & Experimenter',
    technologies: ['Python', 'LLMs', 'Testing Frameworks', 'Research Methods'],
    links: {
      'related paper': 'https://arxiv.org/abs/2405.03786'
    }
  },
  'dd-now': {
    title: 'DD Now (Startup Web Dev)',
    year: '2023/2024',
    categories: ['Development', 'Web', 'Impact'],
    description: 'Built web features for a student safety startup connecting volunteer drivers to reduce drunk driving; shipped UI + functionality under real constraints',
    content: `
      DD Now is a student safety startup built around a real-world constraint: people need rides when it's late, they're vulnerable, and decisions have consequences. The system depends on trust—between riders, volunteer drivers, and the organization coordinating it. That makes it a sociotechnical problem as much as a technical one: the interface, the workflow, and the incentives all shape whether the service actually works.

      My work focused on shipping web features under real constraints: time limits, shifting priorities, and the reality that a "mostly working" flow still fails users if it's confusing. In startup settings, the most important design question is often "where will someone hesitate?" because hesitation is where drop-off happens.

      What I took from this project is that building isn't just implementation. It's translation: taking messy human needs, turning them into concrete requirements, and then making sure the final system behaves predictably when real people use it.
    `,
    role: 'Web Developer',
    technologies: ['Web Development', 'JavaScript', 'UI/UX', 'Startup'],
    status: 'Project writeup: coming soon'
  },
  'sustainability-calculator': {
    title: 'Sustainability Calculator: Requirements Management',
    year: '2025',
    categories: ['Requirements', 'Systems', 'Documentation'],
    description: 'Defined tool behavior, assumptions, and acceptance criteria to turn a moral idea into a defensible decision system',
    content: `
      Sustainability is often treated like a value statement: people agree it matters, and then the conversation ends. The problem is that agreement does not automatically create action. Action requires numbers, definitions, and boundaries—otherwise "impact" becomes whatever the speaker wants it to mean in that moment.

      The sustainability calculator is an attempt to turn a moral idea into a usable system. Like any calculator, it creates authority through structure. It asks for inputs, applies assumptions, and returns outputs that look objective. That makes requirements unusually important, because small wording choices decide what the system is allowed to claim.

      As Requirements Manager, my work was to define the calculator's behavior so it could be trusted. I treated requirements as a translation layer between stakeholders and the model: what does a user expect when they enter data? what units are they imagining? what do they think the output represents? what edge cases would quietly produce nonsense? The goal was not to make the tool impressive. The goal was to make it defensible.

      In practice, this meant writing acceptance criteria that forced specificity ("what counts as valid input," "what happens when data is missing," "how uncertainty is communicated"). It also meant making assumptions visible. A sustainability tool that hides its assumptions becomes a persuasion device. A sustainability tool that shows its assumptions becomes a decision tool.

      This project sharpened what I like most about consulting-adjacent work: building a structure people can agree to, so the team stops arguing about interpretations and starts making choices.

      What I produced:
      • Requirements + acceptance criteria that defined tool behavior
      • Clear assumptions/definitions so outputs don't pretend to be universal truth
      • Iteration notes capturing how the model and interface changed as requirements tightened
    `,
    role: 'Requirements Manager',
    technologies: ['Requirements Engineering', 'Acceptance Criteria', 'Systems Documentation'],
    links: {
      'live dashboard': 'https://project-b20-6b3d77e3465f.herokuapp.com/dashboard/'
    }
  },
  'sustainability-calculator-fullstack': {
    title: 'Sustainability Calculator: Full-Stack Build + DevOps Cleanup',
    year: '2025',
    categories: ['Development', 'Django', 'DevOps'],
    description: 'Built and deployed a Django web app for carbon footprint calculation—took over DevOps when deployment pipeline broke',
    content: `
      The sustainability calculator looks like a simple tool on the surface: you enter a few values and get an output. But building it forced the messy reality of "shipping" into view. A calculator only feels trustworthy if it's consistent, deployed reliably, and doesn't break the moment someone uses it in a way you didn't predict.

      On the software side, I ended up stepping up hard. The project needed someone to actually own the build and deployment pipeline, and when my teammate didn't deliver, the work didn't magically disappear—it just became mine. I learned quickly that "being the developer" sometimes means being the person who makes the whole system run, not just the person who writes the feature.

      ### What I did (engineering-side):

      I worked in Django to turn the calculator into a real web system: routing, views, templates, data handling, and the kind of input validation that prevents the tool from quietly producing nonsense. I also had to think through how the app behaves in production—what happens when users refresh, how state is handled, what errors look like, and how to keep the experience predictable.

      ### DevOps reality:

      I also took over DevOps responsibilities so the project could actually ship. That meant dealing with deployment friction, environment configuration, and the "why is this broken in prod but fine locally" problems that don't show up in class demos. I learned more from that than I expected—especially how small configuration decisions can silently decide whether a tool is usable.

      ### What I learned:

      This project made Django feel real to me. Not "I followed a tutorial," but "I can build something, deploy it, debug it when it breaks, and keep moving." It also made the people/process side impossible to ignore: when work doesn't get done, the system still needs an owner. I became that owner.

      ### What I produced:

      • A working Django web app for the calculator (front-end + back-end behavior, not just a mock)

      • Production deployment that stays up and is repeatable

      • Debugging + stabilization work to keep the app consistent under real use

      ### Tech:

      Django • Python • Templates/Views/Routing • Deployment + environment configuration • Basic DevOps workflow
    `,
    role: 'Software Engineer (and DevOps)',
    technologies: ['Django', 'Python', 'Templates', 'Views', 'Routing', 'DevOps', 'Deployment'],
    images: [
      { src: '/cyberspace/sustainability-calc-login.png', alt: 'Login screen with Google authentication' },
      { src: '/cyberspace/sustainability-calc-dashboard.png', alt: 'Dashboard showing weekly CO2 and water usage tracking' },
      { src: '/cyberspace/sustainability-calc-leaderboard.png', alt: 'Leaderboard competition view' }
    ],
    links: {
      'live dashboard': 'https://project-b20-6b3d77e3465f.herokuapp.com/dashboard/'
    }
  },
  'ai-iot-risk-analysis': {
    title: 'Risk Analysis of AI-Driven Cybersecurity in Smart Home IoT Systems',
    year: '2025',
    categories: ['Risk Analysis', 'Systems', 'Security'],
    description: 'Built a layered risk framework for smart home security: threat prioritization, attack modeling, resilience analysis, and recovery dynamics',
    content: `
      A smart home sells itself as convenience. Lights turn on before you touch the switch. Doors lock behind you without asking. Thermostats learn your habits quietly in the background. The infrastructure is designed to disappear—which is exactly why cybersecurity risk is so hard to feel until it's already in motion. One device with weak defaults can become a pathway into the rest of the home network, and every added device expands the attack surface.

      In this project, I treated smart home security as a sociotechnical system: devices, networks, and human behavior shaping each other in real time. The goal wasn't to produce a scary list of threats—it was to build an approach that helps a stakeholder decide what to prioritize, what to measure, and what to deploy when the environment is diverse, interconnected, and constantly changing.

      Client framing: SmartSecure Systems (a residential cybersecurity firm) needs an intelligent risk analysis approach that scales and stays usable: real-time protection, minimal user intervention, and defenses that adapt as the threat landscape shifts. Static checklists can't keep up with modern IoT environments—AI is positioned as the automated watchdog.

      Executive summary:

      • Vision: Proactive smart home cybersecurity via AI-based monitoring that detects threats in real time and adapts to evolving patterns

      • Core risk categories: device vulnerabilities, network exposure, user behavior, and system redundancy—analyzed with layered models (SEIRS, fault trees, MCDA, resilience curves)

      • Deployment lens: organized into phases + deliverables, with success measured by response time, reduced residual risk, and increased user trust

      Approach: I organized the risk analysis into six structured tasks that move from prioritization → modeling → quantification → resilience → recovery → recommendations:

      1) Threat identification + risk planning

      2) Attack scenario modeling

      3) Risk quantification + system analysis

      4) Resilience modeling + optimization

      5) Failure simulation + recovery dynamics

      6) Synthesis + recommendations

      What I produced:

      • A device-focused risk prioritization method (ARF) with likelihood/severity scoring so high-risk devices get attention first

      • A device interconnection risk map that treats compromise as propagation (how one device becomes leverage over others)

      • Scenario + system models (fault trees / event trees / infection dynamics) that translate "possible attacks" into structured pathways and probabilities

      • A network flow reliability analysis to show how disruption at key nodes (like a hub) affects secure communication and system survivability

      • A way to quantify residual risk after mitigation (e.g., IDS, MFA)—because "we added controls" isn't the same as "risk meaningfully dropped"

      • Resilience thinking via recovery-time vs. damage curves (how response speed changes real-world loss)

      Why this matters: In smart homes, risk isn't only a technical score—it's a lived experience. If a defense is too annoying, a user bypasses it. If detection is too slow, "privacy loss" becomes "physical safety risk." This work is my attempt to bridge engineering detail and stakeholder action: a framework that explains what could happen, how it spreads, and what you do first when you don't get the luxury of perfect information.
    `,
    role: 'Risk Analyst & Systems Modeler',
    technologies: ['Risk Analysis', 'SEIRS Modeling', 'Fault Tree Analysis', 'MCDA', 'Network Reliability'],
    links: {
      'slide deck': '/cyberspace/finalIntegrativeReport.pdf'
    }
  },
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
  const { isDarkMode } = useTheme();
  
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const bodyColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const linkColor = isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-300';
  const tagBg = isDarkMode ? 'bg-gray-800' : 'bg-purple-100';
  const tagText = isDarkMode ? 'text-gray-300' : 'text-purple-800';
  
  const project = projects[slug];

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-12 space-y-8">
        <Link to="/what-i-do" className={`inline-block ${linkColor} transition-colors`}>
          ← Back to what i do
        </Link>
        <h1 className={`text-4xl font-bold ${textColor}`}>Project not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-12 space-y-12">
      <Link to="/what-i-do" className={`inline-block ${linkColor} transition-colors`}>
        ← Back to what i do
      </Link>

      <section className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h1 className={`text-4xl font-bold ${textColor}`}>{project.title}</h1>
            <span className={`text-sm ${subtextColor} whitespace-nowrap mt-2`}>{project.year}</span>
          </div>
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
        </div>

        <p className={`text-xl ${bodyColor} leading-relaxed`}>
          {project.description}
        </p>

        {project.links && (
          <div className="flex gap-4 items-center">
            {Object.entries(project.links).map(([key, url]) => (
              <a 
                key={key}
                href={url} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)} →
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-6">
        <div className="prose prose-gray max-w-none">
          {project.content.split('\n\n').map((paragraph, index) => {
            const trimmedParagraph = paragraph.trim();
            
            // Check if paragraph is a markdown-style header (###)
            if (trimmedParagraph.startsWith('###')) {
              const headerText = trimmedParagraph.replace(/^###\s*/, '');
              return (
                <h3 key={index} className={`text-xl font-semibold ${textColor} mt-8 mb-4`}>
                  {headerText}
                </h3>
              );
            }
            
            // Check if paragraph is a legacy section header (ends with :)
            const isLegacyHeader = trimmedParagraph.endsWith(':') && 
                           (trimmedParagraph.startsWith('Executive summary') || 
                            trimmedParagraph.startsWith('Approach') || 
                            trimmedParagraph.startsWith('What I produced'));
            
            if (isLegacyHeader) {
              return (
                <h3 key={index} className={`text-xl font-semibold ${textColor} mt-8 mb-4`}>
                  {trimmedParagraph}
                </h3>
              );
            }
            
            // Check if paragraph is a bullet point (starts with •)
            if (trimmedParagraph.startsWith('•')) {
              return (
                <p key={index} className={`${bodyColor} leading-relaxed pl-6`}>
                  {trimmedParagraph}
                </p>
              );
            }
            
            return (
              <p key={index} className={`${bodyColor} leading-relaxed`}>
                {trimmedParagraph}
              </p>
            );
          })}
        </div>
      </section>

      {project.images && (
        <section className="space-y-4">
          <h3 className={`text-xl font-semibold ${textColor}`}>Screenshots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className={`rounded-lg overflow-hidden border ${borderColor}`}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={`space-y-4 pt-6 border-t ${borderColor}`}>
        <div className="space-y-3">
          {project.status && (
            <div>
              <h3 className={`text-sm font-medium ${textColor} mb-1`}>Status</h3>
              <p className={bodyColor}>{project.status}</p>
            </div>
          )}
          {project.links && (
            <div>
              <h3 className={`text-sm font-medium ${textColor} mb-1`}>Links</h3>
              <div className="space-y-1">
                {Object.entries(project.links).map(([key, url]) => (
                  <p key={key} className={bodyColor}>
                    {key.charAt(0).toUpperCase() + key.slice(1)} page: <a href={url} className="text-purple-400 hover:text-purple-300 transition-colors">{url}</a>
                  </p>
                ))}
              </div>
            </div>
          )}
          {project.labs && (
            <div>
              <h3 className={`text-sm font-medium ${textColor} mb-1`}>Lab PDFs</h3>
              <div className="space-y-1">
                {project.labs.map((lab) => (
                  <p key={lab.file} className={bodyColor}>
                    <a 
                      href={`/cyberspace/labs/${lab.file}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {lab.name} ↗
                    </a>
                  </p>
                ))}
              </div>
            </div>
          )}
          <div>
            <h3 className={`text-sm font-medium ${textColor} mb-1`}>Role</h3>
            <p className={bodyColor}>{project.role}</p>
          </div>
          <div>
            <h3 className={`text-sm font-medium ${textColor} mb-1`}>Technologies</h3>
            <p className={bodyColor}>{project.technologies.join(', ')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
