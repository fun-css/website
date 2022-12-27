import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
import LoadSpan from '../Funcss/Components/LoadSpan';
import LoadRing from '../Funcss/Components/LoadRing';
import Ellipsis from '../Funcss/Components/Ellipsis';
import ProgressBar from '../Funcss/Components/ProgressBar';
import Roller from '../Funcss/Components/Roller';
function progress(props) {
    return (
        <div>
                    <div>
                    <section>
<Head>
   <title>Css Progress - Funcss Framework</title>
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
        <a href="#progressBar" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Progress Bar</div></a>
          <a href="#loaders" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Loaders</div></a> 
        </div>
       </div>
           <div className="main-content">
           <div className="container">
           <h1 className="header text-indigo">
          Css Progress - Funcss
        </h1>
        <div className="h5 width-500-max">
          Progress  are use to show the state of a particular event when creating a website.
        </div>
       </div>

       
<div className="container padding-top-40" id="progressBar">
<div className="h4 topic">Simple Css Progress Bars</div>
<div className="note">
Progress bars are created simply by creating an element with a width and a visible color.
</div>
<div className="code">
   <xmp>
{`import ProgressBar from '../Funcss/Components/ProgressBar';
<ProgressBar progress={85} content={"Success! 85%"} funcss="success text-white text-small" />
<ProgressBar progress={50} content={"Warning! 50%"} funcss="warning section text-white"  />
<ProgressBar progress={45} content={"Error! 45%"} funcss="danger text-white" />
`}
   </xmp>
</div>

<div className="preview">
<ProgressBar progress={85} content={"Success! 85%"} funcss="success text-white text-small" />
<ProgressBar progress={50} content={"Warning! 50%"} funcss="warning section text-white"  />
<ProgressBar progress={45} content={"Error! 45%"} funcss="danger text-white" />

</div>
</div>
 
<div className="container padding-top-40" id="loaders">
<div className="h4 topic">Simple Loaders</div>
<div className="note">
Loaders are used to show the state of a progress.
</div>
<div className="code">
   <xmp>
{`import LoadSpan from 'Funcss/Components/LoadSpan';
import Ellipsis from 'Funcss/Components/Ellipsis';
<LoadSpan funcss="success" />
<Ellipsis funcss="light" />
`}
   </xmp>
</div>

<div className="preview">
   <LoadSpan funcss="success" />
   <Ellipsis funcss="light" />
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