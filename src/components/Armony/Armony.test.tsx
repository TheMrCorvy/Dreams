import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Armony from "."

describe("Component: Armony", () => {
	it("renders properly", () => {
		render(<Armony />)
		const armony = screen.getByTestId("armony-of-the-stars")
		expect(armony).toBeInTheDocument()
	})

	it("renders all the rings properly", () => {
		render(<Armony />)
		const firstRing = screen.getByTestId("ring-" + 0)
		const lastRing = screen.getByTestId("ring-" + 20)
		expect(firstRing).toBeInTheDocument()
		expect(lastRing).toBeInTheDocument()
	})
})
