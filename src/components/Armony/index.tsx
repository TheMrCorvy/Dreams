"use client"

import React, { useRef, useEffect, useState, FC } from "react"

import useWindowSize from "../../hooks/useWindowSize"
import Ring from "../Ring"

const Armony: FC = () => {
	const [width, height] = useWindowSize()
	const parentRef = useRef<HTMLDivElement>(null)
	const [canvasSize, setCanvasSize] = useState(0)

	useEffect(() => {
		if (parentRef.current) {
			const clientW = parentRef.current.clientWidth
			const clientH = parentRef.current.clientHeight

			const size = clientW <= clientH ? clientW : clientH
			// I want this canvas to be a perfect square

			setCanvasSize(size)
		}
	}, [width, height])

	return (
		<section
			className="flex px-4 sm:px-7 justify-center"
			id="armony-of-the-stars"
			data-testid="armony-of-the-stars"
		>
			<div
				className="border-solid border-t-0 border-2 border-sky-500 rounded-b-xl container h-72 sm:h-96 lg:h-[30rem] xl:h-[33rem] w-96 sm:w-2/3 md:w-3/5 lg:w-4/6 shadow-2xl shadow-sky-800 flex justify-center items-center bg-transparent overflow-hidden"
				ref={parentRef}
			>
				<div
					id="canvas"
					className="relative"
					style={{
						width: canvasSize,
						height: canvasSize,
					}}
				>
					<hr
						className="w-full bg-gray-100 border-0 absolute rounded h-0.5"
						style={{ top: "calc(50% - (0.125rem / 2))" }}
					/>

					{[...Array(21)].map((_, i: number) => (
						<Ring
							key={"armony-of-stars_ring-number:" + i}
							diameter={4.6 * i + 6}
							time={900 / (50 - i)}
							index={i}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Armony
