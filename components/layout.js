import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { useEffect } from 'react'

export default function Layout({ children, pageTitle, ...props }) {
  useEffect(() => {
    const M = window.M
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
}, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

      </Head>
      <Header />
      <main style={{backgroundColor: '#203647', paddingBottom: 50, margin: 'auto', paddingTop: 70, color: 'white'}} className="layout">{children}</main>
      
      <Footer />
    </>
  );
}
