'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

// app/editor/[article]/error.tsx
export default function ArticleErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Article Not Loaded</h1>
            <p className="text-gray-700 mb-4">
                Sorry, we could not load the article. It may not exist, or there was a problem fetching it.
            </p>
            <Link href='/'>
                <Button
                    className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                    Go Back to Home
                </Button>
           </Link>
        </div>
      </div>
    );
  }