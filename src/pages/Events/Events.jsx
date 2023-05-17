import './Events.css';
import React, { useEffect, useState } from 'react';
import CreateEvent from '../../components/Create Event/CreateEvent';
import event1 from '../../images/events/event1.jpg';
import event2 from '../../images/events/event2.jpg';
import event3 from '../../images/events/event3.jpg';
import event4 from '../../images/events/event4.jpg';
import event5 from '../../images/events/event5.jpg';
import event6 from '../../images/events/event6.jpg';
import event7 from '../../images/events/event7.jpg';
import event8 from '../../images/events/event8.jpg';
import image1 from '../../images/drink-water.png';
import image2 from '../../images/share-water.jpg';
import image3 from '../../images/water-boy-smile.jpg';

import { getTimeRemaining } from './timer';

const eventsList = [
    {
        id: 1,
        name: 'Swachhata',
        state: 'Gujarat',
        district: 'Kutch',
        year: 2022,
        image: event1,
    },
    {
        id: 2,
        name: 'Tubewell',
        state: 'West Bengal',
        district: 'Purulia',
        year: 2021,
        image: event2,
    },
    {
        id: 3,
        name: 'Drink India',
        state: 'Uttar Pradesh',
        district: 'Banda',
        year: 2019,
        image: event3,
    },
    {
        id: 4,
        name: 'Ground Clean',
        state: 'Jharkhand',
        district: 'Garhwa',
        year: 2017,
        image: event4,
    },
    {
        id: 5,
        name: 'Safe Drink',
        state: 'Maharashtra',
        district: 'Jalna',
        year: 2017,
        image: event5,
    },
    {
        id: 6,
        name: 'Life: WATER',
        state: 'Karnataka',
        district: 'Kolar',
        year: 2016,
        image: event6,
    },
    {
        id: 7,
        name: 'Awareness Rain',
        state: 'Delhi',
        district: 'Malviya Nagar',
        year: 2015,
        image: event7,
    },
    {
        id: 8,
        name: 'Shiksha',
        state: 'Rajasthan',
        district: 'Jaisalmer',
        year: 2014,
        image: event8,
    },
]

const Events= ()=>{
    const [nonactive, setNonactive] = useState(true);
    const [color, setColor] = useState('');
    const [remainingTime, setRemainingTime] = useState(getTimeRemaining());

    useEffect(()=>{
        setNonactive(false);

        let eventTimerInerval = setInterval(()=>{
            let random1 = Math.floor(Math.random() * 256)
            let random2 = Math.floor(Math.random() * 256)
            let random3 = Math.floor(Math.random() * 256)
            setColor(`rgb(${random1}, ${random2}, ${random3})`);

            const leftTime = getTimeRemaining()
            setRemainingTime(leftTime);
            console.log('event timmer running');

            if(leftTime.days <= 0 && leftTime.hours <= 0 && leftTime.minutes <= 0 && leftTime.seconds <= 0 ){
                console.log('Event Remaining Time Is Ended.');
                setColor('');
                clearInterval(eventTimerInerval);
            }

        },1000)

        return ()=>{
            console.log('event timmer paused');
            clearInterval(eventTimerInerval);
        }
    },[])
    
    return(
        <div className={`events-container`}>
            <h1 className={`heading ${nonactive ? 'nonactive-heading' : ''}`}>Our Events</h1>

            <div className={`upcoming-event ${nonactive ? 'nonactive-upcoming-events' : ''}`}>
                <section className='upcoming-heading'>
                    <h2>HEALTH:WATER</h2>
                    <span>on 7th April, 2024</span>
                </section>
                <p>on the occasion of World Health Day</p>
                <div className='images'>
                    <img id='image1' src={image1} alt="Girl Drink Water" />
                    <img id='image2' src={image2} alt="Sharing Water" />
                    <img id='image3' src={image3} alt="Boy with Water" />
                </div>
                <div className='timer'>
                    <strong id='days'>DAYS: <span>{remainingTime.days}</span></strong>
                    <strong id='hours'>HOURS: <span>{remainingTime.hours}</span></strong>
                    <strong id='minutes'>MINUTES: <span>{remainingTime.minutes}</span></strong>
                    <strong id='seconds'>SECONDS: <span style={{color: color}}>{remainingTime.seconds}</span></strong>
                </div>
            </div>

            <div className={`events ${nonactive ? 'nonactive-events' : ''}`}>
                {
                    eventsList.map((event)=>(
                        <CreateEvent key={event.id} event={event} />
                    ))
                }
            </div>
        </div>
    )
}

export default Events;
