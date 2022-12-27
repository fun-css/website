import "../styles/globals.css"
import "../styles/fun.css"
import "../styles/index.css"
import Layout from "../components/Layout"
import Head from "next/head";
import { useEffect, useState } from 'react';
import Script from "next/script"

function MyApp({ Component, pageProps }) {

  return(
    <Layout>
    {/* <Script async="async" data-cfasync="false" src="//upgulpinon.com/1?z=4831201" /> */}
      <Head>
      <link rel="shortcut icon" href="icons/fun.png" type="image/x-icon" />
      <style>
      @import url({"https://fonts.googleapis.com/icon?family=Material+Icons"});
      @import url({"https://fonts.googleapis.com/css2?family=Jost&family=Open+Sans:ital@0;1&display=swap"});
      @import url({"https://fonts.googleapis.com/css2?family=Outfit:wght@800&display=swap"});
      @import url({"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap"});
      @import url({"https://fonts.googleapis.com/css2?family=Blinker&display=swap"});
      @import url({"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"});
      @import url({"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"});
     {/* <script data-ad-client="ca-pub-1309679724939772" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1309679724939772"
     crossOrigin="anonymous"></script>
<script src="https://upskittyan.com/pfe/current/tag.min.js?z=4831121" data-cfasync="false" async></script> */}

      </style>
      </Head>
    <Component {...pageProps} />
  </Layout>
  )
 
}

export default MyApp
