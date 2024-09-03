import React, { useEffect, useState } from "react";

const FormComponent = () => {
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	useEffect(() => {
		const handleFormSubmit = () => {
			setShowAlert(true);
			setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
		};

		window.addEventListener("vismeFormSubmit", handleFormSubmit);

		return () => {
			window.removeEventListener("vismeFormSubmit", handleFormSubmit);
		};
	}, []);

	return (
		<>
			{showAlert && (
				<div className="fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center">
					Form submitted successfully!
				</div>
			)}
			<div
				className="visme_d"
				data-title="Simple Newsletter Subscription"
				data-url="017rdve1-simple-newsletter-subscription"
				data-domain="forms"
				data-full-page="false"
				data-min-height="500px"
				data-form-id="90908"
			></div>
		</>
	);
};

export default FormComponent;
