import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05070a] text-white flex flex-col items-center justify-center px-4 text-center">
      <span className="text-xs font-bold tracking-widest text-[#ea1c24] uppercase mb-3">
        Error 404
      </span>
      <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4">
        Page Not Found
      </h1>
      <p className="text-sm text-zinc-400 max-w-md mb-8">
        The vehicle build or page you are looking for has been moved or does not exist.
      </p>
      <Link
        href="/"
        className="bg-[#ea1c24] hover:bg-[#ff2d36] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-all"
      >
        Return to Workshop Home ↗
      </Link>
    </div>
  );
}
