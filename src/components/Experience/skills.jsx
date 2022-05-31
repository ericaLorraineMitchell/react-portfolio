import React from 'react'
// import './experience.css'


const Skills = () => {
  return (
    <section className="skills" id='skills'>
      <h4>My Skills</h4>
      <h3>Fullstack</h3>

<div className="justify-content-center mt-5">
<div id="front-skills">
    <h2>Front end</h2>
    <p>HTML, CSS (Bootstrap, Sass), JavaScript, jQuery, React.js, DOM, AJAX</p>
</div>

<div id="back-skills" className="mt-5">
    <h2>Back end</h2>
    <p>
    Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Handlebars
    </p>
</div>
</div>
</section>
  )
}

export default Skills;

