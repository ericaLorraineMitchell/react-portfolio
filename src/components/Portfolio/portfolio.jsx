import React from 'react'; 
import './portfolio.css'
// import Grid from 'react-css/grid'


const Portfolio = () => {
    return (
    <div class="portfolio-container">
<section className="works" id="works">
<ul>
<li>
  <figure src="./assets/day-planner-image.png" alt="day planner image">
    <figcaption><h3>Day Planner</h3></figcaption>
  </figure>
  <p>
  I have created a colored coded business planner for the work day. It reminds the user of the current date and time as well as allows for saving of your event for its appropriate time slot. Using local storage allows retrieval of the event item so that it is never lost for the user.
  </p>
  <a href="https://ericalorrainemitchell.github.io/work-day-planner/">Visit Website</a>
</li>
<li>
  <figure src=".assets/note-taker-image.png" alt="notetaking image">
    <figcaption><h3>Note Taker</h3></figcaption>
  </figure>
  <p>
  Update to frontend code for application that writes, saves and deletes notes in real time. The application uses Node.js and Express back-end to save and retrieve notes from json storage file.
  </p>
  <a href="https://elm-express-note-taker.herokuapp.com/notes">Visit Site</a>
</li>
<li>
  <figure src="./assets/ecommerce.jpg" alt="ecommerce image">
    <figcaption><h3>E-commerce</h3></figcaption>
  </figure>
  <p>
  Build for back end e-commerce site. Express.js API's will use Sequelize to interact with MYSQL database of inventory. I begin this process by entering MYSQL credentials, connecting the database to Sequelize, seeding my SQL data and finally manipulate data through Insomnia API routes.
  </p>
  <a href="https://ericalorrainemitchell.github.io/work-day-planner/">Visit Site</a>
</li>
<li>
  <figure src="./assets/gym-diary.png" alt="gym image">
    <figcaption><h3>Gym Application</h3></figcaption>
  </figure>
  <p>
  Gym Diary is a fully responsive application that allows gym users to track workouts and health habits. This gym diary is a one-stop log and achievement indicator for those that wish to see specific body goals based upon days that workout activity is logged. The app offers a variety of preset fitness goals as well as visibility to workout details such as reps and sets, and the calorie burn from those workouts. Users will be able to log, favorite and delete workout logs to their liking making this customizable application vital to reaching workout goals.
  </p>
  <a href="https://tranquil-reaches-54677.herokuapp.com/">Visit Site</a>
</li>
</ul>
</section>


 {/* <div class="square">
    <div class="content">
    </div>
  </div>

  <div class="square">
    <div class="content">
    </div>
  </div>

  <div class="square">
    <div class="content">
    </div>
  </div>

  <div class="square">
    <div class="content">
    </div>
  </div>

  <div class="square">
    <div class="content">
    </div>
  </div> */}

</div> 

    )

    }








export default Portfolio;