import '@/styles/globals.css'
import Script from 'next/script'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4HTVPFEJYG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4HTVPFEJYG');
        `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-175640325-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-175640325-1');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
};

export default App;