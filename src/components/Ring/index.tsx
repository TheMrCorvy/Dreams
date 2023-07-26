import React, { FC, useEffect, useState } from "react"

import useSound from "use-sound"
import styles from "./Ring.module.css"

interface Props {
	diameter: number
	time: number
	index: number
}

const Ring: FC<Props> = ({ diameter, time, index }) => {
	const [animate, setAnimate] = useState(false)

	const [starSound] = useSound(`/sounds/armony-of-stars/${index}.wav`, {
		volume: 0.25,
	})

	useEffect(() => {
		if (animate) {
			const interval = setInterval(() => {
				starSound()
			}, (time * 1000) / 2)
			/**
			 * Convert time to milliseconds, and divide it by 2,
			 * because the sound has to play every time that the
			 * ring rotates by a half.
			 */
			return () => clearInterval(interval)
		}
	}, [time, animate])

	useEffect(() => {
		setTimeout(() => {
			setAnimate(true)
		}, 10000)
		/**
		 * Wait until the component is fully rendered so that the
		 * timeout and the animation don't desynchronize with each
		 * other.
		 */
	}, [])

	return (
		<span
			className={styles.ring}
			style={{
				width: `${diameter}%`,
				height: `${diameter}%`,
				top: `calc(50% - ${diameter / 2}%)`,
				left: `calc(50% - ${diameter / 2}%)`,
				animation: animate ? `spin ${time}s linear infinite` : "",
			}}
			data-testid={"ring-" + index}
		>
			<div className={styles.circle}></div>
		</span>
	)
}

export default Ring
