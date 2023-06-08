"use client"

import React, { useEffect, FC, useState, useCallback } from "react"

interface Props {
	ringRadius: number
}

const startTime = new Date().getTime()

const Ring: FC<Props> = ({ ringRadius }) => {
	const [currentAngle, setCurrentAngle] = useState(Math.PI)

	const calcAngle = useCallback(() => {
		const currentTime = new Date().getTime()
		const elapsedTime = (currentTime - startTime) / 1000
		const velocity = 0.5

		setCurrentAngle(Math.PI + elapsedTime * velocity)

		// This will cal the function calcAngle every time the
		// monitor refreshes, thus updating the state and re-rendering the component.
		requestAnimationFrame(calcAngle)
	}, [])

	useEffect(() => {
		calcAngle()
	}, [calcAngle])

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid meet"
			className="absolute top-0"
		>
			<g>
				<circle
					className="ring"
					fill="none"
					stroke="white"
					strokeWidth={0.25}
					cx="50"
					cy="50"
					r={ringRadius}
				></circle>
			</g>
			<g>
				<circle
					className="dot"
					fill="white"
					r="0.85"
					cx={50 + ringRadius * Math.cos(currentAngle)}
					cy={50 + ringRadius * Math.sin(currentAngle)}
				></circle>
			</g>
		</svg>
	)
}

export default Ring
