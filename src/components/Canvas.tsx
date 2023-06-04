"use clinet"

import React, { useRef, useEffect } from "react"

interface Props {
	width: number
	height: number
}

const Canvas = ({ height, width }: Props) => {
	const paper = useRef<HTMLCanvasElement>(null)

	const draw = () => {
		const pen = paper.current?.getContext("2d")

		if (!pen || paper.current === null) return

		const start = {
			x: paper.current.width * 0.1,
			y: paper.current.height * 0.5,
		}

		const end = {
			x: paper.current.width * 0.9,
			y: paper.current.height * 0.5,
		}

		pen.strokeStyle = "white"
		pen.lineWidth = 2

		pen.beginPath()
		pen.moveTo(start.x, start.y)
		pen.lineTo(end.x, end.y)
		pen.stroke()
	}

	useEffect(() => {
		if (paper.current) {
			draw()
		}
	}, [height, width])

	return <canvas ref={paper} height={height} width={width} />
}

export default Canvas
