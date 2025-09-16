export default function About() {
  return (
    <div className="flex flex-col items-center w-full h-full px-8 py-6 overflow-hidden">
      <div className="text-white text-center max-w-3xl mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
          About
        </h1>
        <p className="text-lg italic">
          This site is my personal curator platform, showcasing music, art,
          films, and more — all things worth curating under the name
          <span className="font-extrabold"> Chinese Finger Trap</span>.
        </p>
      </div>
    </div>
  );
}
