import Link from "next/link";

// not-found page
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <h1 className="text-7xl font-extrabold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
            Oops! The page you are looking for does not exist.
        </p>
        <Link
            href="/"
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
            Go back home
        </Link>
    </div>
  );
}