"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          © Jamie White Consulting
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Privacy
          </a>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
