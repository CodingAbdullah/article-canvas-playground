import Link from "next/link";

// Not Found Page
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-7xl font-extrabold text-gray-300 mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">
            Oops! The page you are looking for does not exist.
        </p>
        <Link
            href="/"
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-800 transition"
        >
            Go Back Home
        </Link>
    </div>
  );
}