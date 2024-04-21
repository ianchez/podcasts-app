import type { Metadata } from 'next'

import './layout.css';
import Providers from './providers';
import Header from 'src/components/Header';

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
    <html>
      <body>
        <Providers>
          <div id='layout'>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
