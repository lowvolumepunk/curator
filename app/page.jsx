export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-6">Curator</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#" className="block hover:text-gray-400">
            Articles
          </a>
          <a href="#" className="block hover:text-gray-400">
            Art
          </a>
          <a href="#" className="block hover:text-gray-400">
            Projects
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-10 text-white">
        <h1 className="text-3xl font-bold">Welcome to My Curator Site</h1>
        <p className="mt-4 text-lg">
          Select a category above to explore articles, art, and projects.
        </p>

        {/* Tailwind test block */}
        <div className="bg-[#FFD93A] text-black p-10 mt-6">
          HELLO FROM TAILWIND 3
        </div>
      </div>
    </main>
  )
}
