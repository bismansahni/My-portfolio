// Suggested code may be subject to a license. Learn more: ~LicenseLog:2387748752.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3151665673.
import "./styles/Education.css";
import ASUlogo from './images/ASUlogo.png'; // Ensure the path to your image is correct

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-entry">
        <img src={ASUlogo} alt="ASU Campus" className="education-image" />
        <div className="education-info">
          <h3>Arizona State University</h3>
          <p className="education-degree">Bachelor of Science in Computer Science</p>
          <p className="education-year">2019 - 2023</p>
          <ul className="education-details">
            <li>Graduated with Honors (GPA: 3.9/4.0)</li>
            <li>Relevant coursework: Data Structures, Algorithms, Web Development, Machine Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
