import type { Metadata } from 'next'

import '../index.css';
 
export const metadata: Metadata = {
  title: 'Podcaster App',
  description: 'Web app showcasing the top 100 podcasts from iTunes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
