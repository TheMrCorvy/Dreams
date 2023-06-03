import { useLayoutEffect, useState } from "react"

type WindowWidth = number
type WindowHeight = number

const useWindowSize = (): [WindowWidth, WindowHeight] => {
	const [size, setSize] = useState<[WindowWidth, WindowHeight]>([0, 0])

	useLayoutEffect(() => {
		const updateSize = () => {
			setSize([window.innerWidth, window.innerHeight])
		}

		window.addEventListener("resize", updateSize)
		updateSize()

		return () => window.removeEventListener("resize", updateSize)
	}, [])

	return size
}

export default useWindowSize
