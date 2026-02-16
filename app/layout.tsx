export const metadata = {
  title: "रोजगार आवेदन फॉर्म",
  description: "आवेदन विवरण जमा करें",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "Noto Sans Devanagari, sans-serif",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
