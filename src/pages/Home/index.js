import React, { useEffect, useState } from 'react';
import CardsHome from '../../components/CardsHome';
import './style.css';

export const Home = () => {
    const [aboutStyle, setAboutStyle] = useState('default-card');
    const [communityStyle, setCommunityStyle] = useState('default-card');
    const [calendarStyle, setCalendarStyle] = useState('default-card');

    const handleClose = (e) => {
        setAboutStyle('default-card');
        setCommunityStyle('default-card');
        setCalendarStyle('default-card');

        // e.target.innerHTML = "expand"
    }

    const handleActiveState = (e) => {
        console.log(e.target.innerHTML);

        if (e.target.innerHTML !== "close") {
            if (e.target.value === "about") {
                setAboutStyle('active-card');
                setCommunityStyle('nonactive-card');
                setCalendarStyle('nonactive-card');
            }
            else if (e.target.value === "community") {
                setCommunityStyle('active-card');
                setAboutStyle('nonactive-card');
                setCalendarStyle('nonactive-card');
            }
            else {
                setCalendarStyle('active-card');
                setCommunityStyle('nonactive-card');
                setAboutStyle('nonactive-card');
            }
        }
        e.target.innerHTML = "close"
        e.target.addEventListener("click", handleClose)
    };


    return (
        <section className="page">
            <section id="home-card-container">
                <CardsHome
                    title="about"
                    cardStyle={aboutStyle}
                    handleActiveState={handleActiveState}
                />
                <CardsHome
                    title="community"
                    cardStyle={communityStyle}
                    handleActiveState={handleActiveState}
                />
                <CardsHome
                    title="calendar"
                    cardStyle={calendarStyle}
                    handleActiveState={handleActiveState}
                />
            </section>
        </section>
    );
};

export default Home;
