
export const metadata = {
  title: "Chinese Finger Trap",
  description: "Personal curator site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
