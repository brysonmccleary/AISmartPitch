import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to AISmartPitch 🚀</h1>
      <p className="text-lg text-center max-w-xl mb-6">
        Instantly generate pitch decks for your startup using AI. Just describe your idea and let SmartPitch do the rest.
      </p>
      <Link
        href="/dashboard"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Get Started
      </Link>
    </main>
  );
}
