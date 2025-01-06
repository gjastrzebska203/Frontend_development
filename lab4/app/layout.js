import "./styles_home.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lab 3</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
