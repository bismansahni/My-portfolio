// import React from 'react';
// import bismanphoto from './images/bismanphoto.png'; // Adjust the path to where your image is located
// import './styles/About.css';

// function About() {
//     return (
//       <div className="about-container">
//         <div className="photo-and-bubble-container">
//           <img src={bismanphoto} alt="Bisman" className="about-photo" />
//           <div className="bubble">
//             <p>
//               I am a passionate and dedicated computer science student with a strong interest in software development. I am always eager to learn new technologies and explore innovative solutions to real-world problems.
//             </p>
//           </div>
//         </div>
//         <div className="about-text-container">
//           <h1>Bisman</h1>
//         </div>
//       </div>
//     );
//   }
  
//   export default About;
  

// import React from 'react';
// import bismanphoto from './images/bismanphoto.png'; // Adjust the path if needed
// import './styles/About.css';

// function About() {
//     return (
//         <div className="about-container">
//             <div className="photo-and-bubble-container">
//                 <img src={bismanphoto} alt="Abu Said" className="about-photo" />
//                 <div className="bubble">
//                     <h2>WHO I AM?</h2>
//                     <p>
//                         My name is ABU SAID. I am a professional and enthusiastic programmer in
//                         my daily life. I am a quick learner with a self-learning attitude. I love to learn
//                         and explore new technologies and am passionate about problem-solving. I
//                         love almost all the stacks of web application development and love to make
//                         the web more open to the world. My core skill is based on JavaScript and I
//                         love to do most of the things using JavaScript. I am available for any kind of
//                         job opportunity that suits my skills and interests.
//                     </p>
//                 </div>
//             </div>
//             <div className="about-text-container">
//                 {/* If you want to include your name under the text bubble as in the image */}
//                 <h1>ABU SAID</h1> 
//             </div>
//         </div>
//     );
// }

// export default About;


// import React from 'react';
// import abuSaidPhoto from './images/bismanphoto.png'; // Make sure the path is correct

// import './styles/About.css';

// function About() {
//   return (
//     <div className="about-container">
//       <div className="photo-container">
//         <img src={abuSaidPhoto} alt="ABU SAID" className="about-photo" />
//       </div>
//       <div className="text-container">
//         <h2>Hey, I am Bisman!</h2>
//         <p>
//           My name is ABU SAID. I am a professional and enthusiastic programmer in
//           my daily life. I am a quick learner with a self-learning attitude. I love to learn
//           and explore new technologies and am passionate about problem-solving. I
//           love almost all the stacks of web application development and love to make
//           the web more open to the world. My core skill is based on JavaScript and I
//           love to do most of the things using JavaScript. I am available for any kind of
//           job opportunity that suits my skills and interests.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;


import React from 'react';
import abuSaidPhoto from './images/bismanphoto.png'; // Adjust if necessary
import githubIcon from './images/github.svg'; // Path to your GitHub icon
import linkedInIcon from './images/linkedin.png'; // Path to your LinkedIn icon
import './styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={abuSaidPhoto} alt="ABU SAID" className="about-photo" />
        <div className="about-text">
          <h1>Hey, I am Bisman!</h1>
          <p>
            My name is Bisman. I am a professional and enthusiastic programmer.
          </p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/bismansahni" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/bismansahni" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
