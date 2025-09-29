import { RevealOnScroll } from "../components/reveal-on-scroll"

export const Project = () => {

  return (
    <>
      <section
        id="projects" 
        className="min-h-screen flex items-center justify-center py- "
      >
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r 
              from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"
              >
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
              {/* project 1 */}
              <div 
                className="glass p-6 rounded-xl border border-gray-100 hover-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]
                transition-all flex flex-col justify-between"
                >
                <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                <p className="text-gray-400 mb-4">
                  Scalable cloud infrastructure management with real time monitoring 
                  and automated scaling
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React.js", "Node.js", "AWS", "Docker"].map( ( techstack, key ) => (
                    <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                    transition-all"
                    >
                        {techstack}
                      </span>
                  ))}
                </div>
                <div className="flex justify-end ">
                  <a
                    href="#" 
                    className="text-blue-500 hover:text-blue-300 transition-colors"
                    >
                    View Project →
                  </a>
                </div>
              </div>

              {/* project 2 */}
              <div 
                className="glass p-6 rounded-xl border border-gray-100 hover-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all"
                >
                <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                <p className="text-gray-400 mb-4">
                  Scalable cloud infrastructure management with real time monitoring 
                  and automated scaling
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React.js", "Node.js", "AWS", "Docker"].map( ( techstack, key ) => (
                    <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    transition-all"
                    >
                        {techstack}
                      </span>
                  ))}
                </div>
                <div className="flex justify-end ">
                  <a
                    href="#" 
                    className="text-blue-500 hover:text-blue-300 transition-colors"
                    >
                    View Project →
                  </a>
                </div>
              </div>

              {/* project 3 */}
              <div 
                className="glass p-6 rounded-xl border border-gray-100 hover-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all"
                >
                <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                <p className="text-gray-400 mb-4">
                  Scalable cloud infrastructure management with real time monitoring 
                  and automated scaling
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React.js", "Node.js", "AWS", "Docker"].map( ( techstack, key ) => (
                    <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    transition-all"
                    >
                        {techstack}
                      </span>
                  ))}
                </div>
                <div className="flex justify-end ">
                  <a
                    href="#" 
                    className="text-blue-500 hover:text-blue-300 transition-colors"
                    >
                    View Project →
                  </a>
                </div>
              </div>

              {/* project 4 */}
              <div 
                className="glass p-6 rounded-xl border border-gray-100 hover-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all"
                >
                <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                <p className="text-gray-400 mb-4">
                  Scalable cloud infrastructure management with real time monitoring 
                  and automated scaling
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React.js", "Node.js", "AWS", "Docker"].map( ( techstack, key ) => (
                    <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    transition-all"
                    >
                        {techstack}
                      </span>
                  ))}
                </div>
                <div className="flex justify-end ">
                  <a
                    href="#" 
                    className="text-blue-500 hover:text-blue-300 transition-colors"
                    >
                    View Project →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}