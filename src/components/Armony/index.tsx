"use client"

import React, { useRef, useEffect, useState } from "react"

import Canvas from "../Canvas"

import useWindowSize from "../../hooks/useWindowSize"

const Armony = () => {
	const windowSize = useWindowSize()
	const ref = useRef<HTMLDivElement>(null)
	const [canvasSize, setCanvasSize] = useState({
		height: 0,
		width: 0,
	})

	useEffect(() => {
		if (ref.current) {
			setCanvasSize({
				width: ref.current.clientWidth,
				height: ref.current.clientHeight,
			})
		}
	}, [windowSize])

	return (
		<section
			className="flex px-4 sm:px-7 justify-center"
			id="armony-of-the-stars"
		>
			<div
				className="border-solid border-t-0 border-2 border-sky-500 rounded-b-xl container h-80 sm:h-96 lg:h-[30rem] xl:h-[33rem] w-96 sm:w-2/3 md:w-3/5 lg:w-4/6 shadow-2xl shadow-sky-800"
				ref={ref}
			>
				<Canvas {...canvasSize} />
			</div>
		</section>
	)
}

export default Armony
