"use client"

import React, { useEffect, useRef } from "react"

const Ring: React.FC = () => {
	const ringsContainerRef = useRef<SVGGElement | null>(null)
	const dotsContainerRef = useRef<SVGGElement | null>(null)

	useEffect(() => {
		const numRings = 21 // Number of rings
		const ringRadius = 1 // Initial ring radius
		const ringDistance = 3 // Distance between rings
		const dotRadius = 0.85 // Dot radius

		for (let i = 0; i < numRings; i++) {
			const currentRadius = ringRadius + i * 0.8 * ringDistance
			const dotAngle = Math.PI

			// Create the ring
			const ring = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"circle"
			)
			ring.setAttribute("class", "ring")
			ring.setAttribute("cx", "50")
			ring.setAttribute("cy", "50")
			ring.setAttribute("style", "stroke-width: 0.25;")
			ring.setAttribute("r", String(currentRadius))
			ringsContainerRef.current?.appendChild(ring)

			// Create the dot
			const dot = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"circle"
			)
			dot.setAttribute("class", "dot")
			dot.setAttribute(
				"cx",
				String(50 + currentRadius * Math.cos(dotAngle))
			)
			dot.setAttribute("style", "stroke-width: 0.25;")
			dot.setAttribute(
				"cy",
				String(50 + currentRadius * Math.sin(dotAngle))
			)
			dot.setAttribute("r", String(dotRadius))
			dotsContainerRef.current?.appendChild(dot)
		}
	}, [])

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid meet"
		>
			<style>
				{`
          .ring {
            fill: none;
            stroke: #ffffff;
            stroke-width: 2;
          }

          .dot {
            fill: #ffffff;
          }
        `}
			</style>
			<g ref={ringsContainerRef}></g>
			<g ref={dotsContainerRef}></g>
		</svg>
	)
}

export default Ring
