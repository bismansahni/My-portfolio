import React from 'react';
import './style/Experience.css'; // Make sure to create this CSS file

const experiences = [
  {
    title: 'Research Intern (Human In Mind Engineering Lab)',
    period: '2023 - Present',
    responsibilities: [
      'Developed an AR app for cognitive training with adaptive interactive designs.',
      'Enhanced VR/AR realism via Unity, achieving a 35% boost in user immersion.',
      'Partnered with Georgia Tech to merge real-time emotion detection in VR, enhancing cognitive outcomes by 20%+.',
    ],
  },
  {
    title: 'Founder and President (CodeCollab)',
    period: '2023 - Present',
    responsibilities: [
      'Established CodeCollab ASU, attracting over 100 members in the first month.',
      'Organized events, workshops, and hackathons, increasing member engagement by 25%.',
      'Conducted code peer review sessions to improve coding skills and best practices.',
    ],
  },
  {
    title: 'Software Lead EPICS (Arizona State University)',
    period: '2023 - Present',
    responsibilities: [
      'Engaged with stakeholders to align on requirements, ensuring solutions meet needs.',
      'Led task delegation for a team of 15+, optimizing performance and efficiency.',
      'Conducted comprehensive research on emerging technologies, leading the adoption of innovative solutions tailored to project requirements.',
    ],
  },
  {
    title: 'Undergraduate Teaching Assistant (Arizona State University)',
    period: 'Jan 2023 - Dec 2023',
    responsibilities: [
      'Facilitated 10+ monthly sessions, enhancing collaborative learning and understanding of complex coding concepts.',
      'Conducted skill sessions on cloud computing and GitHub, significantly enhancing foundational knowledge and skills for newcomers.',
      'Co-revamped course curriculum to include generative AI, raising student content satisfaction by 39%.',
    ],
  },
];

function Experience() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-entry">
          <h3 className="experience-role">{exp.title}</h3>
          <p className="experience-period">{exp.period}</p>
          <ul className="experience-responsibilities">
            {exp.responsibilities.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
