import './Home.css';

function Home() {
  const skills = [
    'React', 'Node.js', 'Python', 'Machine Learning',
    'NLP', 'Computer Networks', 'MySQL', 'C', 'Git', 'REST APIs'
  ];

  return (
    <div className="home">

      {/* Hero / About Me */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Tathya Sharma</h1>
          <p className="hero-role">Computer Science Student · Developer · ML Enthusiast</p>
          <p className="hero-bio">
            I'm a Computer Science undergraduate passionate about building things that matter —
            from full-stack web apps and NLP systems to network tools and ML pipelines.
            Currently exploring the intersection of software engineering and artificial intelligence.
          </p>
          <div className="hero-actions">
            <a href="mailto:tathyasharma11@gmail.com" className="btn btn-primary">Get in Touch</a>
            <a href="https://github.com/tathya001" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-placeholder">
            <span>TS</span>
          </div>
        </div>
      </section>

      {/* Personal Details */}
      <section className="section">
        <h2 className="section-title">Personal Details</h2>
        <div className="details-card">
          <div className="detail-row">
            <span className="detail-label">Name</span>
            <span className="detail-value">Tathya Sharma</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Roll No.</span>
            <span className="detail-value">SE23UCSE173</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone</span>
            <span className="detail-value">+91 6302106571</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Personal Email</span>
            <span className="detail-value">tathyasharma11@gmail.com</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">College Email</span>
            <span className="detail-value">se23ucse173@mahindrauniversity.edu.in</span>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          <div className="interest-card">
            <div className="interest-icon">🧠</div>
            <h3>Natural Language Processing</h3>
            <p>Transformer architectures, BERT-family models, and their applications in semantic understanding.</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">🤖</div>
            <h3>Generative AI</h3>
            <p>LLMs, prompt engineering, RAG pipelines, and building AI-powered applications.</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">🌐</div>
            <h3>Computer Networks</h3>
            <p>Network protocols, secure communication systems, and distributed architectures.</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">⚙️</div>
            <h3>Software Engineering</h3>
            <p>Design patterns, system modelling, and building scalable full-stack applications.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
