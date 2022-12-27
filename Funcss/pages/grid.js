import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
import Script from "next/script"
import Grid from '../Funcss/Components/Grid';
import Col from '../Funcss/Components/Col';
import Typography from '../Funcss/Components/Typography';
function grid() {
    const grid = `
    <div class="row">
    <div class="col margin-top-20 padding sm-12 md-6 lg-6 light height-100">sm-12 md-6 lg-6</div>
    <div class="col margin-top-20 padding sm-12 md-6 lg-6 green height-100">sm-12 md-6 lg-6</div>
    <div class="col margin-top-20 padding sm-6 md-6 lg-4 green height-100">sm-6 md-6 lg-4</div>
    <div class="col margin-top-20 padding sm-6 md-6 lg-8 light height-100">sm-6 md-6 lg-8</div>
    <div class="col margin-top-20 padding sm-12 md-12 lg-12 light height-100">sm-12 md-12 lg-12</div>
    
    </div>
    `
    return (
        <section>
            <Script src="/js/ads.js" />
                    <Head>
          <title>Css Grid | Funcss Framework</title>
          <meta name='description' content='
       Learn to create responsive css grid layout to make your website much responsive.
       ' />
    <meta
    name="keywords"
    content="fun, css, css margin, css padding, css, width, css show and hide content based on screen width"
    />
          </Head>
        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding ads content-middle light">
              
             </div>
             <div className="section">
               <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
               <a href="#responsiveness" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Reponsive Grid</div></a>
               <a href="#layout" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Layout</div></a>
               <a href="#note" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Note</div></a>
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="header text-indigo">
                Css Grid And Responsiveness - Funcss Framework
             </h1>
             <div className="h5 width-500-max">
                Grid makes your website much more responsive. Create a website 
                which fit every screen size.
             </div>

        
            </div>

            <div className="container" id="introduction">
                <div className='note'>
                Fun Grids is a modern responsive grid layout for developing websites.
                The grid system partition your device width in to 12 sections. Each section covers a width of 8.33333% of your device width.

                </div>

  
            </div>

            <div className="container">
            <table className="table">

    <tr>
        <td>Class</td>
        <td>discription</td>
        <td>syntax</td>
    </tr>
 
    <tr>
            <td>.row</td>
            <td>creating grid rows</td>
            <td><div> class = {"row"}</div></td>
        </tr>
        <tr>
            <td>.col</td>
            <td>creating grid columns.</td>
            <td><div> class = {"col"}</div></td>
        </tr>
        <tr>
            <td>sm</td>
            <td>
                How many columns the grid will cover on  small screen. (Mobile phones)
            </td>
            <td><div> class = {"sm-value"}</div></td>
        </tr>
        <tr>
            <td>md</td>
            <td>
            How many columns the grid will cover on  medium screen. (Tablet)
            </td>
            <td><div> class = {"sm-value"}</div></td>
        </tr>
        <tr>
            <td>lg</td>
            <td>
            How many columns the grid will cover on large screen. (Laptop)
            </td>
            <td><div> class = {"sm-value"}</div></td>
        </tr>
 
</table>

<div className="row padding-top-20">
    <div className="col lg-1 sm-1 md-1 pink">1</div>
    <div className="col lg-1 sm-1 md-1 green">2</div>
    <div className="col lg-1 sm-1 md-1 pink">3</div>
    <div className="col lg-1 sm-1 md-1 green">4</div>
    <div className="col lg-1 sm-1 md-1 pink">5</div>
    <div className="col lg-1 sm-1 md-1 green">6</div>
    <div className="col lg-1 sm-1 md-1 pink">7</div>
    <div className="col lg-1 sm-1 md-1 green">8</div>
    <div className="col lg-1 sm-1 md-1 pink">9</div>
    <div className="col lg-1 sm-1 md-1 green">10</div>
    <div className="col lg-1 sm-1 md-1 pink">11</div>
    <div className="col lg-1 sm-1 md-1 green">12</div>
</div>

            </div>

            <div className="container">
            <div className="section">
                <div>To use our grid system, you must create an html element with the class name of row. 
                    Then you can create columns inside the row using the <span className="badge">col</span> class. <br />
                    Our framework divides you screen into 12 sections in which every <br /> 8.33333% of you screen width makes a section <br />
                    Therefore one section makes up 8.33333% with six section covering 49.33333% of your screen, or half of you screen. <br />
                    12 sections covers 99.33333% of your screen. <br />
                </div>
        </div>

        <div className="section">
        <span className="badge">sm-sections</span>This shows how many sections the element will cover in small screens. <br />
        <span className="badge">md-sections</span>This shows how many sections the element will cover in medium screens. <br />
        <span className="badge">lg-sections</span>This shows how many sections the element will cover in large screens.

        </div>
            </div>
<div className="container padding-top-40" id="responsiveness">
    <div className="h4 topic">Responsive Grid</div>
    <div className="code">
<xmp>{`import Grid from 'Funcss/Components/Grid';
import Col from 'Funcss/Components/Col';
import Typography from 'Funcss/Components/Typography';
<Grid>
    <Col sm={12} md={6} lg={8} funcss="padding border light">
    <Typography text="
    100% width on small screen, 
    50% width on medium screen
    67% width on large screen
    " color="success"/>
    </Col>
    <Col sm={12} md={6} lg={4} funcss="padding border">
        <Typography text="
    100% width on small screen, 
    50% width on medium screen
    34% width on large screen" color="success"/>
    </Col>
    <Col sm={6} md={12} lg={6} funcss="padding border">
    <Typography text="
    50% width on small screen, 
    12% width on medium screen
    50% width on large screen
    " color="success"/>
    </Col>
    <Col sm={6} md={12} lg={6} funcss="padding border light">
        <Typography text="
    50% width on small screen, 
    100% width on medium screen
    50% width on large screen" color="success"/>
    </Col>
</Grid>`}</xmp>
    </div>
    <div className="preview">
 <div className="h3 text-lighter">Shrink your browser to see the effect</div>
 <Grid>
    <Col sm={12} md={6} lg={8} funcss="padding border light">
    <Typography text="
    100% width on small screen, 
    50% width on medium screen
    67% width on large screen
    " color="success"/>
    </Col>
    <Col sm={12} md={6} lg={4} funcss="padding border">
        <Typography text="
    100% width on small screen, 
    50% width on medium screen
    34% width on large screen" color="success"/>
    </Col>
    <Col sm={6} md={12} lg={6} funcss="padding border">
    <Typography text="
    50% width on small screen, 
    12% width on medium screen
    50% width on large screen
    " color="success"/>
    </Col>
    <Col sm={6} md={12} lg={6} funcss="padding border light">
        <Typography text="
    50% width on small screen, 
    100% width on medium screen
    50% width on large screen" color="success"/>
    </Col>
</Grid>

    </div>
</div>
<div className="container padding-top-40" id="layout">
<div className="h4 topic">Grid Layout</div>
<div className="note">
    Grids are very important when creating a websites, they help create a responsive website with css flex box.
</div>
    <div className="code">
        <xmp>
            {grid}
        </xmp>
    </div>
    <div className="preview">

    <div className="row">
<div className="col padding sm-12 md-12 lg-12 indigo padding-20">
    <div className="text-white h4">Navigation Bar</div>
</div>
<div className="col padding sm-12 md-12 lg-6 deep-purple"> 
<div className="text-center text-white h4">Body One</div>

<div className="section text-white">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum
</div>
 </div>
<div className="col padding sm-12 md-12 lg-6 light"> 
<div className="text-center h4">Body Two</div>
<div className="section">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum
</div>
 </div>

 <div className="col padding-20 sm-12 md-12 lg-12 green">
     <div className="h4">Footer</div>
 </div>
</div> 

    </div>
</div>


<div className="container padding-top-40" id="note">
    <div className="note">
        <div className="note-title">Note</div>
        <div>
Using grid system makes your website responsive to fit all screen size.
        </div>
    </div>
</div>

<Footer />

        </div>
        
        </div>

        </section>
    );
}

export default grid;