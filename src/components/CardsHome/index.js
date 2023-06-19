import React from 'react';
import './style.css';

export const CardsHome = (props) => {
	return (
		<section className={props.cardStyle}>
			<h1>{props.title}</h1>
			<button onClick={props.handleActiveState}>expand</button>
		</section>
	);
};
export default CardsHome;
