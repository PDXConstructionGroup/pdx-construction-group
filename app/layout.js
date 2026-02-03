import "./globals.css";

export const metadata = {
  title: "PDX Construction Group",
  description: "Built with purpose. Community-powered construction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
