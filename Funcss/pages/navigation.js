import React from 'react';
import Footer from './../components/Footer';
import { useState } from 'react';
import Head from "next/head"
function Navigation() {
    const [height, setheight] = useState("200px");
    const Handlesidebar = ()=>{
    if(height === "200px"){
        setheight("0px")
    }else{
        setheight("200px")
    }
    }
    return (
        <section>
       <Head>
   <title>Css Navigationbar - Funcss Framework</title>
     <meta name='description' content='
     Navigation bar contains links to your webpages. Create goog modern responsive navigation bars using the funcss framework.
       ' />
    <meta
    name="keywords"
    content="fun, css, card, slide, panel, slide panel"
    />
</Head>
              <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding ads content-middle light">
             <div id="container-8efab60a26b5c40a3a52aab9bdb98896">Ads</div>
             </div>
        <div className="section">
          <a href="#simplenavbar" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Navigation Bar</div></a>
          <a href="#navbardropdown" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Dropdown Navigation Bar</div></a> 
          <a href="#responsivenav" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Responsive Navigation Bar</div></a> 
          </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="h1 header text-lighter text-indigo">
          Css Navigation Bar - Funcss Framework
        </h1>
        <div className="h4">
          The navigation bar contains links to your webpages. create simple and responsive navigation bars with funcss framework.
        </div>

        <div className="section hr">

        </div>
       </div>
 
<div className="container padding-top-40" id="simplenavbar">
<div className="h4 topic">Simple Navigation Bar</div>
<div className="note">
You can create simple navigation bars, just to navigate to your webpages.
</div>
<div className="code">
<xmp>
{`<div class="navigation-bar light">
   <div class="text-x-large nav-logo">Logo</div>
     <div class="padding">
       <a href="#" class="text-white text-small">Home</a>
       <a href="#" class="text-white text-small">About</a>
      <a href="#"  class="text-white text-small">Team</a>
      <a href="#"  class="text-white text-small">Contact</a>
     </div>
</div>`}
</xmp>
</div>
<div className="preview">
<div className="navigation-bar light">
<div className="nav-logo h3">Logo</div>
<div className="padding">
<a href="#" className="text-black hover-text-blue text-small">Home</a>
<a href="#" className="text-black hover-text-blue text-small">About</a>
<a href="#" className="text-black hover-text-blue text-small">Team</a>
<a href="#" className="text-black hover-text-blue text-small">Contact</a>
</div>
</div>

</div>
</div>
       
<div className="container padding-top-40" id="navbardropdown">
<div className="h4 topic">Navigation Bar With Dropdown</div>
<div className="note">
This navigation bar have dropdown which contains links to other subpages.
</div>
<div className="code">
   <xmp>
{`<div class="navigation-bar light card">
   <div class="text-x-large nav-logo">Logo</div>
     <div class="indigo padding">
        <div class="row-flex">
      <a href="#" class="text-white">Home</a>
      <a href="#" class="text-white">About</a>
      <a href="#" class="text-white">Team</a>
      <a href="#" class="text-white">Contact</a>
      <div class="dropdown-hover">
    <button class="button text-white drop-button"> Dropdown <i class="fas fa-angle-down rotate-up"></i></button>
     <div class="drop-menu white item-hoverable text-black fit-width">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
     </div>
     </div>
 </div>

</div>
`}
   </xmp>
</div>
<div className="preview">
<div className="navigation-bar light card width-100-p">
   <div className="text-x-large nav-logo">Logo</div>
     <div className="indigo padding">
        <div className="row-flex">
         <a href="#" className="text-white text-small">Home</a>
         <a href="#" className="text-white text-small">About</a>
      <div className="dropdown-hover">
    <div className="button text-white drop-button text-small"> Dropdown <i className="fas fa-angle-down rotate-up"></i></div>
     <div className="drop-menu white item-hoverable text-black fit-width">
         <div className="drop-item">LinkOne</div>
         <div className="drop-item">LinkTwo</div>
         <div className="drop-item">LinkThree</div>
         <div className="drop-item">LinkFour</div>
     </div>
     </div>
     </div>
 </div>
</div>

</div>
</div>
       
<div className="container padding-top-40" id="navbardropdown">
<div className="h4 topic">Navigation Bar With Dropdown</div>
<div className="note">
This navigation bar have dropdown which contains links to other subpages.
</div>
<div className="code">
   <xmp>
{`<div class="navigation-bar light card">
   <div class="text-x-large nav-logo">Logo</div>
     <div class="indigo padding">
        <div class="row-flex">
      <a href="#" class="text-white">Home</a>
      <a href="#" class="text-white">About</a>
      <a href="#" class="text-white">Team</a>
      <a href="#" class="text-white">Contact</a>
      <div class="dropdown-hover">
    <button class="button text-white drop-button"> Dropdown <i class="fas fa-angle-down rotate-up"></i></button>
     <div class="drop-menu white item-hoverable text-black fit-width">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
     </div>
     </div>
 </div>

</div>
`}
   </xmp>
</div>
<div className="preview">
<div className="navigation-bar light padding">
   <div className="text-x-large nav-logo">Logo</div>
   <div>
     <a href=""><i className="fas fa-home icon size-2 text-indigo inline-block"></i></a>
     <a href=""><i className="fas fa-phone icon size-2 text-indigo inline-block"></i></a>
     <a href=""><i className="fas fa-user icon size-2 text-indigo inline-block"></i></a>
     <a href=""><i className="fas fa-bell icon size-2 text-indigo inline-block"></i></a>
   </div>
</div>

</div>
</div>

<div className="container padding-top-40" id="responsivenav">
<div className="h4 topic">Navigation Bar With Sidebar</div>
<div className="note">
When creating a website is a good practice to always provide a sidebar for responsiveness.
It is easy to create sidebars using funcss.
</div>
<div className="code">
   <xmp>
{`    <div class="navigation-bar light card width-100-p">
        <div class="text-x-large nav-logo">Logo</div>
          <div class="indigo">
             <div class="link-wrapper">
              <a href="#" class="text-white text-small">Home</a>
              <a href="#" class="text-white text-small">About</a>
           <div class="dropdown-hover">
         <div class="button text-white drop-button text-small"> Dropdown <i class="fas fa-angle-down rotate-up"></i></div>
          <div class="drop-menu white item-hoverable text-black fit-width">
              <div class="drop-item">LinkOne</div>
              <div class="drop-item">LinkTwo</div>
              <div class="drop-item">LinkThree</div>
              <div class="drop-item">LinkFour</div>
          </div>
          </div>
          </div>
          <div class="sidebar-trigger"><i class="fas fa-bars text-indigo"></i></div>
      </div>
     </div>
     <div class="sidebar black">
     <div class="text-right padding">
         <span class="close-sidebar text-xx-large text-white pointer">
             &times;
         </span>
     </div>
     <div class="padding">
         <div class="text-center padding"><a href="#" class="link text-white">Link One</a></div>
         <div class="text-center padding"><a href="#" class="link text-white">Link Two</a></div>
         <div class="text-center padding"><a href="#" class="link text-white">Link Three</a></div>
         <div class="text-center padding"><a href="#" class="link text-white">Link Four</a></div>
     </div>
     </div>`}
   </xmp>
</div>
<div className="preview">
<div className="navigation-bar light card width-100-p">
        <div className="text-x-large nav-logo">Logo</div>
          <div className="indigo">
             <div className="link-wrapper">
              <a href="#" className="text-white text-small">Home</a>
              <a href="#" className="text-white text-small">About</a>
           <div className="dropdown-hover">
         <div className="button text-white drop-button text-small"> Dropdown <i className="fas fa-angle-down rotate-up"></i></div>
          <div className="drop-menu white item-hoverable text-black fit-width">
              <div className="drop-item">LinkOne</div>
              <div className="drop-item">LinkTwo</div>
              <div className="drop-item">LinkThree</div>
              <div className="drop-item">LinkFour</div>
          </div>
          </div>
          </div>
          <div className="sidebar-trigger"><i className="fas fa-bars text-indigo"></i></div>
      </div>
     </div>
     <div className="sidebar black">
     <div className="text-right padding">
         <span className="close-sidebar text-xx-large text-white pointer">
             &times;
         </span>
     </div>
     <div className="padding">
         <div className="text-center padding"><a href="#" className="link text-white">Link One</a></div>
         <div className="text-center padding"><a href="#" className="link text-white">Link Two</a></div>
         <div className="text-center padding"><a href="#" className="link text-white">Link Three</a></div>
         <div className="text-center padding"><a href="#" className="link text-white">Link Four</a></div>
     </div>
     </div>
     
     
</div>
</div>
  

<Footer />
</div>
</div>
        </section>
    );
}

export default Navigation;