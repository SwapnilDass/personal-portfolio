import { useState } from "react";
import "../css/experience.css"

const experiences = [
  {
    title: "Team Lead / Associate — Dollarama",
    description: [
      "Led onboarding for new hires; improved ramp-up time by 30%.",
      "Managed day-to-day transactions and customer service.",
      "Coordinated with team members to streamline inventory processes."
    ]
  },
  {
    title: "CS Student — Toronto Metropolitan University",
    description: [
      "Coursework: Data Structures, Web Dev, Systems Programming.",
      "Member of Software Engineering Club and FSAE (telemetry sub-team)."
    ]
  }
];

export default function Experience() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <button
              onClick={() => setSelected(index)}
              className={`experience-button ${
                selected === index ? "experience-button-active" : ""
              }`}
            >
              {exp.title}
            </button>

            {selected === index && (
              <ul className="experience-description">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
