import "./globals.css"

export const metadata ={
  title : "Dashboard APP | Profile Page"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}