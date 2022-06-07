import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
function Helpers() {
    const height = `
    <div>
  <div class="height-300 card padding round-edge  indigo text-white section hover-shadow">
   <h2>300px</h2>
   <div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
 </div>
  <div class="height-200 card padding round-edge  deep-purple hover-shadow text-white section">
   <h2>200px</h2>
   <div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
 </div>
</div>
    `
    const width = `
    <div>
  <div class="width-300 card padding round-edge  indigo text-white section hover-shadow">
   <h2>300px</h2>
   <div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
 </div>
  <div class="width-100-p card padding round-edge  deep-purple hover-shadow text-white section">
   <h2>100%</h2>
   <div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
 </div>
</div>

    `

    const padding = `
    <div>
  <div class="card padding round-edge  indigo text-white section hover-shadow">
   <h2>Padding Class</h2>
   <div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
 </div>
  <div class="width-100-p card padding-top-50 round-edge  deep-purple hover-shadow text-white section padding">
   <h2>50px padding Top</h2>
   <div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
 </div>
  <div class="width-100-p card padding-bottom-40 round-edge blue hover-shadow text-white section padding">
   <h2>40px padding bottom</h2>
   <div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
 </div>
  <div class="width-100-p card padding-left-40 round-edge pink hover-shadow text-white section padding">
   <h2>40px padding Left</h2>
   <div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
   </div>
 </div>

</div>
    `
    const margin = `
    <div class="width-100-p border padding hover-shadow section">
    <div class="green margin-top-50 padding card round-edge text-white">
    <h2>50px Margin Top</h2>
      <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
      </div>
   </div>
    </div>
      <div class="width-100-p border padding hover-shadow section">
    <div class="margin-bottom-50 indigo padding card round-edge text-white">
    <h2>40px Margin Bottom</h2>
      <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
      </div>
   </div>
    </div>
   
    `
    return (
      <section>

      <Head>
      <title>Funcss Helpers - Funcss Framework</title>
      <meta name='description' content='
    Learn about css helpers like, margin, padding, height, width, showing 
    and hiding content base on screen width.
   ' />
<meta
name="keywords"
content="fun, css, css margin, css padding, css, width, css show and hide content based on screen width"
/>
      </Head>
      
                 <div className="content-wrapper">
        <div className="sub-content padding">
         <div className="border padding content-middle light ads">
         <div className=''>
         <div id="container-8efab60a26b5c40a3a52aab9bdb98896"></div>
         </div>
         </div>
         <div className="section">
           <a href="#height" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Height</div></a>
           <a href="#width" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Width</div></a>
           <a href="#padding" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Padding</div></a>
           <a href="#margin" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Margin</div></a>
           <a href="#helpers" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Helpers</div></a>
         </div>
        </div>
    <div className="main-content">
            <div className="container">
         <h1 className="h1 text-lighter text-indigo header">
             Css Width, Margin, Height, Padding, Hide And Show Content Based On Screen Size - Funcss Helpers
         </h1>
         <div className="h4">
           Reduce coding stress and increase <br />Your Production speed.
         </div>
         <div className="section hr"></div>
    </div>
        <div className="container padding-top-20" id="height">
            <div className="topic h4">Css Height</div>
<div className="note">
<div>
The <span className="badge">height-value</span> and the  <span className="badge">height-value-p</span> are use to give height to html elements <br />
<span className="badge">height-value</span> gives a height with the value. eg  <span className="badge">height-300</span> give a 300px height to the element. <br />
<span className="badge">height-value-p</span> gives a height in percentage with the value.Example, <span className="badge">height-100-p</span> will give height of 100 percent.
The values that can be use are 10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900 and 1000
</div>
</div>

<div className="code">
<xmp>
{`
<div>
<div class="height-300 card padding round-edge  indigo text-white section hover-shadow">
<h2>300px</h2>
<div>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
<div class="height-200 card padding round-edge  deep-purple hover-shadow text-white section">
<h2>200px</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
</div>
`}
</xmp>
</div>
<div className="preview">
<div>
<div className="height-300 card padding round-edge  indigo text-white section hover-shadow">
<h2>300px</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
<div className="height-200 card padding round-edge  deep-purple hover-shadow text-white section">
<h2>200px</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
</div>

           </div>
</div>
        <div className="container padding-top-20" id="width">
            <div className="topic h4">Css Width</div>
<div className="note">
<div>
The <span className="badge">width-value</span> and the  <span className="badge">width-value-p</span> are use to give width to html elements <br />
<span className="badge">width-value</span> gives a width with the value in px.
<span className="badge">width-value-p</span> gives a width in percentage with the value.
Example, width-100-p will give width of 100 percent. <br />
The following values can be use to give a width to your element,
<span className="badge"> 10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900 and 1000</span>
</div>
</div>

<div className="code">
<xmp>
{width}
</xmp>
</div>
<div className="preview">
<div>
<div className="width-300 card padding round-edge  indigo text-white section hover-shadow">
<h2>300px</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
<div className="width-100-p card padding round-edge  deep-purple hover-shadow text-white section">
<h2>100%</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
</div>

           </div>
</div>
<div className="container padding-top-20" id="padding">
    <div className="topic h4">Css Padding</div>

<div className="note">
The  <span className="badge">padding</span> class is use to give a padding of 10px on all sides. <br />
To give a padding at the top, the <span className="badge">padding-top-value</span> is use. <br />
To give a padding at the bottom, the <span className="badge">padding-bottom-value</span> is use. <br />
To give a padding at the left, the <span className="badge">padding-left-value</span> is use. <br />
To give a padding at the right, the <span className="badge">padding-right-value</span> is use. <br />
The values  for our css padding are <span className="badge">10,20,30,40,50,60,70,80,90 and 100</span>
</div>

<div className="code">
<xmp>
{padding}
</xmp>
</div>
<div className="preview">
<div>
<div className="card padding round-edge  indigo text-white section hover-shadow">
<h2>Padding Class</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
<div className="width-100-p card padding-top-50 round-edge  deep-purple hover-shadow text-white section padding">
<h2>50px padding Top</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
<div className="width-100-p card padding-bottom-40 round-edge blue hover-shadow text-white section padding">
<h2>40px padding bottom</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
<div className="width-100-p card padding-left-40 round-edge pink hover-shadow text-white section padding">
<h2>40px padding Left</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>

</div>

           </div>
</div>
<div className="container padding-top-20" id="margin">
    <div className="topic h4">Css Margin</div>

<div className="note">
The <span className="badge">margin</span> class is use to give a margin of 10px on all sides. <br />
To give a margin at the top, the <span className="badge">margin-top-value</span> is use. <br />
To give a margin at the bottom, the <span className="badge">margin-bottom-value</span> is use. <br />
To give a margin at the left, the <span className="badge">margin-left-value</span> is use. <br />
To give a margin at the right, the <span className="badge">margin-right-value</span> is use. <br />
The values  for our css margin are <span className="badge">10,20,30,40,50,60,70,80,90 and 100</span> 
</div>
<div className="code">
<xmp>
{margin}
</xmp>
</div>
<div className="preview">
<div className="width-100-p border padding hover-shadow section">
<div className="green margin-top-50 padding card round-edge text-white">
<h2>50px Margin Top</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
</div>
<div className="width-100-p border padding hover-shadow section">
<div className="margin-bottom-50 indigo padding card round-edge text-white">
<h2>40px Margin Bottom</h2>
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo reprehenderit possimus voluptate dicta ullam eius voluptatibus voluptatum aliquid pariatur! Odio, totam! Molestiae doloremque vitae provident, recusandae blanditiis sit perspiciatis!
</div>
</div>
</div>


</div>
</div>

<div className="container padding-top-40" id="helpers">
<div className="topic h4">Css Helpers</div>
<table className="table width-100-p text-left stripped text-small">
<tr>
    <td>Name</td>
    <td>discription</td>
    <td>syntax</td>
</tr>

    <tr>
        <td>Pointer</td>
        <td>Change cursor to pointer</td>
        <td><div> class = {"pointer"}</div></td>
    </tr>
    <tr>
        <td>Align Text Left</td>
        <td>Align text to left</td>
        <td><div> class = {"text-left"}</div></td>
    </tr>
    <tr>
        <td>Align Text Right</td>
        <td>Align text to right</td>
        <td><div> class = {"text-right"}</div></td>
    </tr>
    <tr>
        <td>Align Text Center</td>
        <td>Align text to center</td>
        <td><div> class = {"text-center"}</div></td>
    </tr>

    <tr>
        <td>Hover Shadow</td>
        <td>create a hoverable shadow</td>
        <td><div> class = {"hover-shadow"}</div></td>
    </tr>
    <tr>
        <td>Left Border</td>
        <td>To create a left border</td>
        <td><div> class = {"vr"}</div></td>
    </tr>
    <tr>
        <td>Bottom Border</td>
        <td>To create a bottom border</td>
        <td><div> class = {"hr"}</div></td>
    </tr>
    <tr>
        <td>Border</td>
        <td>To add a border</td>
        <td><div> class = {"border"}</div></td>
    </tr>
    <tr>
        <td>Z-Index</td>
        <td>To arrange layers, values are from 1-10</td>
        <td><div> class = {"z-index-value"}</div></td>
    </tr>
    <tr>
        <td>Opacity</td>
        <td>To Change the opacity values(1-10)</td>
        <td><div> class = {"opacity-value"}</div></td>
    </tr>
    <tr>
        <td>Hover Opacity</td>
        <td>To Change the opacity when you hover on the element values(1-10)</td>
        <td><div> class = {"hover-opacity-value"}</div></td>
    </tr>
    <tr>
        <td>Fixed Top</td>
        <td>To position your element fix on top.</td>
        <td><div> class = {"fixed-top"}</div></td>
    </tr>
    <tr>
        <td>Sticky Top</td>
        <td>To create a sticky element on top</td>
        <td><div> class = {"sticky-top"}</div></td>
    </tr>
</table>


<div className="note section">
<div className="note-title">Note</div>
<div>
Using helpers will help reduce your strees and save time when you are creating a wesbite.
Make sure to always hide some specific elements or show them to different screen sizes,
</div>
</div>
</div>


<Footer />

            </div>
            </div>
  
    </section>
    );
}

export default Helpers;