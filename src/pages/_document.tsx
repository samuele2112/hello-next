import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;1,100&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
 