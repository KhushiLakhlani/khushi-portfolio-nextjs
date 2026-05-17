import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Khushi Lakhlani — Data & Analytics",
  description: "Data analyst and engineer specializing in Python, SQL, and ML.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}