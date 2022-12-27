import React from "react";
import Footer from "../components/Footer";
import Head from "next/head";

function Colors() {

    return (
        <section className="padding-bottom-20">
          <Head>
          <title>Funcss colors - Funcss Framework</title>
          <meta name="description" content="
         use cool and amazing css colors to create awesome websites,
         using greate colors will make your website more impressive
       " />
    <meta
    name="keywords"
    content="fun, css, colors, css colo pallete"
    />
          </Head>
              <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding ads content-middle light">
               <div id="container-8efab60a26b5c40a3a52aab9bdb98896"></div>
             </div>
             <div className="section">
               <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
               <a href="#background" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Background Color</div></a>
               <a href="#backgroundHover" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Hoverable Background</div></a>
               <a href="#textColor" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Text Color</div></a>
               <a href="#hoverText" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Hoverable Text</div></a>
  
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="header h1 text-lighter text-indigo">
              Css Text Colors And Background - Funcss Framework
             </h1>
             <div className="h4">
                Good colors makes a greate<br /> impression.
             </div>

             <div className="section hr"></div>
            </div>
          
            <div className="container" id="introduction">
                <div className="topic h4">Getting started with colors</div>
                <div className="note">
                Fun css colors can be use to change the background of your text, the color of your text and hover color effects. <br />
                You can use any of the colors below in building your website.
                </div>
                <div className="note">
         <span className="badge red color-bage"> red </span>
         <span className="badge blue color-bage"> blue </span>
         <span className="badge green color-bage"> green </span>
         <span className="badge pink color-bage"> pink </span>
         <span className="badge yellow color-bage"> yellow </span>
         <span className="badge black color-bage text-white"> black </span>
         <span className="badge brown color-bage"> brown </span>
         <span className="badge indigo color-bage"> indigo </span>
         <span className="badge purple color-bage"> purple </span>
         <span className="badge deep-purple color-bage"> deep-purple </span>
         <span className="badge sand color-bage"> sand </span>
         <span className="badge light color-bage"> light </span>
         <span className="badge light-blue color-bage"> light-blue </span>
         <span className="badge cyan color-bage"> cyan </span>
         <span className="badge light-green color-bage"> light-green </span>
         <span className="badge orange color-bage"> orange </span> 
         <span className="badge teal color-bage"> teal </span> 
         <span className="badge khaki color-bage"> khaki </span> 
                </div>
            </div>

            <div className="container padding-top-20" id="background">
                <div className="topic h4">Background Color</div>
                <div className="note">
                You can use any of the color listed above to change the background color of your element by just
                writing the value of the color as a class.
                </div>
                <div className="code">
             <xmp>
 {
   `
<div class="indigo padding text-white section">
   <div class="text-big">Indigo</div>
    <div>
     My background color is indigo <br />
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
</div>
   `
 }
             </xmp>
               </div>
               <div className="preview">
    <div className="indigo card padding text-white section">
      <div className="text-big">Indigo</div>
      <div>
        My background color is indigo <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>

               </div>
            </div>
            
            <div className="container padding-top-20" id="backgroundHover">
                <div className="topic h4">Background Hover Color</div>
                <div className="note">
                The
                <span className="badge">hover-value</span>
                is use to change the background color of an element when you hover on it.The value can be any of our framework colors listed above
                You can use any of the color listed above to change the background color of your element when you hover on the element.
                writing the value of the color as a class.
                </div>
                <div className="code">
             <xmp>
{`
<div class="indigo card hover-deep-purple padding text-white section">
  <div class="text-x-large">Indigo To Deep-Purple</div>
   <div>
     Hover to chnage my background to deep-purple<br />
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
   </div>
</div>
<div class="purple card padding hover-indigo text-white section">
  <div class="text-x-large">Purple - Indigo</div>
   <div>
    Hover to change my background to indigo<br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
   </div>
</div>
`}
             </xmp>
               </div>
               <div className="preview">
  <div className="indigo card hover-deep-purple padding text-white section">
      <div className="text-x-large">Indigo To Deep-Purple</div>
      <div>
        Hover to chnage my background to deep-purple<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>
    <div className="purple card padding hover-indigo text-white section">
      <div className="text-x-large">Purple - Indigo</div>
      <div>
       Hover to change my background to indigo<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
      </div>
    </div>
               </div>
            </div>

            <div className="container padding-top-20" id="textColor">
                <div className="topic h4">Change Text Color</div>
                <div className="note">
                The
                <span className="badge">text-value</span>
                is use to change the text color of an html element, the value is any of our css framework colors you wish to use for your text color.
                </div>
                <div className="code">
<xmp>{`<div class="text-deep-purple h2">Deep Purple Text</div>
<div class="text-pink h2">Pink Text</div>
`}</xmp>
               </div>
               <div className="preview">
<div>
  <div className="section">
  <div className="text-deep-purple h2">Deep Purple Text</div>
    <div className="text-deep-purple">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>
  <div className="section">
  <div className="text-pink h2">Pink Text</div>
    <div className="text-pink">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>


</div>

               </div>
            </div>
            <div className="container padding-top-20" id="hoverText">
                <div className="topic h4">Hover Text Color</div>
                <div className="note">
                The
                <span className="badge">hover-text-value</span>
                 class is use to change the text color of an html element when you hover on the element, the value is any of our css framework colors you wish to use for your hover effect.
                </div>
                <div className="code">
             <xmp>
{`
  <div class="h2 text-cyan hover-text-indigo">Cyan - Indigo</div>
    <div class="text-cyan hover-text-indigo">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>

  <div class="h2 text-indigo hover-text-deep-purple">Indigo - Deep-Purple</div>
    <div class="text-indigo hover-text-deep-purple">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
`}
             </xmp>
               </div>
               <div className="preview">
<div>
  <div className="section">
  <div className="h2 text-cyan hover-text-indigo">Cyan - Indigo</div>
    <div className="text-cyan hover-text-indigo">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>
  <div className="section">
  <div className="h2 text-indigo hover-text-deep-purple">Indigo - Deep-Purple</div>
    <div className="text-indigo hover-text-deep-purple">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi, maxime non. Voluptatem doloremque delectus voluptas consequuntur eum!
    </div>
  </div>

</div>

               </div>
            </div>


<div className="container">
    <div className="note">
        <div className="note-title">Note</div>
        <div>
            Choosing greate color will make your website nice and uniform, you should try to choose at least two colors 
            for your primary colors, primary colors are colors you often use much when designing a website
        </div>
    </div>
</div>

<Footer />
                </div>


                </div>
            
        </section>
    );
}

export default Colors;