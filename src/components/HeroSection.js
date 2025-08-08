export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://framerusercontent.com/assets/4prPqGo6eJh3gMKeTokOQv3gFo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>


      {/* Since 1980 badge */}
      <div className="absolute bottom-8 right-8 z-20 bg-white text-black px-4 py-2 font-semibold rounded shadow">
        Since 1980
      </div>

      {/* Hero content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl font-serif font-light leading-snug drop-shadow-lg">
          GREAT MOMENTS WITH GREAT TASTES
        </h1>
      </div>
    </section>
  )
}
