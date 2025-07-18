'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

// app/editor/[article]/error.tsx
export default function ArticleErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="bg-gray-900 border border-gray-300 rounded-lg p-8 shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold text-white mb-2">Page Could Not Load</h1>
            <p className="text-white mb-4">
                Sorry, we could not load the page/article, perhaps it does not exist.
            </p>
            <Link href='/'>
                <Button
                    className="mt-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                >
                    Go Back to Home
                </Button>
           </Link>
        </div>
      </div>
    );
}