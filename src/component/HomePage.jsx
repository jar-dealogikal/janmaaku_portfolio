import React, { useEffect, useState } from 'react'
import MainConsoleLayout from './template/MainConsoleLayout/MainConsoleLayout'
import { motion } from 'framer-motion';
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";


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
  
  const [copied, setCopied] = useState(false);
	const myTechs = [
		"React.JS",
		"AWS",
		"Typescript",
		"Figma",
		"Cloudinary",
		"PostreSQL",
		"MySQL",
		"Laravel",
	];

  const handleCopy = () => {
		navigator.clipboard.writeText("janmaakurubio14@gmail.com");

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 1000);
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
          
          {/* grid section */}
          <div
						id="about"
						className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-white md:mx-16 md:mt-44 mt-10"
					>
						{/* Left column */}
						<div className="relative">
							<img
								src="https://res.cloudinary.com/dqig7qaz7/image/upload/v1724292994/my_portfolio/profile/b1_c0ikr4.svg"
								alt="Laptop showing Earth"
								className="w-full h-[30rem] rounded-lg"
							/>
							<div className="absolute md:bottom-4 left-11 bottom-10">
								<h2 className="text-lg md:text-2xl font-bold">
									I prioritize client collaboration, fostering open
									communication
								</h2>
							</div>
						</div>

						{/* Right column */}
						<div className="space-y-4">
							{/* Time zone section */}
							<div className="bg-[#0e303e] p-4 rounded-lg relative h-44">
								<h2 className="text-2xl font-semibold absolute inset-0 flex ml-5 items-center justify-center text-[#74dbec]">
									I'm very flexible with time zone communications
								</h2>
								{/* Add globe icon here if needed */}
							</div>

							{/* Tech stack section */}
							<div className="bg-[#bcfbff] p-4 rounded-lg relative h-72 flex flex-col justify-center">
								<div className="flex flex-col md:flex-row justify-between px-8 items-center w-full">
									<div className="text-center md:text-left mb-4 md:mb-0">
										<p className="text-base text-[#74dbec]">
											I constantly try to improve
										</p>
										<h2 className="text-4xl font-semibold text-indigo-900">
											My tech stack
										</h2>
									</div>
									<div className="grid grid-cols-2 gap-10 ml-10">
										{myTechs.map((tech, index) => (
											<span
												key={index}
												className="bg-[#0e303e] px-4 py-1 rounded-full text-sm text-center"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-white md:mx-16">
						{/* Right column */}
						<div className="space-y-4">
							{/* Time zone section */}
							<div
								className="p-4 rounded-lg relative h-44 lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 text-center bg-[#10132E]"
							>
								<h2 className="text-2xl md:text-5xl font-semibold absolute inset-0 flex items-center justify-center text-[#74dbec]">
									Tech enthusiast with a passion for development
								</h2>
								{/* Add globe icon here if needed */}
							</div>

							{/* Tech stack section */}
							<div className="bg-gray-700/20 p-4 rounded-lg relative h-72 flex flex-col justify-center overflow-hidden">
								<img
									src="https://res.cloudinary.com/dqig7qaz7/image/upload/v1724292986/my_portfolio/profile/bg_l6owit.png"
									alt="Background"
									className="w-full h-full object-cover absolute inset-0"
								/>
								<div className="flex flex-col justify-center items-center w-full h-full absolute inset-0 text-center content-center">
									<div className="mb-4">
										<p className="text-[#adebf4]">
											I constantly try to improve
										</p>
										<h2 className="text-5xl font-semibold text-[#1884a2]">
											My tech stack
										</h2>
									</div>

									<button
										className="relative flex px-16 gap-2 h-[3.5em] items-center border-3 border-[#149CEA] border-r-[#1884a2] outline-none bg-transparent text-white transition-all duration-1000 rounded-sm font-bold cursor-pointer hover:shadow-inner hover:shadow-[#1479EA] button-custom"
										onClick={handleCopy}
									>
										{copied ? "Email is Copied!" : "Copy my email address"}
										<PaperAirplaneIcon className="h-6 w-6 -rotate-12" />
									</button>
								</div>
							</div>
						</div>

						{/* Left column */}
						<div className="relative items-center overflow-hidden bg-gray-700/15 rounded-lg">
							<img
								src="https://res.cloudinary.com/dqig7qaz7/image/upload/v1724292991/my_portfolio/profile/b5_lnfee1.svg"
								alt="Laptop showing Earth"
								className="w-full h-[30rem] rounded-lg translate-y-52 translate-x-32"
							/>
							<div className="absolute bottom-48 left-14 px-10">
								<p>The Inside Scoop</p>
								<h2 className="text-xl md:text-4xl font-bold text-[#189eb9]">
									Currently building a Dealogikal using ReactJS
								</h2>
							</div>
						</div>
					</div>
        </>
      }
    />
  )
}

export default HomePage