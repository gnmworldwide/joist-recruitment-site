import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode, useEffect } from "react";

export default function PageLayout({ children, title, description }: { children: ReactNode, title?: string, description?: string }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Joist Recruitment`;
    }
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}