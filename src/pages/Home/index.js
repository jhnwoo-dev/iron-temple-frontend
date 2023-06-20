import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import CardsHome from '../../components/CardsHome';
import './style.css';

export const Home = () => {
	const [aboutStyle, setAboutStyle] = useState('default-card');
	const [communityStyle, setCommunityStyle] = useState('default-card');
	const [calendarStyle, setCalendarStyle] = useState('default-card');
	const [clickType, setClickType] = useState('expand');

	const handleClose = (e) => {
		setAboutStyle('default-card');
		setCommunityStyle('default-card');
		setCalendarStyle('default-card');
		setClickType('expand');
	};

	const handleSpotlight = (e) => {
		if (e.target.value === 'about') {
			setAboutStyle('active-card');
			setCommunityStyle('nonactive-card');
			setCalendarStyle('nonactive-card');
		} else if (e.target.value === 'community') {
			setCommunityStyle('active-card');
			setAboutStyle('nonactive-card');
			setCalendarStyle('nonactive-card');
		} else {
			setCalendarStyle('active-card');
			setCommunityStyle('nonactive-card');
			setAboutStyle('nonactive-card');
		}
		setClickType('close');
	};

	return (
		<section className="page">
			<section id="home-card-container">
				<CardsHome
					title="about"
					cardStyle={aboutStyle}
					clickType={clickType}
					handleSpotlight={handleSpotlight}
					handleClose={handleClose}
				/>
				<CardsHome
					title="community"
					cardStyle={communityStyle}
					clickType={clickType}
					handleSpotlight={handleSpotlight}
					handleClose={handleClose}
				/>
				<CardsHome
					title="calendar"
					cardStyle={calendarStyle}
					clickType={clickType}
					handleSpotlight={handleSpotlight}
					handleClose={handleClose}
				/>
			</section>
		</section>
	);
};

export default Home;
