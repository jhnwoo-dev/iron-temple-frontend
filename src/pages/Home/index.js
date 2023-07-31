import React from 'react';
import logo from '../../assets/images/Iron-temple-PNG-with-border.png';
import './style.css';

export const Home = () => {
	return (
		<section id="home">
			<img id="home-logo" src={logo} alt="iron temple logo"></img>
		</section>
	);
};

export default Home;
