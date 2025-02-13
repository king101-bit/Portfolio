import { Highlight, themes } from "prism-react-renderer";
import { clsx } from "clsx"; // Optional: for conditional classNames
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "Python",
  "Responsive Design",
];

const codeString = `const skills = [\n  '${skills.join("',\n  '")}',\n];`;

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-white">
     <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
</motion.div>
      {/* Code Block Container */}
      <div className="max-w-3xl mx-auto bg-gray-900 p-4 rounded-2xl shadow-lg overflow-hidden">
        <Highlight theme={themes.nightOwl} code={codeString} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={clsx(className, "p-4 rounded-lg overflow-auto")} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </section>
  );
};

export default Skills;
