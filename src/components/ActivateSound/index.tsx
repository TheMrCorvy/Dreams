"use client"

import React, { FC, useState } from "react"

const ActivateSound: FC = () => {
	const [showModal, setShowModal] = useState(true)
	return (
		<>
			{showModal && (
				<div className="fixed z-50 block w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
					<div className="relative w-full max-w-2xl max-h-full">
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
							<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
									Activate Sound Effects?
								</h3>
							</div>
							<div className="p-6 space-y-6">
								<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
									This web app counts with sound effects and
									background music.
								</p>
							</div>
							<div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
								<button
									type="button"
									className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
									onClick={() => setShowModal(false)}
								>
									Deactivate Sounds
								</button>
								<button
									type="button"
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									onClick={() => setShowModal(false)}
								>
									Allow Sounds
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default ActivateSound
