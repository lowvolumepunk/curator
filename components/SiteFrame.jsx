export default function SiteFrame({ children }) {
  return (
    <main className="flex min-h-screen">
      {/* Left Red Sidebar with Dragon (locked 320px) */}
      <div
        className="flex-none w-[320px] bg-[#682300] hidden sm:block"
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
        {children}
      </div>

      {/* Right Red Sidebar with Dragon (locked 320px) */}
      <div
        className="flex-none w-[320px] bg-[#682300] hidden sm:block"
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
