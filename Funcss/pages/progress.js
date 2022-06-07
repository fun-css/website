import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
function progress(props) {
    return (
        <div>
                    <div>
                    <section>
<Head>
   <title>Css Progressbars - Funcss Framework</title>
     <meta name='description' content='
      Create easy and animated css progress bars using funcss framework.
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
        <a href="#simple" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Progress Bar</div></a>
          <a href="#animated" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Animated Progress</div></a> 
        </div>
       </div>
           <div className="main-content">
           <div className="container">
           <h1 className="header h1  text-indigo">
          Css Progress Bars - Funcss
        </h1>
        <div className="h4">
          Progress bars are use to show the state of a particular event when creating a website.
        </div>
        <div className="section hr">

        </div>
       </div>

       
<div className="container padding-top-40" id="simple">
<div className="h4 topic">Simple Css Progress Bars</div>
<div className="note">
Progress bars are created simply by creating an element with a width and a visible color.
</div>
<div className="code">
   <xmp>
{`<div class="h4">80%</div>
<div class="indigo padding width-80-p"></div>
<div class="h4">60%</div>
<div class="pink padding width-60-p"></div>
<div class="h4">40%</div>
<div class="blue padding width-40-p"></div>
`}
   </xmp>
</div>

<div className="preview">
<div>

<div className="h4 section"> Simple Css Progress Bars, Check our Width Topic before you can start creating progress bars </div>
<div className="h4">80%</div>
<div className="indigo padding width-80-p"></div>
<div className="h4">60%</div>
<div className="pink padding width-60-p"></div>
<div className="h4">40%</div>
<div className="blue padding width-40-p"></div>

</div>
</div>
</div>
 
<div className="container padding-top-40" id="animated">
<div className="header-3 text-indigo">Animated Css Progress Bars</div>
<div className="note">
The animated scroll bar have an inset border shadow with the progress bar in it.
</div>
<div className="code">
   <xmp>
{`<div class="inset-shadow round-edge">
    <div class="progress green hover-blue padding text-x-large round-edge margin-top-20 animate-width"> </div>
</div>`}
   </xmp>
</div>

<div className="preview">
<div>

<div className="h4 section">A simple animated Progress Bar</div>
<div className="inset-shadow round-edge">
 <div className="progress green hover-blue padding round-edge margin-top-20 animate-width"> </div>
</div>
</div>
</div>
</div>
 

<div className="container padding-top-50">
<div className="note" id="note">
    <div className="note-title">Note:</div>
    <div>
     Progress bars may be use to create the skill section of a portfolio website.
    </div>
</div>
</div>

<Footer />

</div>
</div>
   </section>
        </div>
        </div>
    );
}

export default progress;