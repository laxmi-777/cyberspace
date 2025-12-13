import { useMemo, useState } from "react";
import "./App.css";

const TABS = ["Me", "Work", "Thoughts", "Resume"];

const PROJECTS = [
  {
    title: "GradeCamp",
    desc: "Interactive grade tracker + planner with real-time calculations.",
    tags: ["HTML", "CSS", "JS"],
    link: "https://github.com/",
  },
  {
    title: "HoosActive",
    desc: "Social fitness accountability app concept + UX deliverables.",
    tags: ["UX", "Research", "Prototyping"],
    link: "https://github.com/",
  },
];

const POSTS = [
  {
    title: "Building a folder-style portfolio",
    date: "2025-12-13",
    body:
      "I wanted something playful but still professional. The trick is to fake the file-explorer vibe with tabs + a clean content panel.",
  },
  {
    title: "Things I’m learning right now",
    date: "2025-12-01",
    body:
      "React patterns, accessibility basics, and shipping simple first versions before making them fancy.",
  },
];

function TabButton({ id, active, onClick }) {
  return (
    <button
      className={`tab ${active ? "tab--active" : ""}`}
      role="tab"
      aria-selected={active}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
      onClick={onClick}
      type="button"
    >
      {id}
    </button>
  );
}

function LineNumbers({ count = 40 }) {
  const lines = useMemo(() => Array.from({ length: count }, (_, i) => i + 1), [count]);
  return (
    <div className="codeCol" aria-hidden="true">
      {lines.map((n) => (
        <div key={n} className="codeLine">
          {n}
        </div>
      ))}
    </div>
  );
}

function MePanel() {
  return (
    <div className="panelInner">
      <h1 className="title">Hi, I’m Laxmi 👋</h1>
      <p className="muted">
        CS @ UVA. I like building clean, friendly UIs and shipping projects that feel “alive.”
      </p>

      <div className="grid">
        <div className="card">
          <h3>What I’m into</h3>
          <ul>
            <li>Web dev + UI polish</li>
            <li>Security / systems learning</li>
            <li>Products that help students</li>
          </ul>
        </div>
        <div className="card">
          <h3>Quick links</h3>
          <div className="row">
            <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkPanel() {
  return (
    <div className="panelWork">
      <LineNumbers count={40} />
      <div className="workMain">
        <h2 className="titleSm">Projects</h2>
        <div className="cards">
          {PROJECTS.map((p) => (
            <div key={p.title} className="card">
              <div className="cardTop">
                <h3>{p.title}</h3>
                <a className="btn btn--ghost" href={p.link} target="_blank" rel="noreferrer">
                  View
                </a>
              </div>
              <p className="muted">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThoughtsPanel() {
  const [q, setQ] = useState("");
  const filtered = POSTS.filter((p) => {
    const blob = `${p.title} ${p.body}`.toLowerCase();
    return blob.includes(q.toLowerCase());
  });

  return (
    <div className="panelInner">
      <div className="row spaceBetween">
        <h2 className="titleSm">Thoughts</h2>
        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posts…"
        />
      </div>

      <div className="cards">
        {filtered.map((p) => (
          <details key={p.title} className="card">
            <summary className="summary">
              <div>
                <div className="summaryTitle">{p.title}</div>
                <div className="muted small">{p.date}</div>
              </div>
            </summary>
            <p className="muted">{p.body}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function ResumePanel() {
  return (
    <div className="panelInner">
      <h2 className="titleSm">Resume</h2>
      <p className="muted">Put your PDF at <code>public/resume.pdf</code>.</p>

      <div className="row">
        <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
          View PDF
        </a>
        <a className="btn btn--ghost" href="/resume.pdf" download>
          Download
        </a>
      </div>

      <div className="resumeFrameWrap">
        <iframe className="resumeFrame" src="/resume.pdf" title="Resume PDF" />
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("Me");

  return (
    <div className="page">
      <div className="folder" role="application">
        <div className="tabs" role="tablist" aria-label="Portfolio tabs">
          {TABS.map((t) => (
            <TabButton key={t} id={t} active={active === t} onClick={() => setActive(t)} />
          ))}
        </div>

        <div
          className="panel"
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
        >
          {active === "Me" && <MePanel />}
          {active === "Work" && <WorkPanel />}
          {active === "Thoughts" && <ThoughtsPanel />}
          {active === "Resume" && <ResumePanel />}
        </div>
      </div>
    </div>
  );
}
