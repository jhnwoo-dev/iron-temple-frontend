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
			{button}
		</section>
	);
};
export default CardsHome;
