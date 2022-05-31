import "./about.css";
import Me from "../assets/prof_pic5-400px.jpg";


const About = () => {
    return(
      <div className="column">
        <div className="about" id="about-section">
            <img className="picture" src={Me} alt="Erica Mitchell"/>
        <p>
       I am passionate about technology inclusively, accessibility and leaving my reach of the world a better place than I found it. Foundational knowledge in Agile methodologies, JavaScript, CSS, Node, React.js, and responsive web design.

        </p>
        <p>
        When I am not leading and developing projects, I enjoy visiting natural landscapes with my Belgian Malinois, art museums, real estate, and honing my technical skills with ongoing short courses. Very excited to utilize my cumulative professional skills and technical knowledge to execute projects that myself and clients are proud of.
    </p>
      </div>  
      </div>
 
)
}
  
export default About;