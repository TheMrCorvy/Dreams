import React, { FC } from "react"

import styles from "./Ring.module.css"

interface Props {
	diameter: number
	time: number
}

const Ring: FC<Props> = ({ diameter, time }) => {
	return (
		<span
			className={styles.ring}
			style={{
				width: `${diameter}%`,
				height: `${diameter}%`,
				top: `calc(50% - ${diameter / 2}%)`,
				left: `calc(50% - ${diameter / 2}%)`,
				animation: `spin ${time}s linear infinite`,
			}}
		>
			<div className={styles.circle}></div>
		</span>
	)
}

export default Ring
