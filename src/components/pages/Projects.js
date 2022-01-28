import React from 'react';
import './Projects.css'

export default function Projects() {
  return (
    <>

    <div className='projects'>
      <h1>Projects</h1>
      <div className='flex-container'>
            <div className="card">  
            <h4>Crypto Cosmos</h4>
            <p>HTML, CSS, JavaScript</p>
            <br></br>
            <a href='https://cole-cochran.github.io/Crypto-Cosmos/' className="crypto-cosmos" target="_blank" rel="noreferrer">Click to view</a>
            </div>
            <div className="card">
                <h4>Script Doctors</h4>
                <p>HTML, CSS, JavaScript, <br></br>Express, Node.js, Sequelize</p>
                <br></br>
            <a href='https://project2-group8.herokuapp.com/login' className="script-doctors" target="_blank" rel="noreferrer">Click to view</a>
            </div>
            <div className="card">
                <h4>Planthub</h4>
                <p>MERN Stack</p>
                <br></br>
            <a href='https://planth.herokuapp.com/' className='planthub'  target="_blank" rel="noreferrer" >Click to view</a>
            </div>
        </div>
    </div>
    <footer className='footer'>
      <h5 className='center-text'> Copyright &copy; 2021 Ismeny Saguilan</h5>
    </footer>
  </>
  );
}
