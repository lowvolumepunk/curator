export default function About() {
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
      <div className="flex-1 bg-[#0E3F3E] flex flex-col items-center justify-center">
        <div className="text-white text-center max-w-2xl p-10">
          <h1 className="text-4xl font-bold mb-6 uppercase">About</h1>
          <p className="text-lg italic">
            This site is my personal curator platform, showcasing music, art,
            films, and more — all things worth curating under the name
            <span className="font-extrabold"> Chinese Finger Trap</span>.
          </p>
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
