import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Journal Management System",
      desc: "Specialized platform for academic paper submission and peer review. Multi-role workflow: Authors upload papers, Admins assign them to Experts, and Experts review papers.",
      tech: "MERN Stack | Multi-role Workflow | Document Management",
      liveLink: "#",
      githubLink: "https://github.com/MuhammadZeb1/journal-management-system"
    },
    // {
    //   title: "Koyzom – Google Indexing Project",
    //   desc: "URL indexing solution to improve search engine visibility. Efficient URL management with seamless frontend/backend integration.",
    //   tech: "MERN Stack | URL Management | SEO Optimization",
    //   liveLink: "#",
    //   githubLink: "https://github.com/MuhammadZeb1/koyzom-indexing"
    // },
    {
      title: "Advanced E-commerce Platform (Final Year Project)",
      desc: "Full-stack MERN platform with on-demand delivery and multi-role management (Vendor, Customer, Delivery Boy). Integrated order management, secure payments, and dynamic delivery assignment.",
      tech: "MERN Stack | E-commerce | Stripe Payments | Delivery Management",
      liveLink: "#",
      githubLink: "https://github.com/MuhammadZeb1/advanced-ecommerce"
    },
    {
      title: "React E-commerce Web App – Code Night SMIT Peshawar",
      desc: "React JS e-commerce site built during Code Night at SMIT Peshawar. Features product listing, add-to-cart, and checkout functionality.",
      tech: "React JS | E-commerce | Cart Management | Checkout",
      liveLink: "#",
      githubLink: "https://github.com/MuhammadZeb1/react-ecommerce-codenight"
    },
    {
      title: "Tailor Management System",
      desc: "Desktop app for tailor shops. Print & save invoices, manage customer history with filters, and perform full CRUD operations. Converted to a desktop application for offline use.",
      tech: "MERN Stack | CRUD | Invoice Management | Desktop App",
      liveLink: "#", 
      githubLink: "https://github.com/MuhammadZeb1/tailor-management-system"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
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
