import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ArticleCanvas - The Canvas for Your Greatest Insights',
  description: 'A beautiful, distraction-free writing environment where your words take center stage. Minimalist. Elegant. Focused.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <Toaster duration={3000} />
      </body>
    </html>
  );
}