import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 gap-6">
        <Link
          href="/proyecto1"
          className="px-6 py-4 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600 transition"
        >
          Proyecto 1
        </Link>
        <Link
          href="/proyecto2"
          className="px-6 py-4 bg-green-500 text-white rounded-2xl shadow hover:bg-green-600 transition"
        >
          Proyecto 2
        </Link>
        <Link
          href="/proyecto3"
          className="px-6 py-4 bg-purple-500 text-white rounded-2xl shadow hover:bg-purple-600 transition"
        >
          Proyecto 3
        </Link>
        <Link
          href="/proyecto4"
          className="px-6 py-4 bg-red-500 text-white rounded-2xl shadow hover:bg-red-600 transition"
        >
          Proyecto 4
        </Link>
        <Link
          href="/proyecto5"
          className="px-6 py-4 bg-yellow-500 text-black rounded-2xl shadow hover:bg-yellow-600 transition"
        >
          Proyecto 5
        </Link>
        <Link
          href="/proyecto6"
          className="px-6 py-4 bg-pink-500 text-white rounded-2xl shadow hover:bg-pink-600 transition"
        >
          Proyecto 6
        </Link>
      </div>
    </main>
  );
}
