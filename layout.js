
import "./globals.css";

export const metadata = {
  title: "PDX Construction Group",
  description: "Strong. Clean. Built With Purpose."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
