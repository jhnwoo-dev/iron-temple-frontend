import React, { useEffect, useState } from 'react';
import CardsHome from '../../components/CardsHome';
import './style.css';

export const Home = () => {
	const [aboutStyle, setAboutStyle] = useState('default-card');
	const [communityStyle, setCommunityStyle] = useState('default-card');
	const [calendarStyle, setCalendarStyle] = useState('default-card');

	const handleActiveState = (e) => {
		console.log(e.target);
		// setAboutStyle('active-card');
		// setCommunityStyle('nonactive-card');
		// setCalendarStyle('nonactive-card');
	};

	return (
		<section class="page">
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
