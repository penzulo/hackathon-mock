import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FlowSteps } from "@/components/layout/FlowSteps";
import { PROJECT_STEPS, PROJECTS } from "@/lib/tradeDefs";

export const Route = createFileRoute("/project/$projectId/review")({
	component: ProjectReviewScreen,
});

function ProjectReviewScreen() {
	const { projectId } = Route.useParams();
	const navigate = useNavigate();
	const project = PROJECTS.find((p) => p.id === projectId);

	if (!project) return <div>Project not found</div>;

	// Render exactly like the original ProjectReviewScreen here...

	return (
		<>
			<FlowSteps steps={PROJECT_STEPS} current={2} />
			<div className="page">{/* Review Cards UI */}</div>
			<div className="action-bar">
				<span className="ab-left">{project.rfqId} · Unified Project RFQ</span>
				<div className="ab-right">
					<button
						type="button"
						className="btn btn-ghost"
						onClick={() =>
							navigate({
								to: "/project/$projectId",
								params: { projectId: project.id },
							})
						}
					>
						← Edit Templates
					</button>
					<button
						type="button"
						className="btn btn-green"
						onClick={() =>
							navigate({
								to: "/project/$projectId/quotes",
								params: { projectId: project.id },
							})
						}
					>
						📡 Broadcast Project RFQ →
					</button>
				</div>
			</div>
		</>
	);
}
