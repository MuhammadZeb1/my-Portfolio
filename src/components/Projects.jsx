import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="E-Commerce Platform"
          desc="Full MERN stack app with payment integration."
          tech="React • Node • MongoDB • Stripe"
        />

        <ProjectCard
          title="Social Analytics Dashboard"
          desc="AI-powered dashboard to analyze social media engagement."
          tech="React • Express • Charts"
        />
      </div>
    </section>
  );
}
