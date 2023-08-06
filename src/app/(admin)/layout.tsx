"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Lexi Kitchen</title>
        <meta
          title="descriptions"
          content="Lexi kitchen for all your delicious home cooked meals"
        ></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
