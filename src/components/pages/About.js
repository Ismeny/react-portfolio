import React from 'react';
import './About.css';

// function About () {
//   return (
//       <div className='wholeContent'>
//           <h1 className="sectionTitle">About Me</h1>
//           <section className="aboutContent">
//               <div className='aboutCard'>
//               <p>
//               Hello, my name is Ismeny Castro. <br></br>
//          <br></br>
//           Full Stack Web Developer specializing in the MERN stack. Aiming to create pixel-perfect user experiences by utilizing newly developed skills in HTML5, CSS3, JavaScript, React.js, MongoDB, Node.js, and responsive web design. Recently earned a professional certificate in Full-Stack Web Development from the University of Texas at Austin. I enjoy tackling programming problems from a variety of perspectives and cooperating with others. I'm looking forward to putting my abilities to work as part of a fast-paced, quality-driven team to improve digital experiences and create responsive websites. <br></br>
//           <br></br>
//           I'm born and raised in Austin, Texas. 
//           I love doing outdoor activites like going to the Greenbelt, paddleboarding on Town Lake, and picnics at Zilker Park with my dogs and friends. 
//           I'm new to the tech field and excited to learn more about web development and pursue a career as a Full Stack MERN Developer.
//               </p>
//               </div>
//           </section>
//       </div>
//   )
// }

// export default About;
export default function About() {
  return (
    <>
    <div className='about'>
      <h1>About Me</h1>
      <p className='about-font'>
          Hello, my name is Ismeny Castro. <br></br>
          <br></br>
          Full Stack Web Developer specializing in the MERN stack. Aiming to create pixel-perfect user experiences by utilizing newly developed skills in HTML5, CSS3, JavaScript, React.js, MongoDB, Node.js, and responsive web design. Recently earned a professional certificate in Full-Stack Web Development from the University of Texas at Austin. I enjoy tackling programming problems from a variety of perspectives and cooperating with others. I'm looking forward to putting my abilities to work as part of a fast-paced, quality-driven team to improve digital experiences and create responsive websites. <br></br>
          <br></br>
          I'm born and raised in Austin, Texas. 
          I love doing outdoor activites like going to the Greenbelt, paddleboarding on Town Lake, and picnics at Zilker Park with my dogs and friends. 
          I'm new to the tech field and excited to learn more about web development and pursue a career as a Full Stack MERN Developer.
      </p>
      <br></br>
      <div id='skills'>
        <h1 align="left">Languages and Tools</h1>
            <p align="left"><a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://graphql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://materializecss.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="materialize" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> </p>
    </div>
    </div>
    <footer className='footer'>
    <h5 className='center-text'> Copyright &copy; 2021 Ismeny Saguilan</h5>
  </footer>
  </>
  );
}