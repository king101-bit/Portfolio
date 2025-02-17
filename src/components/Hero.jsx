import { motion } from "framer-motion";

const Hero = () => {
    const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
        <div className="h-screen flex items-center justify-center text-center bg-gradient-to-tl from-blue-400  to-slate-50">
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h1 className="font-bold text-5xl text-gray-900">Hello, I&apos;m Zack Agba</h1>
  <p className="text-2xl text-gray-600">I&lsquo;m a Web Developer</p>
  <button  onClick={scrollToProjects} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
  View My Work
</button>
</motion.div>
        </div>
  )
}

export default Hero