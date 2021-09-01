import React from "react";
import css from 'components/Statistic/Statistic.module.css';

export default class Statistic extends React.Component {
	handleGood = e => {
		console.log("Good");
	};

	handleNeutral = e => {
		console.log("Neutral");
	};

	handleBad = e => {
		console.log("Bad");
	};

	render() {
		return (
			<div className={css.Statistic}>
				<h2>Please leave feedback</h2>
				<div>
					<button className={css.feedbackBtn}>
						Good
					</button>
					<button className={css.feedbackBtn}>
						Neutral
					</button>
					<button className={css.feedbackBtn}>
						Bad
					</button>
				</div>

				<h2>Statistic</h2>
				<div>
					<p className={css.feedbackCounter}>Good:</p>
					<p className={css.feedbackCounter}>Neutral:</p>
					<p className={css.feedbackCounter}>Bad</p>
				</div>
			</div>
		);
	}
};
