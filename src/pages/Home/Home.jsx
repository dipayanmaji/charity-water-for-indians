import './Home.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentMethod from '../../components/Payment Method/PaymentMethod';
import PayAmount from '../../components/Pay Amount/PayAmount';
import Bgvideo from '../../video/Backgroundvideo.mp4';
import poster from '../../images/video-poster.jpg';
import FundedProject from '../../images/fundedproject.png';
import Served from "../../images/1.png";
import Earth from "../../images/earth.png";
import Spring from "../../images/4.jpg"
import S from "../../images/s.png";
import group from "../../images/3.jpg";
import water from "../../images/charity-water2.jpg";
import uncommoncourage from "../../images/5.jpg";
import Development from "../../images/development.jpg";
import Journey from "../../images/2.jpg";


const Home = () => {
    const [activePayAmount, setActivePayAmount] = useState(true);
    const [amount, setAmount] = useState();

    return (
        <div className='home-container'>
            <div className='video-container'>
                <video poster={poster} autoPlay="autoPlay" loop="loop" muted="muted">
                    <source src={Bgvideo} type="video/mp4" />
                </video>
            </div>

            <div className="main-container">
                <div className="containerItems">
                    <div className='left-side'>
                        <h1>Help bring clean and safe water to every person on the planet.</h1>
                        <p>
                            The water crisis is massive. But together, we can solve it.
                            Private donors cover our operating costs so whether you choose to
                            join us by giving once or through The Spring,our community of monthly givers,
                            know that 100% of your generosity will bring clean water to families around the world.
                        </p>
                    </div>
                    <div className='right-side'>
                        {
                            activePayAmount ? <PayAmount setActivePayAmount={setActivePayAmount} setAmount={setAmount} /> :
                                <PaymentMethod setActivePayAmount={setActivePayAmount} amount={amount} />
                        }
                    </div>
                </div>
            </div>

            {/* main-heading */}
            <div className='main-heading'>
                {/* heading */}
                <div className='heading' >
                    <Link to={'/our-work'}><div className='our-work' style={{ color: 'blue' }}>OUR WORK</div></Link>

                    <div className='main-heading1'>
                        <h1 >771 million people lack basic access to clean and safe drinking water.
                            We're on a mission to change that.
                        </h1>
                        <p>We believe that sustainable work is locally-led. Along with implementing community-owned water projects,
                            our local partners help facilitate comprehensive water, sanitation,
                            and hygiene (WASH) programming to protect everyone's long-term health.
                        </p>
                    </div>
                    <div className='row'>
                        <div className='column'>
                            <img className='block mx-auto' width="170px" height="150px" src={FundedProject} alt="Water projects funded" />
                            <h3>2,784</h3>
                            <p>Water projects funded</p>
                        </div>

                        <div className="column">
                            <img className='block mx-auto' width="170px" height="150px" src={Served} alt="People will be served" />
                            <h3>835,671</h3>
                            <p>People will be served</p>
                        </div>

                        <div className="column">
                            <img className='block mx-auto' width="170px" height="150px" src={Earth} alt="States" />
                            <h3>15</h3>
                            <p>States</p>
                        </div>
                    </div>
                </div>

                {/* home-heading */}
                <div className='home-heading'>
                    <div className="heading-main">
                        <h3>Together, we can end the water crisis</h3>
                        <p>Here's how you can take action today:</p>
                    </div>
                    <div className="image">
                        <img src={Spring} width="400px" height="440px" alt='Children & Tubewell' />
                    </div>

                    <div className="flex">
                        <div className="heading-Spring">
                            <img className="image1" src={S} height="70px" width="65px" alt='S' />

                            <h3 className="font-sans">Join The Spring</h3>

                            <div className="paragraph">
                                Spring members are monthly donors committed to making an impact and ending the water crisis.
                                Together Spring members bring clean water to 5,343 people every single month.
                            </div>

                            <div className="font-bold">A ₹1,500 monthly donation can give 5 people clean water every year.
                            </div>

                            <Link className="button button-spring" to={'/donate'}>Join the Spring</Link>

                            <p className="text">100% of your donation funds clean water.</p>
                        </div>
                    </div>

                </div>

                {/* group-heading */}
                <div className='group-heading'>
                    <div className='home-heading1'>
                        <img src={group} alt='group' width="200px" height="150px" />
                        <div className='fund-column'>
                            <h4 >Fundraise for clean water</h4>
                            <p >Creating a campaign helps raise money for clean water projects for people in need.</p>
                            <Link to={'/donate'} className='fund-btn1'>START A CAMPAIGN</Link>
                        </div>
                    </div>
                    <div className='home-heading1'>
                        <img src={water} alt='water' width="200px" height="150px" />
                        <div className='fund-column'>
                            <h4 >Sponsor a water project</h4>
                            <p>Transform an entire community, school, or
                                health clinic. with a gift of ₹1,000,000 or more.
                            </p>
                            <Link to={'/donate'} className="fund-btn1">LEARN MORE</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* update-heading */}
            <div className="update-heading">
                <h3 className="font-heading">Stay updated with stories from our team</h3>
                <section className='stories'>
                    <div className='home-heading2'>
                        <img src={uncommoncourage} alt='uncommoncourage' width="370px" height="250px" />
                        <div className='fund-column2'>
                            <h6>STORIES FROM THE FIELD</h6>
                            <h4 >Uncommon Courage: When Water becomes a Warzone</h4>
                            <p>In unthinkable circumstances, mechanics in Ethiopia continue to restore access to clean water.</p>
                            <Link className='fund-btn' to={'/our-work'}>READ MORE</Link>
                        </div>
                    </div>
                    <div className='home-heading2'>
                        <img src={Development} alt='Development' width="370px" height="250px" />
                        <div className='fund-column2'>
                            <h6>STORIES FROM THE FIELD</h6>
                            <h4 >Forward Forever</h4>
                            <p>What an old safe taught me about sustainable development.</p>
                            <Link className='fund-btn' to={'/our-work'}>READ MORE</Link>
                        </div>
                    </div>
                    <div className='home-heading2'>
                        <img src={Journey} alt='Journey' width="370px" height="250px" />
                        <div className='fund-column2'>
                            <h6>THE JOURNEY OF YOUR DONATION</h6>
                            <h4 >AN UPDATE FROM CHARITY: WATER</h4>
                            <p>Watch this video to see how your donation turns into water, sanitation, and hygiene resources that transform entire communities and impact more people than you know.
                            </p>
                            <Link className='fund-btn' to={'/our-work'}>WATCH HERE</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Home;
