import { motion } from "framer-motion";

const Hero = () => {
  return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h1 className="text-5xl font-bold">Hello, I&apos;m Zack Agba</h1>
  <p className="text-gray-500 text-3xl">I&lsquo;m a Web Developer</p>
</motion.div>
        </div>
  )
}

export default Hero