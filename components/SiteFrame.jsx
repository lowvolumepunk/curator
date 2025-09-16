export default function SiteFrame({ children }) {
  return (
    <main className="flex h-screen w-screen overflow-hidden relative">
      {/* Left Red Sidebar with Dragon + Sparkles */}
      <div
        className="flex-none w-[320px] bg-[#682300] hidden sm:block relative"
        style={{
          backgroundImage: "url('/dragons/dragon-left.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      >
        {/* Sparkle overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="animate-ping absolute w-2 h-2 bg-yellow-300 rounded-full opacity-75 top-10 left-10"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="animate-ping absolute w-3 h-3 bg-yellow-200 rounded-full opacity-75 top-1/3 left-1/2"
            style={{ animationDelay: "400ms" }}
          ></div>
          <div
            className="animate-ping absolute w-2 h-2 bg-white rounded-full opacity-75 bottom-20 right-16"
            style={{ animationDelay: "800ms" }}
          ></div>
          <div
            className="animate-ping absolute w-1 h-1 bg-yellow-100 rounded-full opacity-75 top-1/4 right-10"
            style={{ animationDelay: "1200ms" }}
          ></div>
        </div>
      </div>

      {/* Center Green Area (content area) */}
      <div className="flex-1 bg-[#0E3F3E] flex flex-col items-center justify-center overflow-hidden">
        {children}
      </div>

      {/* Right Red Sidebar with Dragon + Sparkles */}
      <div
        className="flex-none w-[320px] bg-[#682300] hidden sm:block relative"
        style={{
          backgroundImage: "url('/dragons/dragon-right.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      >
        {/* Sparkle overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="animate-ping absolute w-2 h-2 bg-yellow-300 rounded-full opacity-75 top-8 left-16"
            style={{ animationDelay: "200ms" }}
          ></div>
          <div
            className="animate-ping absolute w-3 h-3 bg-yellow-200 rounded-full opacity-75 top-1/2 left-1/3"
            style={{ animationDelay: "600ms" }}
          ></div>
          <div
            className="animate-ping absolute w-2 h-2 bg-white rounded-full opacity-75 bottom-24 right-20"
            style={{ animationDelay: "1000ms" }}
          ></div>
          <div
            className="animate-ping absolute w-1 h-1 bg-yellow-100 rounded-full opacity-75 bottom-10 left-12"
            style={{ animationDelay: "1400ms" }}
          ></div>
        </div>
      </div>
    </main>
  );
}
