// src/app/layout.js
import GoogleAdsense from '../../components/GoogleAdsense';
import './globals.css'
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3603375896756600" crossorigin="anonymous"></script>
        <GoogleAdsense pId="ca-pub-3603375896756600" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}