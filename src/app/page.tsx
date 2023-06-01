import { JSX } from "react"

import Canvas from "../components/Canvas"

export default function Home(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col relative">
			<section
				className="flex px-4 sm:px-7 justify-center"
				id="armony-of-the-stars"
			>
				<div className="border-solid border-t-0 border-2 border-sky-500 rounded-b-xl container h-80 sm:h-96 lg:h-[30rem] xl:h-[33rem] w-96 sm:w-2/3 md:w-3/5 lg:w-4/6 shadow-2xl shadow-sky-800">
					<Canvas height={120} width={120} />
				</div>
			</section>
		</main>
	)
}
