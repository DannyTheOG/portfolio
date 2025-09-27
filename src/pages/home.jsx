export const Home = () => {

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right">
            Hi, I'm Daniel Hammond
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
            I’m a Full-Stack Developer passionate about building dynamic web applications. Explore my projects to see how I leverage technologies like [JavaScript, React, Node.js, Java.] to create innovative solutions. Feel free to reach out for collaborations!
          </p>

          <div className="flex justify-center space-x-4">
            <a 
              href="#project" 
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a 
              href="#contact" 
              className="border border-blue-500/50 text-blue-600 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10"
            >
              Let’s Connect!
            </a>
          </div>
        </div>
      </section>
    </>
  )
}