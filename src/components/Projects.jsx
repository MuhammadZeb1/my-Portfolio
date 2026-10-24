
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "AI Online Examination System",
      desc: "A full-stack AI-powered assessment platform with teacher dashboards, exam codes, automated evaluation, analytics, and intelligent grading workflows using Gemini API for faster and smarter academic review.",
      tech: "MERN Stack | React | Node.js | MongoDB | Gemini API | AI Evaluation",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Journal Management System",
      desc: "An academic journal platform supporting paper submission and peer review. Authors submit manuscripts, administrators assign papers to experts, and reviewers evaluate submissions through a multi-role workflow.",
      tech: "MERN Stack | Role-Based Access | Document Management",
      liveLink: "#",
      githubLink:
        "https://github.com/MuhammadZeb1/journal-management-system",
    },
    {
      title: "Advanced E-commerce Platform",
      desc: "A full-stack multi-vendor e-commerce platform with customer, vendor, and delivery roles. Includes product and order management, secure payment integration, and delivery assignment workflows.",
      tech: "MERN Stack | Stripe | REST APIs | E-commerce",
      liveLink: "#",
      githubLink: "https://github.com/MuhammadZeb1/advanced-ecommerce",
    },
    {
      title: "Smart Tailoring Management System",
      desc: "A desktop application for tailoring businesses with customer records, measurement and order management, invoice generation, printing, filtering, and offline-friendly workflows.",
      tech: "Electron.js | React | Node.js | CRUD | Invoices",
      liveLink: "#",
      githubLink:
        "https://github.com/MuhammadZeb1/tailor-management-system",
    },
    {
      title: "React E-commerce Web App",
      desc: "A React-based shopping application developed during Code Night at SMIT Peshawar, featuring product listings, cart management, and checkout functionality.",
      tech: "React.js | JavaScript | Shopping Cart | UI Development",
      liveLink: "#",
      githubLink:
        "https://github.com/MuhammadZeb1/react-ecommerce-codenight",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-16 px-6"
    >
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Featured Projects
      </h2>

      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        A selection of full-stack applications demonstrating my
        experience in web development, API integration, database
        design, and desktop software.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}
