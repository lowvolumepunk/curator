export default function SiteFrame({ children }) {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {/* Left Red Sidebar with Dragon (fixed 320px) */}
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

      {/* Center Green Area (fills remaining space) */}
      <div className="flex-1 bg-[#0E3F3E] flex flex-col items-center justify-center overflow-hidden">
        {children}
      </div>

      {/* Right Red Sidebar with Dragon (fixed 320px) */}
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
