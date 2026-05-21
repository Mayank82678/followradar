import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'FollowRadar — Instagram Relationship Tracker',
  description: 'Premium Instagram unfollow alerts, mutual and ghost follower tracking, and smart cleanup tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100`}>{children}</body>
    </html>
  );
}
