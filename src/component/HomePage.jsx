import React, { useEffect, useState } from 'react'
import MainConsoleLayout from './template/MainConsoleLayout/MainConsoleLayout'
import { motion } from 'framer-motion';

function TypingEffect({ text, speed = 100 }) {
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + text[index]);
				setIndex(index + 1);
			}, speed);
			return () => clearTimeout(timeout);
		}
	}, [index, text, speed]);

	return (
		<motion.h1
			className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2, ease: "easeIn" }}
		>
			{displayedText}
		</motion.h1>
	);
}


const HomePage = () => {
  const scrollToSection = (id) => {
		const section = document.querySelector(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
  };
  
  return (
    <MainConsoleLayout
      content={
        <>
         <div
						aria-hidden="true"
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						/>
					</div>

					<div className="py-24 sm:py-32 lg:pb-4">
						<div
							className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-center
             items-center"
						>
							<div className="mx-auto max-w-2xl text-start mt-20">
								<TypingEffect
									text="I'm Janm Arch Rubio"
									speed={100} // Adjust speed as needed
								/>
								<motion.p
									className="mt-6 text-lg leading-8 text-gray-300"
									initial={{ x: "-100%" }}
									animate={{ x: 0 }}
									transition={{ duration: 0.5, ease: "easeOut" }}
								>
									Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
									qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
									occaecat fugiat aliqua.
								</motion.p>
								<div className="mt-10 flex items-center gap-x-6">
									<a
										href="#/"
										onClick={() => scrollToSection("#contact")}
										className="rounded-md bg-[#35c1db] px-10 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-[#adebf4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#adebf4] hover:cursor-pointer"
									>
										Contact Me
									</a>
									<a
										href="#proejct"
										onClick={() => scrollToSection("#project")}
										className="text-sm font-semibold leading-6 text-[#35c1db] hover:cursor-pointer hover:text-[#adebf4] "
									>
										Show my projects <span aria-hidden="true">→</span>
									</a>
								</div>
							</div>
							<div className="border-4 border-gray-400 p-4 sm:p-10 md:p-14 rounded-full hover:scale-110 transform transition-transform duration-300 w-72 sm:w-64 md:w-80 lg:w-96 mt-10 md:mt-0">
								<img
									className="rounded-full border w-full bg-gradient-to-r from-white to-none border-t-gray-200"
									src="https://res.cloudinary.com/dqig7qaz7/image/upload/v1707281587/my_portfolio/profile/img_1_vpbkjy.png"
									title="portfolio"
									alt="portfolio"
								/>
							</div>
						</div>
					</div>
					<div
						aria-hidden="true"
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						/>
					</div>
        </>
      }
    />
  )
}

export default HomePage