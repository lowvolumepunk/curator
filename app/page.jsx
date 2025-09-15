export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Left Red Sidebar */}
      <div className="w-48 bg-[#682300]" />

      {/* Center Green Area */}
      <div className="flex-1 bg-[#0E3F3E] flex flex-col items-center">
        {/* Navigation Boxes */}
        <div className="flex gap-6 p-8">
          {/* New Arrivals (bigger box, stacked text) */}
          <div className="w-56 h-32 bg-white text-black flex flex-col items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300">
            <span className="text-xl font-bold leading-tight">Newest</span>
            <span className="text-xl font-bold leading-tight">Arrivals</span>
          </div>

          {/* Other Boxes */}
          <div className="w-48 h-16 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300 text-lg font-semibold">
            Music
          </div>
          <div className="w-48 h-16 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300 text-lg font-semibold">
            Digital Art
          </div>
          <div className="w-48 h-16 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300 text-lg font-semibold">
            Physical Art
          </div>
          <div className="w-48 h-16 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300 text-lg font-semibold">
            Films
          </div>
          <div className="w-48 h-16 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300 text-lg font-semibold">
            Short Films
          </div>
          <div className="w-48 h-16 bg-white text-black flex items-center justify-center rounded shadow-md hover:rotate-12 transition-transform duration-300 text-lg font-semibold">
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
