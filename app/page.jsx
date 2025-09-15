
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
    <main className="min-h-screen flex flex-col">
      <nav className="flex gap-4 p-6">
        {tabs.map((tab, i) => (
          <div key={i} className="group [perspective:1000px]">
            <div
              className={`border border-white text-white rounded-md flex items-center justify-center cursor-pointer transition-transform duration-500 hover:bg-[#FFD93A] hover:text-[#682300] hover:shadow-lg ${
                tab.large ? "w-48 h-24" : "w-40 h-12"
              } group-hover:[transform:rotateY(-60deg)]`}
            >
              {tab.name}
            </div>
          </div>
        ))}
      </nav>

      <section className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Welcome to My Curator Site</h1>
        <p className="mt-4 text-lg">
          Select a category above to explore articles, art, and projects.
        </p>
      </section>
    </main>
  );
}
