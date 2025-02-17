import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "An E-commerce platform made with react-bootstrap, React",
      link: "https://makye.vercel.app",
    },
    {
      title: "New Years Counter",
      description: "Made with Rect & React Hooks",
      link: "https://new-year-counter-sigma.vercel.app",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio site using Next.js and Tailwind CSS",
      link: "https://portfolio-king101bits-projects.vercel.app/",
    },
    {
      title: "University System",
      description: "Experience the future of student data management! University System, tailored for the Nigerian university model",
      link: "https://github.com/king101-bit/University_system"
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

      {/* Grid Container */}
      <motion.div
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="inline-flex items-center gap-1 mt-4 text-blue-500 font-medium hover:underline"
            >
              View Project <ExternalLink size={18} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
