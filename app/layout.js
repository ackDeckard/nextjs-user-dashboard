import Sidebar from "./components/Sidebar";
import "./globals.css";
import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="min-h-screen bg-gray-100">
        <Sidebar>
          <Header />
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
