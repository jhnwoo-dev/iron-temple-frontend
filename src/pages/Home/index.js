import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';

export const Home = () => {
	return (
		<section id="home">
			<div id="home-left">
				<h1 id="new-standard">The New Standard</h1>
				<button className="glow-btn" id="join-btn">
					JOIN NOW
				</button>
			</div>
			<div id="home-right">
				<img id="home-logo" src={logo}></img>
			</div>
		</section>
	);
};

export default Home;
