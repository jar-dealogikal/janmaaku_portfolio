import React from "react";
import { products } from "../data/data";

const RecentProjectComp = () => {
	const showLiveHandler = (id) => {
		alert(`Project ID: ${id} - Coming Soon!`);
	};

	return (
		<>
			{/* My recent projects */}
			<div className="items-center mt-20 py-20" id="project">
				<h1 className="text-5xl font-bold text-white text-center">
					A small selection of{" "}
					<span className="text-[#35c1db]">recent projects</span>
				</h1>
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
						{products.map((product) => (
							<div
								key={product.id}
								className="group relative flex flex-col overflow-hidden rounded-lg bg-gray-900/30 shadow-lg shadow-[#35c1db]"
							>
								<div className="aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-96">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="h-full w-full object-cover object-center sm:h-full sm:w-full"
									/>
								</div>
								<div className="flex flex-1 flex-col space-y-2 p-4">
									<h3 className="text-xl font-medium text-[#35c1db]">
										<span aria-hidden="true" className="absolute inset-0" />
										{product.title}
									</h3>
									<p className="text-sm text-gray-300">{product.description}</p>
									<div className="flex justify-between py-2 items-center">
										<div className="isolate flex -space-x-1 py-2 justify-start">
											{product.avatars.map((avatar, index) => (
												<img
													key={index}
													alt={`Avatar ${index + 1}`}
													src={avatar}
													className={`relative z-${
														30 - index * 10
													} inline-block h-6 w-6 rounded-full ring-2 ring-gray-700/10`}
												/>
											))}
										</div>
										<button
											className="text-[#35c1db] cursor-pointer z-50"
											onClick={() => showLiveHandler(product.id)}
										>
											Show Live
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default RecentProjectComp;
