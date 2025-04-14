import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import './GamifiedPortfolio.css';

const projects = [
  {
    title: "Retail Sales Analytics Pipeline",
    description: "ETL pipeline with Airflow, BigQuery, and Power BI for daily retail sales.",
    github: "https://github.com/ajinkyachintawar/retail-sales-pipeline"
  },
  {
    title: "Lifestyle Classification using Biometrics & HEXACO",
    description: "ML-based activity classification using biometric + psychological data.",
    github: "https://github.com/ajinkyachintawar/Classifying-Activity-Levels-with-Biometric-and-Psychological-Insights"
  },
  {
    title: "Bitcoin Price Prediction",
    description: "Real-time LSTM-based BTC forecasting using Kafka and Tableau.",
    github: "https://github.com/ajinkyachintawar/bitcoin-prediction"
  },
  {
    title: "US Drug Overdose Analysis",
    description: "Analyzed drug overdose trends using Python, Pandas, and Seaborn.",
    github: "https://github.com/ajinkyachintawar/DrugOverdose"
  },
  {
    title: "Employee Attrition Prediction",
    description: "Built a classification model to predict employee attrition.",
    github: "https://github.com/ajinkyachintawar/Employee-Attrition-"
  },
  {
    title: "10-Minute Medicine Delivery Simulation in Dublin 8",
    description: "Simulated efficient 10-min medicine deliveries with route optimization in Dublin.",
    github: "https://github.com/ajinkyachintawar/10min_delivery"
  }
];

const sections = [
  {
    id: 'about',
    title: '🙋‍♂️About Me',
    content: (
      <div className="about-container">
        <div className="about-img-container">
          <img
            src="/ChatGPT Image Apr 13, 2025, 09_01_29 PM.png"
            alt="Ajinkya Action Figure"
            className="about-img"
          />
        </div>
        <div className="about-text">
          <p>
            Hi, I'm <strong>Ajinkya Chintawar</strong>, a detail-oriented Data Analyst and Machine Learning enthusiast with a strong foundation in statistics, business intelligence, and end-to-end data solutions. I hold an MSc in Data Analytics and bring hands-on experience across domains such as healthcare, retail, and fintech.
          </p>
          <p>
            I enjoy uncovering stories hidden in data — whether it's building real-time ETL pipelines, creating predictive ML models, or designing dashboards that empower business decisions. I'm also passionate about clean code, collaborative problem-solving, and continuous learning.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'projects',
    title: '🚀 Projects',
    content: (
      <div className="project-section-wrapper">
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <h3>{project.title}</h3>
                </div>
                <div className="flip-back">
                  <p>{project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  ,
  
  
  {
    id: 'skills',
    title: '🛠️ Skills',
    content: (
      <div className="skills-list">
        {["Python", "SQL", "Power BI", "Tableau", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "ETL Pipelines", "BigQuery", "Airflow", "AWS", "PostgreSQL", "Git", "Docker"].map(skill => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>
    )
  },
  {
    id: 'resume',
    title: '📄 Resume',
    content: (
<div className="resume-section">
  <p>Download or view my resume to get a quick overview of my experience and skillset.</p>
  <div className="resume-buttons">
    <a href="https://github.com/ajinkyachintawar/Resume/raw/main/Ajinkya_Chintawar_Resume.pdf" download>
      Download Resume
    </a>
    <a
      href="https://github.com/ajinkyachintawar/Resume/blob/main/Ajinkya_Chintawar_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Resume
    </a>
  </div>
</div>

    )
  },
  {
    id: 'contact',
    title: '📬 Contact',
    content: (
<div className="contact-section">
  <div className="contact-item">
    <span>📧 Email:</span>
    <a href="mailto:ajinkyachintawar12@gmail.com">ajinkyachintawar12@gmail.com</a>
  </div>
  <div className="contact-item">
    <span>📱 Phone (IE):</span>
    <a href="tel:+353894911696">+353 89 491 1696</a>
  </div>
  <div className="contact-item">
    <span>📞 Phone (IN):</span>
    <a href="tel:+917219578150">+91 72195 78150</a>
  </div>
  <div className="contact-item">
    <span>💼 LinkedIn:</span>
    <a href="https://www.linkedin.com/in/ajinkya-chintawar" target="_blank" rel="noopener noreferrer">
      linkedin.com/in/ajinkya-chintawar
    </a>
  </div>
  <div className="contact-item">
    <span>👨‍💻 GitHub:</span>
    <a href="https://github.com/ajinkyachintawar" target="_blank" rel="noopener noreferrer">
      github.com/ajinkyachintawar
    </a>
  </div>
</div>

    )
  }
  
];

export default function GamifiedPortfolio() {
  const [position, setPosition] = useState(0);
  
  const audioRef = useRef(null);

  const playSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();              // Stop any previous playback
      audioRef.current.currentTime = 0;      // Reset to beginning
      audioRef.current.play().catch((e) => {
        console.log("Audio play prevented:", e);
      });
  
      // Stop audio after same time as animation (1.6s)
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 1600); // Match this to car animation duration
    }
  }, []);
  
  
  

  const nextSection = useCallback(() => {
    setPosition((prev) => {
      const next = Math.min(prev + 1, sections.length - 1);
      if (next !== prev) playSound();
      return next;
    });
  }, [playSound]);
  
  const prevSection = useCallback(() => {
    setPosition((prev) => {
      const next = Math.max(prev - 1, 0);
      if (next !== prev) playSound();
      return next;
    });
  }, [playSound]);
  
  

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSection();
      else if (e.key === 'ArrowLeft') prevSection();
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSection, prevSection]);

  const currentSection = sections[position];
  


  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Ajinkya Chintawar | Data Analyst & ML Developer 🚗</h1>
      <audio ref={audioRef} src="/nitro-sound.mp3" preload="auto" />
  
      {/* Track */}
      <div className="track-wrapper">
        <div className="track-layout">
          {sections.map((sec, i) => (
            <div
              key={sec.id}
              className={`track-item ${position === i ? 'active' : ''}`}
            >
              <h2>{sec.title}</h2>
            </div>
          ))}
  
          {/* 🚗 Car (outside .map) */}
          <motion.div
            className="car-wrapper"
            animate={{
              left: `calc(${(100 / sections.length) * position}% + ${
                (100 / sections.length) / 2
              }%)`,
            }}
            transition={{ ease: 'easeInOut', duration: 1.8 }}
            style={{
              position: 'absolute',
              bottom: -70,
              transform: 'translate(-50%)',
              zIndex: 15,
            }}
          >
            <img src="/supercar.png" alt="car" className="custom-car-icon" />

  
            {/* 🔥 Flame Effect */}
            {position !== 0 && (
              <motion.div
                className="car-flame"
                initial={{ opacity: 0.8, scale: 0.9 }}
                animate={{ opacity: 0, scale: 2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '16px',
                  height: '30px',
                  background:
                    'radial-gradient(circle at 50% 20%, orange, red, transparent)',
                  borderRadius: '50%',
                  zIndex: -1,
                }}
              />
            )}
          </motion.div>
        </div>
      </div>
  
      {/* Mini Map */}
      <div className="minimap">
        {sections.map((sec, i) => (
          <motion.div
            key={`mini-${sec.id}`}
            animate={{ scale: i === position ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            className={`minimap-dot ${i === position ? 'active' : ''}`}
          />
        ))}
      </div>
  
      {/* Navigation */}
      <div className="nav-buttons">
        <button onClick={prevSection}>⬅️ Drive Left</button>
        <button onClick={nextSection}>Drive Right ➡️</button>
      </div>
  
      {/* Section */}
      {currentSection && (
        <div className="section-content">
          <h2 className="section-title">
            {currentSection.title}
          </h2>
          <div className="section-body">{currentSection.content}</div>
        </div>
      )}

      <footer className="footer">
        &copy; {new Date().getFullYear()} Ajinkya Chintawar. All rights reserved.
      </footer>
    </div>
  );
}
