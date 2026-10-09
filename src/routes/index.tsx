import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <iframe
      title="Drew Dupuy — studio CV and portfolio"
      src="/drew-dupuy-cv.html"
      className="stage"
    />
  );
}
