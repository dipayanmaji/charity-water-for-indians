import "./Hero1.css"
import React from "react";

const Hero1 = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt="mainImg" src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000" />
      </div>
      <div className="hero1-text">
        <h1>WHY WATER</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
      <div className="why-water-solution">
        <div className="why-water-info">
          <h1>771 Million People Lack Access to Clean Water</h1>
          <p>
            That’s nearly 1 in 10 people worldwide. Or, twice the population of
            the United States. The majority live in isolated rural areas and
            spend hours every day walking to collect water for their family. Not
            only does walking for water keep children out of school or take up
            time that parents could be using to earn money, but the water often
            carries diseases that can make everyone sick.
          </p>
          <p>
            But access to clean water means education, income and health -
            especially for women and kids.
          </p>
        </div>
        <div className="why-water-benefits">
          <div className="benefit">
            <h2>Health</h2>
            <p>
              Diseases from dirty water kill more people every year than all forms
              of violence, including war. 43% of those deaths are children under
              five years old. Access to clean water and basic sanitation can save
              around 16,000 lives every week.
            </p>
          </div>

          <div className="benefit">
            <h2>Time</h2>
            <p>
              Each day, women in Sub-Saharan Africa spend a total of 16 million
              hours collecting water. Access to clean water gives communities more
              time to grow food, earn an income, and go to school -- all of which
              fight poverty.
            </p>
          </div>

          <div className="benefit">
            <h2>Education</h2>
            <p>
              Clean water helps keep kids in school, especially girls. Less time
              collecting water means more time in class. Clean water and proper
              toilets at school means teenage girls don’t have to stay home for a
              week out of every month.
            </p>
          </div>

          <div className="benefit">
            <h2>Women Empowerment</h2>
            <p>
              Women are responsible for 72% of the water collected in Sub-Saharan
              Africa. When a community gets water, women and girls get their lives
              back. They start businesses, improve their homes, and take charge of
              their own futures.
            </p>
          </div>
        </div>

        <div className="why-water-solution">
          <h2>How do we tackle the water crisis?</h2>
          <p>
            We work with local experts and community members to find the best
            sustainable solution in each place where we work, whether it’s a well,
            a piped system, a BioSand Filter, or a system for harvesting rainwater.
            And with every water point we fund, our partners coordinate sanitation
            and hygiene training, and establish a local Water Committee to help
            keep water flowing for years to come.
          </p>
        </div>
      </div>
      <div className="water-crisis">
        <h2 className="water-crisis-heading">How do we tackle the water crisis?</h2>
        <p className="water-crisis-description">
          We work with local experts and community members to find the best sustainable solution in each place where we work, whether it’s a well, a piped system, a BioSand Filter, or a system for harvesting rainwater. And with every water point we fund, our partners coordinate sanitation and hygiene training, and establish a local Water Committee to help keep water flowing for years to come.
        </p>
        <div className="water-crisis-learn-more">
          <h3>LEARN MORE</h3>
          <p>Access to clean water changed the lives of Hadjara, Umu, Natalia, and Devison. Read their stories.</p>
        </div>
        <div className="water-crisis-buttons">
          <button>MEET HADJARA</button>
          <button>MEET UMU</button>
          <button>MEET NATALIA</button>
          <button>MEET DEVISON</button>
        </div>
      </div>
      <div className="water-investment">
        <p className="water-investment-paragraph">Every <span>$1</span> invested in joint water supply and sanitation provides a $4.30 economic return.6</p>
        <p className="water-investment-paragraph">It’s a solid investment; access to clean water is perhaps the single most powerful tool for sparking economic growth that humanity has ever known.</p>
        <button className="donate-button">DONATE NOW</button>
        <div className="impact-inbox">
          <p>Add Impact To Your Inbox</p>
          <p>Get our emails to stay in the know.</p>
          <form>
            <label htmlFor="first-name">FIRST NAME</label>
            <input type="text" id="first-name" name="first-name" />
            <br />
            <label htmlFor="last-name">LAST NAME</label>
            <input type="text" id="last-name" name="last-name" />
            <br />
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" name="email" />
            <br />
            <button type="submit" className="subscribe-button">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero1;