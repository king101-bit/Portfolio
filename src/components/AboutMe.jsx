import { CodeXml } from 'lucide-react'
const AboutMe = () => {
  return (
        <section className="flex flex-col items-center justify-center py-16 px-6">
<CodeXml className='text-blue-500 mb-4' size={50} />
<h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="max-w-2xl text-gray-700 mb-4">
        I&apos;m a passionate web developer with a keen eye for design and a love for clean, efficient code.
        With expertise in modern web technologies, I create responsive and user-friendly websites that make an impact.
      </p>

      <p className="max-w-2xl text-gray-700">
        When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software architecture.
      </p>

        </section>
  )
}

export default AboutMe