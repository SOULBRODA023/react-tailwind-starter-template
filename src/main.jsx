import React from "react";
import { createRoot } from "react-dom/client"; // Import from react-dom/client
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import App from "./App"; // Import your main App component

const root = createRoot(document.getElementById("root")); // Use createRoot

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
);
