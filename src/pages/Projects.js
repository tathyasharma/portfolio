import './Projects.css';

const projects = [
  {
    title: 'MovieMate — RAG Chatbot',
    description:
      'A Retrieval-Augmented Generation chatbot for movie recommendations built with FAISS vector search, sentence-transformers for embeddings, and the Groq API for LLM responses. Features a Gradio interface for easy interaction.',
    tech: ['Python', 'FAISS', 'Sentence Transformers', 'Groq API', 'Gradio'],
    github: 'https://github.com/tathyasharma/moviemate',
    type: 'AI / NLP',
  },
  {
    title: 'Translate App',
    description:
      'A React-based language translator supporting 133 languages powered by the Anthropic Claude API. Features real-time translation, language detection, and a clean modern UI built for production use.',
    tech: ['React', 'Anthropic API', 'CSS', 'JavaScript'],
    github: 'https://github.com/tathyasharma/translate-app',
    type: 'Web App',
  },
  {
    title: 'AI Humaniser',
    description:
      'A React app that rewrites AI-generated text to sound natural and human. Uses the Claude API with a carefully crafted system prompt to strip robotic phrasing, vary sentence structure, and produce authentic-sounding output.',
    tech: ['React', 'Anthropic API', 'CSS', 'JavaScript'],
    github: 'https://github.com/tathyasharma/ai-humaniser',
    type: 'Web App',
  },
  {
    title: 'Player Recruitment Dashboard',
    description:
      'A React-based football scouting tool using Premier League stats data. Scores and ranks players using percentile-based metrics across attacking, creativity, and progression attributes with an interactive filtering UI.',
    tech: ['React', 'Data Analysis', 'JavaScript', 'CSS'],
    github: 'https://github.com/tathyasharma/player-recruitment',
    type: 'Data / Sports',
  },
  {
    title: 'Image Generator',
    description:
      'An AI-powered image generation app built with React using the DALL-E Turbo model. Users can enter text prompts and generate high-quality images instantly through a clean and minimal interface.',
    tech: ['React', 'DALL-E', 'OpenAI API', 'JavaScript'],
    github: 'https://github.com/tathyasharma/image-gen',
    type: 'Generative AI',
  },
];

const typeColors = {
  'AI / NLP': { bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d' },
  'Web App': { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
  'Data / Sports': { bg: '#fff7ed', border: '#fed7aa', text: '#c2410c' },
  'Generative AI': { bg: '#fdf4ff', border: '#e9d5ff', text: '#7c3aed' },
};

function Projects() {
  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          A selection of things I've built — spanning web apps, AI systems, and data tools.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const color = typeColors[project.type] || typeColors['Web App'];
          return (
            <div className="project-card" key={project.title}>
              <div className="project-top">
                <span
                  className="project-type"
                  style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.text }}
                >
                  {project.type}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                  aria-label="View on GitHub"
                >
                  <svg height="20" viewBox="0 0 16 16" width="20" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>

              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="tech-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
