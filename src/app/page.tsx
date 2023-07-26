import { JSX } from "react"

import Armony from "@/components/Armony"
import ActivateSound from "@/components/ActivateSound"

export default function Home(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col relative">
			<Armony />
			<ActivateSound />
		</main>
	)
}
