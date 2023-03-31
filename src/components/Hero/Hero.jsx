import "./Hero.css"
import { useNavigate } from "react-router-dom";
import React from "react";

const Hero = (props) => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className={props.cName}>
        <img alt="mainImg" src={props.HeroImg} />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
      <section class="section-white">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="section-title">Meet the Team Behind</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="team-item">
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />
                <h3>NIKHILESH YADAV</h3>
                <div class="team-info"><p>Head of SEO</p></div>
                <p>Nikhilesh is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>
              </div>
            </div>

            <div class="col-sm-6 col-md-4">
              <div class="team-item">
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" />
                <h3>DRIKSHA KOYEN</h3>
                <div class="team-info"><p>SEO Specialist</p></div>
                <p>Graduating with a degree in Spanish and English, Driksha has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>
              </div>
            </div>

            <div class="col-sm-6 col-md-4">
              <div class="team-item">
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />
                <h3>KUMAR JADAV</h3>
                <div class="team-info"><p>Marketing Manager</p></div>
                <p>Kumar first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Our Work</h2>
        <p>771 million people lack basic access to clean and safe drinking water. We've been on a mission to end the water crisis since 2014, and with the help of generous supporters like you, we're getting closer every day.</p>
        <ul>
          <li>
            <h3>2,784</h3>
            <p>Water projects funded</p>
          </li>
          <li>
            <h3>835,671</h3>
            <p>People will be served</p>
          </li>
          <li>
            <h3>15</h3>
            <p>States in India</p>
          </li>
        </ul>
        <div class="map-container">
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1RzMmcAX2n2QDiXzAcKmX4tdWdlSHtCY&ehbc=2E312F" width="100%" height="480"></iframe>
          <div class="map-buttons">
            <button class="map-button">TERRAIN</button>
            <button class="map-button">SATELLITE</button>
          </div>
        </div>
      </section>

      <section>
        <h2>How We Work</h2>
        <p>We partner with experienced local organizations who build sustainable, community-owned water projects around the world.</p>
        <a href="#">LEARN MORE</a>
      </section>

      <section>
        <h2>Proving Our Impact</h2>
        <p>From the start, we’ve publicly shared photos and GPS coordinates for every single charity: water project. You can find all of our funded projects on the map above.</p>
        <a href="https://www.google.com/maps/d/u/0/embed?mid=1RzMmcAX2n2QDiXzAcKmX4tdWdlSHtCY&ehbc=2E312F" target="_blank"><button>VIEW MAP</button></a>
      </section>

      <section>
        <h2>Stories From the Field</h2>
        <p>The communities we serve are filled with some of the most inspiring people you’d ever want to meet. Their stories of ingenuity and perseverance are examples for us all.</p>
        <button className="story">"BETWEEN HEAVEN AND EARTH" - WAITING FOR CLEAN WATER IN ONE OF THE HARSHEST PLACES ON EARTH</button>
        <button className="story">WHAT HELEN TAUGHT US - The Next Step In Sustainability</button>
        <p>The Next Step In Sustainability</p>
        <p>Working with local leaders to keep water flowing is critical to our mission. In November 2015, charity: water started deploying cutting-edge sensors and cloud computing technology to equip local leaders with real-time data.</p>
        <button>SEE OUR SENSORS</button>
      </section>

      <section>
        <h2>Add Impact To Your Inbox</h2>
        <p>Get our emails to stay in the know.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" /><br /><br />
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" /><br /><br />
          <input type="submit" value="SUBSCRIBE" onClick={() => navigate('/register')} />
        </form>
      </section>

    </div>
  );
}


export default Hero;
