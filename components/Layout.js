import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Head  from 'next/head';
import Script from 'next/script'
import { useEffect, useState } from 'react';
const Layout = ({children}) => {

    return (  
        <div  lang="en">
      <Script src="/js/ads.js" />
    
      {/* <Script src="/js/jQuery.js"/> */}
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous" />
     
 
            <Navbar />
        <div className="Page">
            <Sidebar />
            <div className="Content">

                {children}
            </div>
         
        </div>
        </div>
    );
}
 
export default Layout;
