import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/calculator")({
	component: Calculator,
});

function Calculator() {
	return <p>Placeholder for the calculator page.</p>;
}
