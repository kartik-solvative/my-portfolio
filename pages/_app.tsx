import React from "react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { globals } from "../globals";
import { Header } from "../components/Header";
import "../styles/base.css";

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div className="">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://kartiksorathiya.matomo.cloud/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src='//cdn.matomo.cloud/kartiksorathiya.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        ></script>
        <script src="https://cdn.counter.dev/script.js" data-id="8cb56b09-edfe-40d6-bd49-fbd8a77bf040" data-utcoffset="-4"></script>

        <script
          async
          defer
          data-website-id="c1b22a5c-1c32-4600-b517-f88f7b14c9a0"
          src="https://analytics.kartiksorathiya.com/umami.js"
        ></script>
        {globals.googleAnalyticsId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
          ></script>
        )}
        {globals.googleAnalyticsId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
            }}
          ></script>
        )}
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
