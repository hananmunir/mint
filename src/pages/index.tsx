import Home from "@/views/Home";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:local" content="en_US" />
        <meta property="robots" content="index, follow" />
        <meta property="robots" content="index, follow" />
        <meta property="keywords" content="__KEYWORDS__" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="%PUBLIC_URL%/logo57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="%PUBLIC_URL%/72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="92x92"
          href="%PUBLIC_URL%/92x92.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="%PUBLIC_URL%/114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="%PUBLIC_URL%/144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="%PUBLIC_URL%/logo192.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My website title" />
        <meta name="description" content="__DESCRIPTION__" />
        <meta property="og:description" content="__DESCRIPTION__" />
        <meta name="twitter:description" content="__DESCRIPTION__" />
        <meta property="og:image" content="__IMG__" />
        <meta property="canonical" content="__URL__" />
        <meta property="og:url" content="__URL__" />
        <meta name="twitter:title" content="__TITLE__" />
        <meta name="twitter:image" content="__IMG__" />
        <meta name="twitter:url" content="__URL__" />
        <meta property="keywords" content="__KEYWORDS__" />

        <meta name="theme-color" content="#000000" />
        <meta name="full-screen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Business Books" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        {/* <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black or black-translucent"
        /> */}
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
