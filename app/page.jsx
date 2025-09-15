export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Left Red Sidebar */}
      <div className="w-48 bg-[#682300]" />

      {/* Center Green Area */}
      <div className="flex-1 bg-[#0E3F3E] flex flex-col items-center">
        {/* Navigation Boxes */}
        <div className="flex gap-4 p-6">
          {/* New Arrivals (bigger box) */}
          <div className="w-48 h-24 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300">
            New Arrivals
          </div>

          {/* Other Boxes */}
          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300">
            Music
          </div>
          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300">
            Digital Art
          </div>
          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300">
            Physical Art
          </div>
          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300">
            Films
          </div>
          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300">
            Short Films
          </div>
          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300">
            Architecture
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="text-white text-center mt-10 max-w-2xl">
          <h1 className="text-3xl font-bold">Welcome to My Curator Site</h1>
          <p className="mt-4 text-lg">
            Select a category above to explore articles, art, and projects.
          </p>
        </div>
      </div>

      {/* Right Red Sidebar */}
      <div className="w-48 bg-[#682300]" />
    </main>
  )
}
