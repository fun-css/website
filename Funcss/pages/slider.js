import Footer from '../components/Footer';
import Head from "next/head"
const slider = () => {

    return ( 
        <section>
        
        <Head>
   <title>Css Slideshow - Funcss Framework</title>
     <meta name='description' content='
         Sliders or slideshows are mostly use on your homepage to attract users attention. create simple and nice 
        pure css slideshows.
     
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
          <a href="#twoslides" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Two Slides</div></a>
          <a href="#threeslides" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Three Slides</div></a> 
          <a href="#fourslides" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Four Slides</div></a> 
          </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="h1 header text-lighter text-indigo">
           Css Slideshow - Funcss Framework
        </h1>
        <div className="h4">
         Sliders are mostly use on your homepage to attract users attention.
         create simple and nice pure css slideshows.
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
                        <td>.slider</td>
                        <td>It is a wrapper to all your slides and its content</td>
                        <td><div> class = {"slider"}</div></td>
                    </tr>
                    <tr>
                        <td>.two</td>
                        <td>to specity that you are using two slides</td>
                        <td><div> class= {"slider two"}</div></td>
                    </tr>
                    <tr>
                        <td>.three</td>
                        <td>to specity that you are using three slides</td>
                        <td><div> class= {"slider three"}</div></td>
                    </tr>
                    <tr>
                        <td>.four</td>
                        <td>to specity that you are using four slides</td>
                        <td><div> class = {"slider four"}</div></td>
                    </tr>
                    <tr>
                        <td>.slide-container</td>
                        <td>It is the container to all your slides.</td>
                        <td><div> class = {"slide-container"}</div></td>
                    </tr>
                    <tr>
                        <td>slide</td>
                        <td>
                           It wraps individual slides
                        </td>
                        <td><div> class = {"slide"}</div></td>
                    </tr>
                    <tr>
                        <td>slide-content</td>
                        <td>
                          It contains all kind of contents in your slide.
                        </td>
                        <td><div> class = {"slide-content"}</div></td>
                    </tr>
                    <tr>
                        <td>caption</td>
                        <td>
                          It allows you to write captions for your slide
                        </td>
                        <td><div> class = {"caption"}</div></td>
                    </tr>
                    <tr>
                        <td>Top Left</td>
                        <td>
                          It position your caption to the top-left
                        </td>
                        <td><div> class = {"caption top-left"}</div></td>
                    </tr>
                    <tr>
                        <td>Center</td>
                        <td>
                         It position your caption to the center
                        </td>
                        <td><div> class = {"caption center"}</div></td>
                    </tr>
                </tbody>
            </table>
</div>

<div className="container">
<div className="note">
    <div className="note-title">Note</div>
    <div>
        You are only allow to use a maximum of 4 slides. <br />
        Slides are msotly used at the hero section of your website(Homepage). They are design
        to attract the intention of users.
    </div>
</div>
</div>
       
<div className="container padding-top-40" id="twoslides">
<div className="h4 topic">Two Slides</div>
<div className="note">
    The <span className="badge">slider two</span> class is use to create two simple css slides.
</div>
<div className="code">
<xmp>
{`
<div class="slider two">
    <div class="slide-container">
        <div class="slide">
            <div class="slide-content height-400">
            <img className="slide-image" src="/images/1.jpg"/>
         <div class="caption center padding-20 text-center">
             <div class="text-x-large text-white">Center Caption</div>
             <div class="text-white">
             The class of center is use in the caption class div to bring the caption to the middle of your slide.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             </div>
         </div>
            </div>

        </div>
        <div class="slide">
            <div class="slide-content height-400">
            <img className="slide-image" src="/images/3.jpg"/>
            <div class="caption top-left padding">
             <div class="text-x-large text-white">Top Left Caption</div>
             <div class="text-white">
             The top-left class is use in the caption  div to position your caption to the to left side of your slide blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>
        </div>
    </div>
    <div class="dot-container">
        <i class="fas fa-circle dot one"></i>
        <i class="fas fa-circle dot two"></i>
    </div>
</div>
`}
</xmp>
</div>
<div className="preview">

<div className="slider two">
    <div className="slide-container">
        <div className="slide">
            <div className="slide-content height-400">
            <img className="slide-image" src="/images/1.jpg"/>
         <div className="caption center padding-20 text-center">
             <div className="text-x-large text-white">Center Caption</div>
             <div className="text-white">
             The class of center is use in the caption class div to bring the caption to the middle of your slide.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             </div>
         </div>
            </div>

        </div>
        <div className="slide">
            <div className="slide-content height-400">
            <img className="slide-image" src="/images/3.jpg"/>
            <div className="caption top-left padding">
             <div className="text-x-large text-white">Top Left Caption</div>
             <div className="text-white">
             The top-left class is use in the caption class div to position your caption to the to left side of your slide blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>
        </div>
    </div>
    <div className="dot-container">
        <i className="fas fa-circle dot one"></i>
        <i className="fas fa-circle dot two"></i>
    </div>
</div>



</div>
</div>
       
<div className="container padding-top-40" id="threeslides">
<div className="h4 topic">Three Slide</div>
<div className="note">
   The <span className="badge">three</span> class is use in the slider class to create three slides in your slideshow. <br />
   <span className="badge">black-overlay</span> class can be use to add a transparent black overlay to your slide.
</div>
<div className="code">
   <xmp>
{`<div class="slider three black-overlay">
    <div class="slide-container">
        <div class="slide">
            <div class="slide-content height-400">
            <img className="slide-image" src="/images/7.jpg"/>
         <div class="caption center padding-20 text-center">
             <div class="text-big text-white">Greate Company</div>
             <div class="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>

        </div>
        <div class="slide">
            <div class="slide-content height-400">
            <img className="slide-image" src="/images/3.jpg"/>
            <div class="caption bottom-left padding">
             <div class="text-big text-white">Choose from Templates</div>
             <div class="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>
        </div>
        <div class="slide">
        <div class="slide-content height-400">
        <img className="slide-image" src="/images/6.jpg"/>
        <div class="caption center padding-20 text-center">
             <div class="text-big text-white">Create Your Website</div>
             <div class="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
        </div>
        </div>
        </div>
    </div>
    <div class="dot-container">
            <i class="fas fa-circle dot one"></i>
            <i class="fas fa-circle dot two"></i>
            <i class="fas fa-circle dot three"></i>
    </div>
</div>`}
   </xmp>
</div>
<div className="preview">

<div className="slider three black-overlay">
    <div className="slide-container">
        <div className="slide">
            <div className="slide-content height-400">
            <img className="slide-image" src="/images/7.jpg"/>
         <div className="caption center padding-20 text-center">
             <div className="text-big text-white">Greate Company</div>
             <div className="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>

        </div>
        <div className="slide">
            <div className="slide-content height-400">
            <img className="slide-image" src="/images/3.jpg"/>
            <div className="caption bottom-left padding">
             <div className="text-big text-white">Choose from Templates</div>
             <div className="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>
        </div>
        <div className="slide">
        <div className="slide-content height-400">
        <img className="slide-image" src="/images/6.jpg"/>
        <div className="caption center padding-20 text-center">
             <div className="text-big text-white">Create Your Website</div>
             <div className="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
        </div>
        </div>
        </div>
    </div>
    <div className="dot-container">
            <i className="fas fa-circle dot one"></i>
            <i className="fas fa-circle dot two"></i>
            <i className="fas fa-circle dot three"></i>
    </div>
</div>

</div>
</div>
<div className="container padding-top-40" id="fourslides">
<div className="h4 topic">Four Slides</div>
<div className="note">
   The <span className="badge">four</span> class is use to create  four slides.
   ou framework only limit your slides to four,because the slides are created with pure css,
   no javascript.
</div>
<div className="code">
   <xmp>
{`<div class="slider four black-overlay">
    <div class="slide-container">
        <div class="slide">
            <div class="slide-content height-400">
            <img className="slide-image" src="/images/10.jpg"/>
         <div class="caption center padding-20 text-center">
             <div class="text-x-large text-white">Greate Company Layout</div>
             <div class="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>

        </div>
        <div class="slide">
            <div class="slide-content height-400">
            <img className="slide-image" src="/images/9.jpg"/>
            <div class="caption top-left padding">
             <div class="text-x-large text-white">Good Environment</div>
             <div class="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>
        </div>
        <div class="slide">
        <div class="slide-content height-400">
        <img className="slide-image" src="/images/8.jpg"/>
        <div class="caption bottom-left padding-20 text-center">
             <div class="text-x-large text-white">Good Products</div>
             <div class="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
        </div>
        </div>
        </div>
        <div class="slide">
        <div class="slide-content height-400">
        <img className="slide-image" src="/images/5.jpg"/>
        <div class="caption center padding-20 text-center">
             <div class="text-x-large text-white">Cheap Prices</div>
             <div class="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
        </div>
        </div>
        </div>
    </div>
    <div class="dot-container">
            <i class="fas fa-circle dot one"></i>
            <i class="fas fa-circle dot two"></i>
            <i class="fas fa-circle dot three"></i>
            <i class="fas fa-circle dot four"></i>
    </div>
</div>
`}
   </xmp>
</div>
<div className="preview">
<div className="slider four black-overlay">
    <div className="slide-container">
        <div className="slide">
            <div className="slide-content height-400">
            <img className="slide-image" src="/images/10.jpg"/>
         <div className="caption center padding-20 text-center">
             <div className="text-x-large text-white">Greate Company Layout</div>
             <div className="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>

        </div>
        <div className="slide">
            <div className="slide-content height-400">
            <img className="slide-image" src="/images/9.jpg"/>
            <div className="caption top-left padding">
             <div className="text-x-large text-white">Good Environment</div>
             <div className="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
         </div>
            </div>
        </div>
        <div className="slide">
        <div className="slide-content height-400">
        <img className="slide-image" src="/images/8.jpg"/>
        <div className="caption bottom-left padding-20 text-center">
             <div className="text-x-large text-white">Good Products</div>
             <div className="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
        </div>
        </div>
        </div>
        <div className="slide">
        <div className="slide-content height-400">
        <img className="slide-image" src="/images/5.jpg"/>
        <div className="caption center padding-20 text-center">
             <div className="text-x-large text-white">Cheap Prices</div>
             <div className="text-white">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste suscipit dolorum, blanditiis dolore a vitae rerum repellat, culpa voluptas quae eligendi,
             </div>
        </div>
        </div>
        </div>
    </div>
    <div className="dot-container">
            <i className="fas fa-circle dot one"></i>
            <i className="fas fa-circle dot two"></i>
            <i className="fas fa-circle dot three"></i>
            <i className="fas fa-circle dot four"></i>
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
 
export default slider;