import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './lib/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ricky Zaman - Full-Stack Developer',
  description: 'Full-Stack Dev · DevSecOps · Builder of Scalable Systems',
  keywords: 'developer, full-stack, devops, react, next.js',
  author: 'Ricky Zaman',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}