import React from 'react';
import Footer from '../components/Footer';
import  Head  from 'next/head';
import Typography from "../Funcss/Components/Typography"
import Breadcrumb from "../Funcss/Components/Breadcrumb"
import Link from "next/link"
function Gettingstarted() {

    return (
        <section>

          <Head>
            <title>Funcss Getting Started</title>
          <meta name='description' content='
        Getting started with funcss framework, download
        the funcss framework or paste the cdn in your head tag
        for free and begin creating your dream projects.
    ' />
    <meta
    name="keywords"
    content="fun, css, download, framework,cdn, clone,"
    />
    
          </Head>
                        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="section">
               <a href="#cdn" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">CDN</div></a>
               <a href="#downloadzip" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Download Zip</div></a>
               <a href="#githubcli" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Github CLI</div></a>
               <a href="#ssh" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">SSH</div></a>
               <a href="#https" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">HTTPS</div></a>
  
             </div>
            </div>
                <div className="main-content">
                <div className="container">
                  <Link href= "/">
                    <a>Home</a>
                  </Link>
                  <Breadcrumb type="slash" />
                  <Link href= "#">
                    <a>Gettingstarted</a>
                  </Link>
             <h1 className="header text-indigo">
                 Getting Started
             </h1>
             <div className="h4 width-500-max">
               Download the funcss framework to start creating awesome responsive website for free. You can also use the funcss cdn.
             </div>
  
            </div>

     
<div className="container" id="cdn">
  <div className="h4 topic">
      Using CDN
  </div>
  <div className="">
    You can start using Fun css by coping the CDN and paste it in your head tag.
  </div>
  <div className="note">
    <div className="note-title">Note</div>
    <div>
        You can use the cdn for development mode, test purposes and learning.
        It is not recommended to use the cdn for production purpose. Download and use
        the fun css files for production mode.

    </div>
    </div>

    <div>
    <div className="code padding-top-50">
<xmp>{`<!-- Compiled and minified css -->
<link rel="stylesheet" href="https://fun-css.github.io/funcss/css/fun.css"/>

<!-- Compiled and minified jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<!-- Compiled and minified javascript -->
<script src="https://fun-css.github.io/funcss/js/fun.js"> </script>

`}</xmp>
    </div>
    </div>

</div>
<div className="container" id="import">
  <div className="h4 topic">
      Css Import
  </div>

  <div className="note">
    <div>
      You can simply import the framework to start using.
    </div>
    </div>

    <div>
    <div className="code padding-top-50">
<xmp>{`<!-- Compiled and minified css -->
@import url("https://fun-css.github.io/funcss/css/fun.css")
`}</xmp>
    </div>
    </div>

</div>

    <div className="container" id="downloadzip">
      <div className="topic  h4">
            Download The Css Framework
     </div>
<div className="note">
You can use the link below to download our framework files or you can clone the git repo. It is recommended to use the downloaded files 
when creating a website or web application for production purpose.
</div>

<div>
   <a href="https://codeload.github.com/fun-css/funcss/zip/refs/heads/main">
   <button className="button text-white hover-up margin-top-20 card indigo ripple">
     Download Fun Css
     <span className="animate-up-down margin-left-10"><i className="fas fa-download"></i></span>
  </button> 
   </a>
</div>
  

<div className="padding-top-20">

<div className="topic h4">Clone The Framework</div>
<div className='note'>
  Learn how to clone github repo, to get started with cloning our github repo.
</div>
<div className="section">
<iframe className="width-100-p height-300" src="https://www.youtube.com/embed/bKuE-afbRLU" title="How to clone github repo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
<div className='section'  id="githubcli">
<div className="text-large">Github CLI:</div>
<div className="code">
<xmp>gh repo clone fun-css/funcss</xmp>
</div>   
</div>

<div id="ssh" className='section'>
<div className="text-large">SSH:</div>
<div className="code">
<xmp>git@github.com:fun-css/funcss.git</xmp>
</div>   
</div>

<div id="https" className='section'>
<div className="text-large">HTTPS:</div>
<div className="code">
<xmp>https://github.com/fun-css/funcss.git</xmp>
</div>   
</div>

</div>

</div>

<div className="container">
  <div className="h4">Responsive Meta Tag</div>
  <div className="note">
    Funcss framework is a mobile friendly framework that fit all screen sizes, it is 
    recommended to always paste the responsive meta tag in your <span className="badge">head</span> tag to ensure good
    renduring and good scaling.
  </div>
  <div className="code">
  <xmp>
{`<meta name="viewport" content="width=device-width, initial-scale=1">`}
  </xmp>
  </div>
</div>
   {/* <div className="container">
     <div className="row">
       <div className="col sm-12 md-6 lg-6">
         <div className="row-flex success padding roud-edge text-white">
           <div className="margin-right-10"><i className="fas fa-check text-indigo"></i></div>
           <div>
             <div className="h3">Simple classNamees</div>
             <div className="opacity-4">
            santium ex assumenda dolore. Quis similique fugiat, est eius delectus quae?
             </div>
           </div>
         </div>
       </div>
       <div className="col sm-12 md-6 lg-6"></div>
     </div>
   </div> */}
   <Footer />

                </div>

              </div>
    </section>


        
    );
}

export default Gettingstarted;