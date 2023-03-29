import './Donate.css';
import React, { useState } from 'react';
import PaymentMethod from '../../components/Payment Method/PaymentMethod';
import PayAmount from '../../components/Pay Amount/PayAmount';
import { FaHandHoldingWater } from 'react-icons/fa';
import {BsEnvelopePaperHeart} from 'react-icons/bs';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { FaMoneyCheck } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import {GrBitcoin} from 'react-icons/gr';

const Donate= ()=>{
    const [activePayAmount, setActivePayAmount] = useState(true);
    const [amount, setAmount] = useState();

    return(
        <div className='donate-container'>
            <section className='image'>
                <div className='donate'>
                    {
                        activePayAmount ? <PayAmount setActivePayAmount={setActivePayAmount} setAmount={setAmount} /> :
                        <PaymentMethod setActivePayAmount={setActivePayAmount} amount={amount} />
                    }
                    <p className='note'>Note: All funds raised by CHARITY WATER FOR INDIANS may be pooled together and allocated towards clean water, decent toilets and good hygiene initiatives across India, wherever the need is the greatest. Kindly note that the above examples are for descriptive purposes only. They indicate the impact that your donation can bring about in the lives of entire families, including women and children.</p>
                </div>
            </section>
            <div className='other-donate'>
                <div className='water'>
                    <span><FaHandHoldingWater/></span>
                    <h4>Sponsor a water project</h4>
                    <p>Transform an entire community or school with a gift of ₹1,000,000 or more.</p>
                    <a href="#">Learn More</a>
                </div>

                <div className='special'>
                    <span><BsEnvelopePaperHeart/></span>
                    <h4>Honor someone special</h4>
                    <p>Honor or remember someone special by making a gift in their name.</p>
                    <a href="#">Give in honor of someone</a>
                </div>

                <div className='legacy'>
                    <span><MdOutlineFamilyRestroom/></span>
                    <h4>Legacy Giving</h4>
                    <p>Join us in shaping the future and making clean water a part of your lasting legacy.</p>
                    <a href="#">Learn More</a>
                </div>

                <div className='check'>
                    <span><FaMoneyCheck/></span>
                    <h4>Give by check or stock</h4>
                    <p>We also accept donations by check, stock, money order, and wire transfer.</p>
                    <a href="#">Learn More</a>
                </div>

                <div className='cryptocurrency'>
                    <span><GiWallet/></span>
                    <h4>Donate with cryptocurrency</h4>
                    <p>We currently accept bitcoin, ether, litecoin, bitcoin cash, Zcash, filecoin, and dogecoin.</p>
                    <a href="#">Learn More</a>
                </div>

                <div className='bitcoin'>
                    <span><GrBitcoin/></span>
                    <h4>Give to the Bitcoin Water Trust</h4>
                    <p>Our exponential growth fund will hold all donated bitcoins until at least 2025.</p>
                    <a href="#">Learn More</a>
                </div>

            </div>
        </div>
    )
}
export default Donate;