import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
function Buttons() {
    const simple = `
    <button class='button indigo  text-white'>Simple Button</button>
    `
    const raised = `
    <button class='button deep-purple text-white card'>Raised Button</button>
    `
    const circle = `
    <button class='button indigo card text-white float height-50 width-50'>Float</button>
    `
    return (
        <section>
                     <Head>
          <title>Css Buttons | Funcss Framework</title>
          <meta name='description' content='
          Learn to create cool css buttons, round buttons, ripple effect buttons, iconic buttons and animated buttons
       ' />
    <meta
    name="keywords"
    content="fun, css, css margin, css padding, css, width, css show and hide content based on screen width"
    />
          </Head>
        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding ads content-middle light">
             <div id="container-8efab60a26b5c40a3a52aab9bdb98896">Ads</div>
             </div>
             <div className="section">
               <a href="#simpleButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Button</div></a>
               <a href="#raisedButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Raised Button</div></a>
               <a href="#circularButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Circular Button</div></a>
               <a href="#fullWidthButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Full Width Button</div></a>
               <a href="#rippleButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Ripple Effect Button</div></a>
               <a href="#hoverUpButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Hover Up Button</div></a>
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="h1 header text-indigo">
                Css Buttons - Funcss Framework
             </h1>
             <div className="h4">
              Learn how to create nice css buttons, round buttons, icons in buttons, ripple effect on buttons and animated buttons.
             </div>

             <div className="section hr">
    
             </div>
            </div>

<div className='container'>
    <div className='row'>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
                <div className='text-large'>Simple Button</div>
                <div className='hr section'></div>
                <button className='button indigo  text-white'>Simple Button</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Raised Button</div>
                <div className='hr section'></div>
                <button className='button deep-purple text-white card'>Raised Button</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Circular Button</div>
                <div className='hr section'></div>
                <button className='button indigo card text-white float height-50 width-50'>Float</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Full width Button</div>
                <div className='hr section'></div>
                <button className='button full-width green text-white card'>Full width</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Ripple Effect Button</div>
                <div className='hr section'></div>
                <button className='button full-width ripple pink text-white card'>Ripple Effect</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Hover Up Button</div>
                <div className='hr section'></div>
                <button className='button full-width ripple teal card hover-up'>Hover up</button>
            </div>
        </div>
    </div>
</div>

<div className="container padding-top-40" id="simpleButton">
    <div className="h4 topic">Simple Button</div>
<div className="note">
    using the class <span className="badge">button</span> will create a simple cool button, you can use the color className to change the color of your button.
</div>
    <div className="code">
        <xmp>
         {`
<button class='button indigo  text-white'>Indigo Button</button>

  <button class='button pink  text-white'>Pink Button</button>

<button class='button purple  text-white'>purple Button</button>      
         `}
        </xmp>
    </div>
    <div className="preview">
    <div className='padding border card'>
    <div className='text-large'>Simple Button</div>
    <div className='hr section'></div>
    <button className='button indigo  text-white'>Indigo Button</button>
    <button className='button pink  text-white'>Pink Button</button>
    <button className='button purple  text-white'>purple Button</button>
     </div>

    </div>
</div>

<div className="container padding-top-40" id="raisedButton">
    <div className="h4 topic">Raised Button</div>
<div className="note">
    using the class <span className="badge">card</span> will create a shadow around your button.
</div>
    <div className="code">
<xmp>{`<button class='button deep-purple text-white card'>Raised Button</button>`}</xmp>
    </div>
    <div className="preview">
    <div className='padding border card'>
    <div className='text-large'>Raised Button</div>
        <div className='hr section'></div>
        <button className='button deep-purple text-white card'>Raised Button</button>
      
    </div>

    </div>
</div>
<div className="container padding-top-40" id="circularButton">
    <div className="h4 topic">Circular Button</div>
<div className="note">
    using the class <span className="badge">float</span> will create a circular button, make sure to add a height and a width of the same value
    to create a perfect circle.
</div>
    <div className="code">
     <xmp>{`<button class='button indigo card text-white float height-50 width-50'>Float</button>`}</xmp>
    </div>
    <div className="preview">
    <div className='padding border card'>
      <div className='text-large'>Circular Button</div>
          <div className='hr section'></div>
          <button className='button indigo card text-white float height-50 width-50'>Float</button>
      </div>
    </div>
</div>
<div className="container padding-top-40" id="fullWidthButton">
    <div className="h4 topic">Full Width Button</div>
<div className="note">
   The<span className="badge">full-width</span> class is use to create a button with a width of 100%.
</div>
    <div className="code">
        <xmp>
            {`
<button class='button full-width indigo text-white card'>Full width</button>
<button class='button full-width blue text-white card'>Full width</button>
           `}
        </xmp>
    </div>
    <div className="preview">
    <div className='padding border card'>
     <div className='text-large'>Full width Button</div>
         <div className='hr section'></div>
         <button className='button full-width indigo text-white card'>Full width</button>
         <button className='button full-width blue text-white card'>Full width</button>
     </div>

    </div>
</div>
<div className="container padding-top-40" id="rippleButton">
    <div className="h4 topic">Ripple Effect Button</div>
<div className="note">
   The<span className="badge">ripple</span> class add an effect when you click on the button.
</div>
    <div className="code">
        <xmp>
            {`<button class='button ripple pink text-white card'>Ripple Effect</button>`}
        </xmp>
    </div>
    <div className="preview">
    <div className='padding border card'>
    <div className='h2'>Ripple Effect Button</div>
    <div>Click on the button to see the effect </div>
        <div className='hr section'></div>
        <button className='button ripple pink text-white card'>Ripple Effect</button>
    </div>

    </div>
</div>
<div className="container padding-top-40" id="hoverUpButton">
    <div className="h4 topic">Hover Up Button</div>
<div className="note">
   The<span className="badge">hover-up</span> class add a hover up effect when you hover on the button.
</div>
    <div className="code">
        <xmp>
            {`<button class='button ripple teal card hover-up text-white'>Hover up</button>`}
        </xmp>
    </div>
    <div className="preview">
    <div className='padding border card'>
    <div className='text-large'>Hover Up Button</div>
        <div className='hr section'></div>
        <button className='button ripple teal card hover-up text-white'>
            Hover up
        </button>
    </div>

    </div>
</div>
<Footer />
</div>
</div>
        </section>
    );
}

export default Buttons;