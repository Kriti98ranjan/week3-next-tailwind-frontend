import "./globals.css";

export const metadata = {
  title: "Dashboard App | Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}