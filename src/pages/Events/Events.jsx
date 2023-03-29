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
    useEffect(()=>{
        setNonactive(false);
    },[])
    return(
        <div className={`events-container`}>
            <h1 className={`heading ${nonactive ? 'nonactive-heading' : ''}`}>Our Events</h1>

            <div className='upcoming-event'>
                <h1>THE HEALTHIER</h1>
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