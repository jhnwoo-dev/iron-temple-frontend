import React, { useEffect, useState } from 'react';
import './style.css';

export const CardsHome = (props) => {
	const [button, setButton] = useState(<></>);

	useEffect(() => {
		if (props.clickType === 'expand') {
			setButton(
				<button onClick={props.handleSpotlight} value={props.title}>
					{props.clickType}
				</button>
			);
		} else {
			setButton(
				<button onClick={props.handleClose} value={props.title}>
					{props.clickType}
				</button>
			);
		}
	}, [props.clickType]);

	return (
		<section className={props.cardStyle + ' all-cards'}>
			<h1>{props.title}</h1>
			{/* <img className="bg-img" src={props.img}></img> */}

			{/*useEffect conditional rendering  */}
			{button}

			{/* CSS Conditional rendering */}

			{/* <button onClick={props.handleSpotlight} value={props.title} className="show">
				expand
			</button>
			<button onClick={props.handleClose} value={props.title} className="hide">
				close
			</button> */}
		</section>
	);
};
export default CardsHome;
