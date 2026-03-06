import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode, useEffect } from "react";

type PageLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function PageLayout({
  children,
  title,
  description,
}: PageLayoutProps) {
  useEffect(() => {
    if (title) {
      document.title = title.includes("Joist Recruitment")
        ? title
        : `${title} | Joist Recruitment`;
    } else {
      document.title = "Joist Recruitment";
    }

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    if (description) {
      meta.setAttribute("content", description);
    }

    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}