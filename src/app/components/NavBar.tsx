"use client";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
            J
          </div>
          <div>
            <h1 className="text-lg font-bold">Jamie White Consulting</h1>
            <p className="text-xs text-gray-500">Clarity · Strategy · Growth</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#how" className="hover:underline">
            How it works
          </a>
          <a href="#results" className="hover:underline">
            Results
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a
            href="https://sbgschedule.com"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:brightness-95"
          >
            Book a Call
          </a>
        </nav>
        <div className="md:hidden">
          <a
            href="https://sbgschedule.com"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-3 py-2 rounded-md"
          >
            Book
          </a>
        </div>
      </div>
    </header>
  );
}
