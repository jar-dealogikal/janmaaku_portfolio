export default function TableComponent({ tableData, clickHandler }) {
	return (
		<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
			<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
				{tableData.map((item) => (
					<div
						key={item.id}
						className="group relative flex flex-col overflow-hidden rounded-lg bg-gray-900/30 shadow-lg shadow-[#35c1db]"
					>
						<div className="aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-64">
							<img
								alt={item.imageAlt}
								src={item.imageSrc}
								className="h-full w-full object-fit object-center sm:h-full sm:w-full"
							/>
						</div>
						<div className="flex flex-1 flex-col space-y-2 p-4">
							<h3 className="text-xl font-medium text-[#35c1db]">
								<span aria-hidden="true" className="absolute inset-0" />
								{item.title}
							</h3>
							<p className="text-sm text-gray-300">{item.description}</p>
							<div className="flex justify-between py-2 items-center">
								<div className="isolate flex -space-x-1 py-2 justify-start">
									{item.avatars.map((avatar, index) => (
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
									onClick={() => clickHandler(item.id)}
								>
									Show Live
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
