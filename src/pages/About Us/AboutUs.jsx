import './AboutUs.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import hands from '../../images/hands-with-water.jpg';
import location from '../../images/location.png';
import searchIcon from '../../images/searchIcon.png';
import percent from '../../images/percent.png';
import founder from '../../images/founder.jpg';
import team from '../../images/team.svg';

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <div className='about-us-container'>
            <div className='about-us'>
                <div className='heading'>
                    <h6>About Us</h6>
                    <h2>CHARITY WATER FOR INDIANS is a nonprofit organization bringing clean and safe water to people around the India.</h2>
                </div>

                <img id='hands' src={hands} alt='Hands With Water' />

                <div className='projects-container'>
                    <div className='projects'>
                        <section className='left-section'>
                            <h1>Together, we can end the water crisis</h1>
                            <p>Since CHARITY WATER FOR INDIANS was founded in 2014, we've been chasing one ambitious goal: ending the india water crisis. And while the water crisis is huge, we're optimistic. We know how to solve the problem, and we make progress every day thanks to the help of local partners and generous supporters. If we work together, we believe everyone will have access to life's most basic need within our lifetime.</p>
                        </section>
                        <section className='right-section'>
                            <div className='funded'>
                                <strong>2,784</strong>
                                <span>Water projects funded</span>
                            </div>
                            <div className='served'>
                                <strong>835,671</strong>
                                <span>People will be served</span>
                            </div>
                            <div className='states'>
                                <strong>15</strong>
                                <span>States</span>
                            </div>
                        </section>
                    </div>
                </div>

                <div className='donate-details'>
                    <span id='heading'>You have our word—and more</span>
                    <span id='detail'>We want you to know exactly how and where your donation is being used. So from the beginning, we’ve kept a few promises.</span>
                    <div className='details-container'>
                        <section className='details'>
                            <div className='location'>
                                <img src={location} alt='location' width={'150px'} />
                                <span className='mini-heading'>We prove every project</span>
                                <span className='mini-detail'>We track every dollar you raise and show the projects you helped fund with photos and GPS coordinates.</span>
                                <Link to={'/our-work'}>see proof</Link>
                            </div>
                            <div className='search'>
                                <img src={searchIcon} alt='search' width={'168px'} />
                                <span className='mini-heading'>We’re an open book</span>
                                <span className='mini-detail'>We’ve consistently received the highest grades available for accountability and transparency.</span>
                                <Link to={'/our-work'}>view all financials</Link>
                            </div>
                            <div className='field'>
                                <img src={percent} alt='100%' width={'202px'} />
                                <span className='mini-heading'>100% goes to the field</span>
                                <span className='mini-detail'>Private donors cover our operating costs so 100% of your money can fund water projects.</span>
                                <Link to={'/our-work'}>learn about our model</Link>
                            </div>
                        </section>
                    </div>
                </div>

                <div className='team-leader'>
                    <h1>Leading the team</h1>
                    <p>Facing a problem as big as the water crisis requires an incredible team. We’re grateful to have some of the most innovative and committed leaders guiding our organization.</p>
                    <section className='founder-details'>
                        <img src={founder} alt='Shrikant Madhav Vaidya' />
                        <div className='description'>
                            <strong className='head'>Our Founder</strong>
                            <h2 className='name'>Shrikant Madhav Vaidya</h2>
                            <span className='details'>After a decade of indulging his darkest vices as a nightclub promoter, Shrikant declared spiritual, moral, and emotional bankruptcy. He spent two years on a hospital ship off the coast of Liberia, saw the effects of dirty water firsthand, and came back to India on a mission.</span>
                        </div>
                    </section>
                </div>

                <div className='join-us-container'>
                    <div className='join-us'>
                        <img src={team} alt='Team' />
                        <section className='join'>
                            <p>Change the world with us</p>
                            <button onClick={() => navigate('/donate')} className='btn btn-success'>Donate Now</button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;
