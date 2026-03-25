import { RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "@/router";

const root = document.getElementById("root");

if (!root)
	console.error(
		"Root element not found in index.html. Does the `div` tag exist?",
	);
else {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>,
	);
}
