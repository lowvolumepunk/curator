export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Left Red Sidebar with Dragon (w-80) */}
      <div
        className="w-80 bg-[#682300] hidden sm:block"
        style={{
          backgroundImage: "url('/dragons/dragon-left.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      />

      {/* Center Green Area */}
      <div className="flex-1 bg-[#0E3F3E] flex flex-col items-center">
        {/* Top Boxes */}
        <div className="flex gap-4 p-6">
          {/* Newest Arrivals (stacked text) */}
          <div className="w-48 h-24 bg-white text-black flex flex-col items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12">
            <span className="leading-tight text-[1.35rem] font-extrabold">Newest</span>
            <span className="leading-tight text-[1.35rem] font-extrabold">Arrivals</span>
          </div>

          {/* Other Boxes */}
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

          {/* New About Box */}
          <a
            href="/about"
            className="w-40 h-12 bg-white text-black flex items-center justify-center rounded shadow-md transition-transform duration-300 hover:rotate-12 px-3"
          >
            <span className="text-base font-semibold leading-none whitespace-nowrap">About</span>
          </a>
        </div>

        {/* Main Content */}
        <div className="text-white text-center mt-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold uppercase">Chinese Finger Trap</h1>
          <p className="mt-4 text-lg italic">Curator of all things worth curating</p>
        </div>
      </div>

      {/* Right Red Sidebar with Dragon (w-80) */}
      <div
        className="w-80 bg-[#682300] hidden sm:block"
        style={{
          backgroundImage: "url('/dragons/dragon-right.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      />
    </main>
  );
}
