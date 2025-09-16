import './globals.css'
import SiteFrame from '../components/SiteFrame'

export const metadata = {
  title: 'Chinese Finger Trap',
  description: 'Curator site',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  )
}
