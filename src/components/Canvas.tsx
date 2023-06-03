"use clinet"

import React, { useRef, useEffect, useState, LegacyRef } from "react"

interface Props {
	width: number
	height: number
	ref: LegacyRef<HTMLCanvasElement> | undefined
}

const Canvas = ({ height, width, ref }: Props) => {
	// const [soundEnabled, setSoundEnabled] = useState(false) // User still must interact with screen first
	// const [pulseEnabled, setPulseEnabled] = useState(false) // Pulse will only show if sound is enabled as well

	// const rings = Array(21).fill("#A6C48A")

	// const settings = {
	// 	startTime: new Date().getTime(), // This can be in the future
	// 	duration: 900, // Total time for all dots to realign at the starting point
	// 	maxCycles: Math.max(rings.length, 100), // Must be above colors.length or else...
	// 	instrument: "vibraphone", // "default" | "wave" | "vibraphone"
	// }

	// useEffect(() => {
	// 	if (canvasRef.current) {
	// 		const canvas: HTMLCanvasElement = canvasRef.current
	// 		const context = canvas.getContext("2d")

	// 		//draw
	// 	}
	// }, [canvasRef])

	return <canvas ref={ref} height={height} width={width} />
}

export default Canvas
