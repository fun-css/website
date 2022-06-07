import React from 'react';
import Footer from '../components/Footer';
import Head  from 'next/head';
function Typography() {
    let fontSize = `
    <div class="card padding white">
    <div class="text-jumbo">This is jumbo</div>
    <div class="text-bigger">This is bigger</div>
    <div class="text-big">This is big</div>
    <div class="text-xx-large">This is xx-large</div>
    <div class="text-x-large">This is x-large</div>
    <div class="text-larger">This is larger</div>
    <div class="text-large">This is large</div>
    <div class="text-medium">This is medium</div>
    <div class="text-small">This is small</div>
    <div class="text-smaller">This is smaller</div>
    <div class="text-x-small">This is x-small</div>
    <div class="text-xx-small">This is xx-small</div>
    `
    let font = `
    <div class="card padding white round-edge">
    <div>
     <div class="blue padding text-white">
     <h2 class="poppins">Poppins Font</h2>
     <div class="poppins">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
     </div>
     </div>
    </div>
    </div>
    <div class="card section padding white round-edge">
    <div>
     <div class="indigo padding text-white">
     <h2 class="sofia">Sofia Font</h2>
     <div class="sofia">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
     </div>
     </div>
    </div>
    </div>
    <div class="card section padding white round-edge">
    <div>
     <div class="deep-purple padding text-white">
     <h2 class="lato">Lato</h2>
     <div class="lato">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
     </div>
     </div>
    </div>
    </div>
    <div class="card section padding white round-edge">
    <div>
     <div class="deep-purple padding text-white">
     <h2 class="rubik">Rubik</h2>
     <div class="rubik">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
     </div>
     </div>
    </div>
    </div>
    
    `
    return (
        <section>
             <Head>
          <title>Funcss Typography | Text Formatting</title>
          <meta name="description" content="
         Learn how to create good text format and use good fonts to 
         make your website look much more greate
         " />
    <meta
    name="keywords"
    content="fun, css, colors, css color pallete"
    />
          </Head>
              <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding ads content-middle light">
               <div id="container-8efab60a26b5c40a3a52aab9bdb98896"></div>
             </div>
             <div className="section">
               <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
               <a href="#fontSize" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Font Size</div></a>
               {/* <a href="#font" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Font Family</div></a> */}
               <a href="#formatting" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Text Formatting</div></a>
  
             </div>
            </div>
                <div className="main-content">
                <div className="container" id="introduction">
             <h1 className="h1 header text-lighter text-indigo">
                Css Typography Text Formatting And Fonts - Funcss Framework
             </h1>
             <div className="h4">
                Good Text Format Shows Greate<br /> Web Content.
             </div>
             <div className="section hr"></div>
            </div>
         
            <div className="container padding-top-20" id="fontSize">
                <div className="topic h4">Change Font Size</div>


 <div className="note">
 The
 <span className="badge">text-value</span>is use to give font size to your text, You can change the font size of your
 text with the following Values
 <li>jumbo</li>
    <li>bigger</li>
    <li>big</li>
    <li>xx-large</li>
    <li>x-large</li>
    <li>larger</li>
    <li>large</li>
    <li>medium</li>
    <li>small</li>
    <li>smaller</li>
    <li>x-small</li>
    <li>xx-small</li>
 </div>

 <div>

 </div>
  <div className="code">
   <xmp>
       {fontSize}
   </xmp>
 </div>
   <div className="preview">
<div>
  <div className="card padding white">
  <div className="text-jumbo">This is jumbo</div>
  <div className="text-bigger">This is bigger</div>
  <div className="text-big">This is big</div>
  <div className="text-xx-large">This is xx-large</div>
  <div className="text-x-large">This is x-large</div>
  <div className="text-larger">This is larger</div>
  <div className="text-large">This is large</div>
  <div className="text-medium">This is medium</div>
  <div className="text-small">This is small</div>
  <div className="text-smaller">This is smaller</div>
  <div className="text-x-small">This is x-small</div>
  <div className="text-xx-small">This is xx-small</div>
  </div>
</div>

               </div>
            </div>
            {/* <div className="container padding-top-20" id="font">
                <div className="topic h4">Fonts And Font Family</div>

 <div className="note">
 The
 <span className="badge">font</span>
  class is use to specify the font of your text, you just type the name of the font to change it.
  The default font for the framework is poppins, sans-serif. So you dont need to spacify this font family before 
  you can use it.
 </div>
 <ul className="list bordered hoverable light">
    <li className="header">Fonts</li>
    <li>Open-sans</li>
    <li>poppins</li>
    <li>sofia</li>
    <li>lato</li>

  </ul>

  <div className="code">
   <xmp>
   {`<div>
  <div className="card padding white round-edge">
  <div>

  </div>
  </div>
  <div className="card section padding white">
  <div>
   <div className="indigo padding text-white">
   <div className="sofia h1">Sofia Font</div>
   <div className="sofia">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
   </div>
  </div>
  </div>
  <div className="card section padding white">
  <div>
   <div className="deep-purple padding text-white">
   <div className="lato h1">Lato</div>
   <div className="lato">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
   </div>
  </div>
  </div>
  <div className="card section padding white">
  <div>
   <div className="blue padding text-white">
   <div className="open-sans h1">Open Sans</div>
   <div className="open-sans">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
   </div>
  </div>
  </div>

</div>
`}
   </xmp>
 </div>
   <div className="preview">
<div>

  <div className="card section padding white">
  <div>
   <div className="indigo padding text-white">
   <div className="sofia h1">Sofia Font</div>
   <div className="sofia">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
   </div>
  </div>
  </div>
  <div className="card section padding white">
  <div>
   <div className="deep-purple padding text-white">
   <div className="lato h1">Lato</div>
   <div className="lato">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
   </div>
  </div>
  </div>
  <div className="card section padding white">
  <div>
   <div className="blue padding text-white">
   <div className="open-sans h1">Open Sans</div>
   <div className="open-sans">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
   </div>
  </div>
  </div>

</div>

               </div>
            </div> */}

<div className="container padding-top-40" id="formatting">
<div className="topic h4">Text Formatting</div>
<table className="table width-100-p stripped">
    <tr>
        <td>Class</td>
        <td>discription</td>
        <td>syntax</td>
    </tr>
    
        <tr>
            <td>bold</td>
            <td>Make a bold text.</td>
            <td><div> class = {"text-bold"}</div></td>
        </tr>
        <tr>
            <td>underline</td>
            <td>To underline a text</td>
            <td><div> class = {"underline"}</div></td>
        </tr>
        <tr>
            <td>overline</td>
            <td>To make text overline</td>
            <td><div> class = {"overline"}</div></td>
        </tr>
        <tr>
            <td>line through</td>
            <td>To create a line through text</td>
            <td><div> class = {"line-through"}</div></td>
        </tr>

</table>

<div className="note section" id="note">
<div className="note-title">Note</div>
<div>
    Make sure to always use greate fonts when creating a website.
</div>
</div>
</div>


<Footer />
                </div>

            </div>
        
        </section>
    );
}

export default Typography;