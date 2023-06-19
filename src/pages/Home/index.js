import React from 'react'
import './style.css'
import CardsHome from '../../components/CardsHome'

export const Home = () => {
    return (
        <section class="page">
            <section id="home-card-container">
                <CardsHome />
                <CardsHome />
                <CardsHome />
            </section>
        </section>
    )
}

export default Home;
