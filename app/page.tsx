import NervosaLogo from "@/components/NervosaLogo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1e24] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Logo + Brand */}
      <div className="flex flex-col items-center text-center w-full max-w-xl">
        <NervosaLogo className="mb-4 sm:mb-6 md:mb-8 shrink-0" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-2 sm:mb-3">
          Nervosa
        </h1>
        <div className="w-24 sm:w-32 md:w-40 h-0.5 bg-[#2fd4c6] mb-3 sm:mb-4" />
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light uppercase tracking-widest text-white/90">
          By Doctors. For Doctors.
        </p>

        {/* Coming Soon */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2fd4c6] uppercase tracking-[0.2em]">
            Coming Soon
          </p>
          <p className="mt-3 sm:mt-4 text-white/70 text-sm sm:text-base md:text-lg">
            Stay tuned for something special.
          </p>
        </div>
      </div>
    </main>
  );
}
