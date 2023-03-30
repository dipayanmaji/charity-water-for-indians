import './Home.css';
import React from 'react';
import Bgvideo from '../../video/Backgroundvideo.mp4'
import FundedProject from '../../images/fundedproject.png';
import Served from "../../images/1.png";
import Earth from "../../images/earth.png";
import Spring from "../../images/4.jpg"
import S from "../../images/s.png";
import group from "../../images/3.jpg";
import water from "../../images/charity-water2.jpg";
import uncommoncourage from "../../images/5.jpg";
import Develpament from "../../images/development.jpg";
import Journey from "../../images/2.jpg";


const Home = () => {
    return (
        <div className='container'>
            <div>
                <video autoPlay="autoPlay" loop="loop" muted="muted">
                    <source src={Bgvideo} type="video/mp4" />
                </video>
            </div>
            <div className="main-container">
                <div className="containerItems">
                    <h1>Help bring clean and safe water to every person on the planet.</h1>&nbsp;
                    <p>
                        The water crisis is massive. But together, we can solve it.
                        Private donors cover our operating costs so whether you choose to
                        join us by giving once or through The Spring,our community of monthly givers,
                        know that 100% of your generosity will bring clean water to families around the world.
                    </p>
                </div>
            </div>
            <div className='main-heading'>
            <div className='heading' >
                <div><br />OUR WORK</div>

                <div className='main-heading1'><br />
                    <h1 >771 million people lack basic access to clean and safe drinking water.
                        We’re on a mission to change that.
                    </h1><br />
                    <p>We believe that sustainable work is locally-led. Along with implementing community-owned water projects,
                        our local partners help facilitate comprehensive water, sanitation,
                        and hygiene (WASH) programming to protect everyone’s long-term health.
                    </p>
                </div>
                <div className='row'>
                    <div className='column'>

                        <img className='block mx-auto' width="170px" height="150px" src={FundedProject} alt="" />
                        <h3>120,784</h3>
                        <p>Water projects funded</p>

                    </div>
                    <div class="column">
                        <img className='block mx-auto' width="170px" height="150px" src={Served} alt="" />
                        <h3>16,835,671</h3>
                        <p>People will be served</p>
                    </div>
                    <div class="column">
                        <img className='block mx-auto' width="170px" height="150px" src={Earth} alt="" />
                        <h3>26</h3>
                        <p>Countries</p>
                    </div>
                </div>
            </div>

            <div className='home-heading'>
                <br />
                <div class="heading-main"><br/>
                    <h3>Together, we can end the water&nbsp;crisis</h3>
                    <p>Here's how you can take action&nbsp;today:</p>
                </div><br/>
                <div className="image">
                    <img src={Spring} width="400px" height="440px" alt='' />
                </div>
                <div class="flex">
                    <div className="heading-Spring">
                        <img className="image1" src={S} height="70px" width="65px" alt='' />

                        <h3 class="font-sans">Join The Spring</h3>

                        <div class="paragraph">
                            Spring members are monthly donors committed to making an impact and ending the water crisis.
                            Together Spring members bring clean water to 44,343 people every single&nbsp;month.
                        </div>

                        <div class="font-bold">A $20 monthly donation can give 6 people clean water every&nbsp;year.
                        </div>

                        <a class="button button-spring" href="../Donate">Join the Spring</a>

                        <p class="text">100% of your donation funds clean&nbsp;water.</p>
                    </div>
                
            </div><br />
            </div>
            <div className='group-heading'><br/><br/><br/>
                <div className='home-heading1'>

                    <img src={group} alt='' width="200px" height="150px" />
                    <div className='fund-column'>
                        <h4 >Fundraise for clean&nbsp;water</h4>
                        <p >Creating a campaign helps raise money for clean water projects for people in&nbsp;need.</p>
                        <a className='fund-btn1' href="https://www.charitywater.org/get-involved/fundraise#new-campaign-modal">STRAT A CAMPAIGN</a>
                    </div>
                </div>
                <div className='home-heading2'>
                    <img src={water} alt='' width="200px" height="150px" />
                    <div className='fund-column1'>
                        <h4 >Sponsor a water&nbsp;project</h4>
                        <p>Transform an entire community, school, or
                            health clinic. with a gift of $10,000 or&nbsp;more.
                        </p>
                        <a class="fund-btn1" href="/donate/water-project-sponsorship">LEARN MORE</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="update-heading">
                <h3 className="font-heading">
                    Stay updated with stories from our&nbsp;team</h3>
            </div><br />
            <div className='home-heading3'>

                <img src={uncommoncourage} alt='' width="370px" height="250px" />
                <div className='fund-column2'><br />
                    <h6>STORIES FROM THE FIELD</h6>
                    <h4 >Uncommon Courage: When Water becomes a Warzone</h4>
                    <p>In unthinkable circumstances, mechanics in Ethiopia continue to restore access to clean water.</p>
                    <a className='fund-btn'>SREAD MORE</a>
                </div>
            </div>
            <div className='home-heading4'>

                <img src={Develpament} alt='' width="370px" height="250px" />
                <div className='fund-column2'><br />
                    <h6>STORIES FROM THE FIELD</h6>
                    <h4 >Forward Forever</h4>
                    <p>What an old safe taught me about sustainable development.</p>
                    <a className='fund-btn'>READ MORE</a>
                </div>
            </div>
            <div className='home-heading5'>
                <img src={Journey} alt='' width="370px" height="250px" />
                <div className='fund-column2'><br />
                    <h6>THE JOURNEY OF YOUR DONATION</h6>
                    <h4 >AN UPDATE FROM CHARITY: WATER</h4>
                    <p>Watch this video to see how your donation turns into water, sanitation, and hygiene resources that transform entire communities and impact more people than you know.
                    </p>
                    <a className='fund-btn'>WATCH HERE</a>
                </div>
            </div>

        </div>


    )
}
export default Home;

