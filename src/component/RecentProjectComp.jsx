import React, { useState, useEffect } from "react";
import { mobile_app, websites } from "../data/data";
import { motion, useInView } from "framer-motion";
import NavTabComponent from "./template/NavTabComponent/NavTabComponent";
import TableComponent from "./template/TableComponent/TableComponent";
import ParallaxSectionComponent from "./template/ParallaxComponent/ParallaxSectionComponent";

const RecentProjectComp = () => {
	const [activeTab, setActiveTab] = useState("Website");

	const showLiveHandler = (id) => {
		alert(`Project ID: ${id} - Coming Soon!`);
	};

	const nav_items = [
		{
			text: "Website",
		},
		{
			text: "Mobile Application",
		},
		{
			text: "Games",
		},
	];

	function TypingEffect({ text, speed = 50, highlightedText }) {
		const [displayedText, setDisplayedText] = useState("");
		const [index, setIndex] = useState(0);
		const ref = React.useRef(null);
		const isInView = useInView(ref, { once: false });

		useEffect(() => {
			if (isInView) {
				setDisplayedText("");
				setIndex(0);
			}
		}, [isInView]);

		useEffect(() => {
			if (isInView && index < text.length) {
				const timeout = setTimeout(() => {
					setDisplayedText((prev) => prev + text[index]);
					setIndex(index + 1);
				}, speed);
				return () => clearTimeout(timeout);
			}
		}, [index, text, speed, isInView]);

		return (
			<motion.h1
				ref={ref}
				className="text-3xl lg:text-5xl font-bold text-white text-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2, ease: "easeIn" }}
			>
				{displayedText}
				{index === text.length && (
					<span className="text-[#35c1db]"> {highlightedText}</span>
				)}
			</motion.h1>
		);
	}

	return (
		<>
			{/* My recent projects */}
			<div className="items-center mt-20 py-20" id="project">
				<TypingEffect
					text="A small selection of"
					highlightedText="recent projects"
				/>
				<ParallaxSectionComponent>
					<div className="flex justify-center space-x-4 my-8">
						<NavTabComponent
							key={Math.random()}
							active_tab={activeTab}
							nav_items={nav_items}
							setActiveNavHandler={setActiveTab}
						/>
					</div>

					{activeTab === "Website" && (
						<TableComponent
							tableData={websites}
							clickHandler={showLiveHandler}
						/>
					)}
					{activeTab === "Mobile Application" && (
						<TableComponent
						tableData={mobile_app}
						clickHandler={showLiveHandler}
					/>
					)}
					{activeTab === "Games" && (
						<h1 className="text-[#35c1db] text-center items-center text-xl py-10">
							Coming Soon.....
						</h1>
					)}
				</ParallaxSectionComponent>
			</div>
		</>
	);
};

export default RecentProjectComp;
