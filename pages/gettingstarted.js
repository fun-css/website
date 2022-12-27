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
                  <p>
                  <h1 className="header text-indigo">
                 Getting Started
             </h1>
             <div className="h5 width-500-max">
               Download the funcss framework to start creating awesome responsive website for free. You can also use the funcss cdn.
             </div>
                  </p>
                </div>


    <div className="container" id="downloadzip">
      <div className="topic  h4">
            Download Funcss
     </div>
<div className="note">
You can use the link below to download our framework files or you can clone the git repo. It is recommended to use the downloaded files 
when creating a website or web application for production purpose.
</div>

<p>
   <a href="https://codeload.github.com/fun-css/funcss/zip/refs/heads/main">
   <button className="button hover-up card success">
     Download Fun Css
     <span className="animate-up-down margin-left-10"><i className="fas fa-download"></i></span>
  </button> 
   </a>
</p>
  

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