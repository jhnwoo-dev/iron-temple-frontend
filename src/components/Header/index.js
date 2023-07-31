import React from 'react';
import Navigation from '../Navigation';
import './style.css';

export const Header = () => {
	return (
		<header className="header-container">
			<a href="#home">Iron Temple Logo</a>
			<Navigation />
		</header>
	);
};

export default Header;
