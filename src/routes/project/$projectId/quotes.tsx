import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FlowSteps } from "@/components/layout/FlowSteps";
import { PROJECT_STEPS, PROJECTS } from "@/lib/tradeDefs";

export const Route = createFileRoute("/project/$projectId/quotes")({
	component: ProjectQuotesScreen,
});

function ProjectQuotesScreen() {
	const { projectId } = Route.useParams();
	const navigate = useNavigate();
	const project = PROJECTS.find((p) => p.id === projectId);

	if (!project) return <div>Project not found</div>;

	// Render exactly like the original ProjectQuotesScreen here...

	return (
		<>
			<FlowSteps steps={PROJECT_STEPS} current={3} />
			<div className="page">{/* Quotes Cards UI */}</div>
			<div className="action-bar">
				<span className="ab-left">{project.rfqId} · Project Quotes</span>
				<div className="ab-right">
					<button
						type="button"
						className="btn btn-ghost"
						onClick={() =>
							navigate({
								to: "/project/$projectId/review",
								params: { projectId: project.id },
							})
						}
					>
						← Back to RFQ
					</button>
					<button type="button" className="btn btn-green">
						✅ Accept Best Quote
					</button>
				</div>
			</div>
		</>
	);
}
