import React from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ParallaxSectionComponent = ({ children, className }) => {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.1 });
	const isMobile = useMediaQuery({ maxWidth: 768 });

	const variants = {
		hidden: { opacity: 0, y: isMobile ? 20 : 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.section
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.section>
	);
};

export default ParallaxSectionComponent;
