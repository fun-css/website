import React from 'react';
import Footer from '../components/Footer';
import Head from "next/head"
function dropdown() {
    return (
        <section>
 <Head>
   <title>Css Dropdowns - Funcss Framework</title>
     <meta name='description' content='
      Create nice css dropdown and dropupcreate animated dropdown and dropdown with funcss framework. 
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
          <a href="#simpledropdown" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Dropdown</div></a>
          <a href="#dropup" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Dropup</div></a> 
          <a href="#animateddropmenu" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Animated Drop Menu</div></a>        </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="header text-indigo">
         Css Dropdown And Dropup - Funcss Framework
        </h1>
        <div className="h4">
        Dropdowns are usuallly use on the navigation bar, they hold 
        content which can be seen when you hover or click on them.
        </div>

        <div className="section hr">

        </div>
       </div>

<div className="container">
<table className="table stripped text-smaller">
                <thead>
                <tr>
                    <td>Class</td>
                    <td>discription</td>
                    <td>syntax</td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>.dropdown-hover</td>
                        <td>It contains all other contents in the dropdown.</td>
                      <td><div> class = {"dropdown-hover"}</div></td>
                    </tr>
                    <tr>
                        <td>.dropdown-button</td>
                        <td>It triggers your dropdown.It can be a link,div or any other html element</td>
                    <td><div> class = {"dropdown-button"}</div></td>
                    </tr>
                    <tr>
                        <td>dropdown-menu</td>
                        <td>
                           It contains contents of your dropdown.
                        </td>
                    <td><div> class = {"dropdown-menu"}</div></td>
                    </tr>
                    <tr>
                        <td>dropdown-item</td>
                        <td>
                           Are found in the dropdown-menu, they are displayed in block and sections.
                        </td>
                        <td><div> class = {"dropdown-item"}</div></td>
                    </tr>
                </tbody>
            </table>
</div>
       
<div className="container padding-top-40" id="simpledropdown">
<div className="h4 topic">Simple Dropdown</div>
<div className="note">
    The <span className="badge">dropdown-hover</span> class is use to create a simple hoverble dropdown.
</div>
<div className="code">
<xmp>
{`
<div class="dropdown-hover text-white">
    <div class="drop-button">
        <button class="button indigo card text-white">DropDown Button</button>
    </div>
     <div class="drop-menu white item-hoverable text-black">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>`}
</xmp>
</div>
<div className="preview">

<div className="dropdown-hover text-white">
    <div className="drop-button">
        <button className="button indigo card text-white">DropDown Button</button>
    </div>
     <div className="drop-menu white item-hoverable text-black">
         <div className="drop-item">LinkOne</div>
         <div className="drop-item">LinkTwo</div>
         <div className="drop-item">LinkThree</div>
         <div className="drop-item">LinkFour</div>
     </div>
</div>

</div>
</div>
       
<div className="container padding-top-40" id="dropup">
<div className="h4 topic">Dropup</div>
<div className="note">
   The <span className="badge">dropup-hover</span> class is use to create hoverable dropups for your website.
</div>
<div className="code">
   <xmp>
{`<div class="dropup-hover text-white">
    <div class="drop-button">
        <button class="button white card">DropUp Button</button>
    </div>
     <div class="drop-menu white item-hoverable text-black">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>`}
   </xmp>
</div>
<div className="preview">
<div className="dropup-hover text-white">
    <div className="drop-button">
        <button className="button white card">DropUp Button</button>
    </div>
     <div className="drop-menu white item-hoverable text-black">
         <div className="drop-item">LinkOne</div>
         <div className="drop-item">LinkTwo</div>
         <div className="drop-item">LinkThree</div>
         <div className="drop-item">LinkFour</div>
     </div>
</div>
</div>
</div>
<div className="container padding-top-40" id="animateddropmenu">
<div className="h4 topic">Animated Drop Menu</div>
<div className="note">
   The <span className="badge">rotate-up</span> and <span className="badge">rotate-down</span> class is use to create a rotating animated button.
</div>
<div className="code">
   <xmp>
{`<div class="row-flex">
<div class="dropup-hover">
    <button class="button blue text-white drop-button"> Hover Up <i class="fas fa-angle-down rotate-up"></i></button>
     <div class="drop-menu white item-hoverable text-black fit-width">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>
<div class="dropdown-hover">
    <button class="button blue text-white drop-button"> Hover down <i class="fas fa-angle-up rotate-down"></i></button>
     <div class="drop-menu white item-hoverable text-black fit-width">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>
</div>`}
   </xmp>
</div>
<div className="preview">
<div className="card padding">
<div className="row-flex">
<div className="dropup-hover">
    <button className="button blue text-white drop-button"> Hover Up <i className="fas fa-angle-down rotate-up"></i></button>
     <div className="drop-menu white item-hoverable text-black fit-width">
         <div className="drop-item">LinkOne</div>
         <div className="drop-item">LinkTwo</div>
         <div className="drop-item">LinkThree</div>
         <div className="drop-item">LinkFour</div>
     </div>
</div>
<div className="dropdown-hover">
    <button className="button blue text-white drop-button"> Hover down <i className="fas fa-angle-up rotate-down"></i></button>
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
  

<Footer />
</div>
</div>
        </section>
    );
}

export default dropdown;