import './CreateEvent.css';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CreateEvent = ({ event }) => {
    return (
        <figure className="event">
            <h5>{event.name}, {event.year}</h5>
            <img src={event.image} alt={event.name} />
            <figcaption>
                <div><h2><span>{event.name}</span> in {event.state}</h2></div>
                <div><p>In the year of {event.year}, <Wrapper>{event.name}</Wrapper> programme goes through in the <Wrapper>{event.district}</Wrapper> district, <Wrapper>{event.state}</Wrapper>, India. <br /> <Link to={'/our-work'}>Read More...</Link></p></div>
            </figcaption>
        </figure>
    )
}
const Wrapper = styled.strong`
    font-weight: bold;
`
export default CreateEvent;
