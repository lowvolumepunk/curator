import './globals.css'

export const metadata = {
  title: 'Chinese Finger Trap',
  description: 'Curator site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
