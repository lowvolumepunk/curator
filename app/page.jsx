const tabs = [
  { name: "New Arrivals", large: true },
  { name: "Music" },
  { name: "Digital Art" },
  { name: "Physical Art" },
  { name: "Films" },
  { name: "Short Films" },
  { name: "Architecture" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex bg-[#682300]">
      {/* Left Red Sidebar */}
      <aside className="w-12 bg-[#682300]" />

      {/* Center Green Content */}
      <section className="flex-1 bg-[#0E3F3E] flex flex-col">
        {/* White Boxes Navigation */}
        <nav className="flex gap-4 p-6 justify-center">
          {tabs.map((tab, i) => (
            <div key={i} className="group [perspective:1000px]">
              <div
                className={`bg-white text-[#0E3F3E] font-semibold rounded-md flex items-center justify-center cursor-pointer transition-transform duration-500 hover:bg-[#FFD93A] hover:text-[#682300] hover:shadow-lg ${
                  tab.large ? "w-48 h-24" : "w-40 h-12"
                } group-hover:[transform:rotateY(-60deg)]`}
              >
                {tab.name}
              </div>
            </div>
          ))}
        </nav>

        {/* Main Page Content */}
        <div className="flex-1 p-10 text-white">
          <h1 className="text-3xl font-bold">Welcome to My Curator Site</h1>
          <p className="mt-4 text-lg">
            Select a category above to explore articles, art, and projects.
          </p>
        </div>
      </section>

      {/* Right Red Sidebar */}
      <aside className="w-12 bg-[#682300]" />
    </main>
  );
}
<div className="bg-[#FFD93A] text-black p-10">HELLO FROM TAILWIND 3</div>
