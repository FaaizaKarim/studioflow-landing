import "./globals.css";

export const metadata = {
  title: "Studioflow — Project Management Built for Creative Studios",
  description:
    "Studioflow keeps briefs, feedback, and deadlines in one place so your creative studio ships work on time. Client approvals, visual review, and team workload in a single tool.",
  openGraph: {
    title: "Studioflow — Project Management Built for Creative Studios",
    description:
      "Briefs, feedback, and deadlines in one place. Client approvals, visual review, and team workload in a single tool.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
