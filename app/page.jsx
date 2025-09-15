export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Left Red Sidebar */}
      <div className="w-48 bg-[#682300]" />

      {/* Center Green Area */}
      <div className="flex-1 bg-[#0E3F3E] flex flex-col items-center">
        {/* Top Boxes */}
        <div className="flex gap-4 p-6">
          {/* Newest Arrivals (same box size, stacked text, sized to fit) */}
          <div className="w-48 h-24 bg-white text-black flex flex-col items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12">
            <span className="leading-tight text-[1.35rem] font-extrabold">Newest</span>
            <span className="leading-tight text-[1.35rem] font-extrabold">Arrivals</span>
          </div>

          {/* Other boxes — same sizes as before; text sized per label length */}
          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
            <span className="text-base font-semibold leading-none whitespace-nowrap">Music</span>
          </div>

          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
            <span className="text-sm font-semibold leading-none whitespace-nowrap">Digital Art</span>
          </div>

          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
            <span className="text-sm font-semibold leading-none whitespace-nowrap">Physical Art</span>
          </div>

          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
            <span className="text-base font-semibold leading-none whitespace-nowrap">Films</span>
          </div>

          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
            <span className="text-sm font-semibold leading-none whitespace-nowrap">Short Films</span>
          </div>

          <div className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3">
            <span className="text-sm font-semibold leading-none whitespace-nowrap">Architecture</span>
          </div>
        </div>

        {/* Main Content */}
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
  );
}
