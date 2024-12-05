import { Hind, Montserrat } from 'next/font/google';

const baseFont = Hind({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-default',
  weight: ['400', '600']
});

const displayFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-display'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${baseFont.variable} ${displayFont.variable}`}>
      <body>
          {children}
      </body>
    </html>
  );
}