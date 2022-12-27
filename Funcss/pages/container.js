import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';

function Container(props) {
   
    return (
        <section>
                <Head>
          <title>Css Container | Funcss Framework</title>
          <meta name='description' content='
   Css container wrap your content with 10% margin on the left and right side of 
   your device width.
       ' />
    <meta
    name="keywords"
    content="fun, css, css margin, css padding, css, width, css show and hide content based on screen width"
    />
          </Head>
                        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
             <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6">Ads</div>
             </div>
             <div className="section">
               <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
               <a href="#container" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Container</div></a>
               <a href="#containerNote" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Note</div></a>
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="header h1 text-indigo">
                 Css Container - Funcss Framework
             </h1>
             <div className="h4">
                Containers wrap your content with 10% margin<br /> at both sides.
             </div>

             <div className="section hr">
   
             </div>
            </div>

<div className="container" id="introduction">
<div className="note">
         <div className="text-larger">What Containers Do</div>
     <div>
        Containers give 10% margin to both left and right, using containers
        centralizes your content and gives them a better view.
     </div>
  </div>

</div>

<div className="container" id="container">
    <div className="code">
<xmp>{`<div class="h4">
   Contents In Container
   </div>
 <div class="padding section border">
   <div>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
   </div>
 </div>
 
 <div class="h4">Content Not In container</div>
  <div class="padding section border">
    <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
    </div>
  </div>
 
 `}</xmp>
    </div>
    <div className="preview">
        <div className="">
          <div className='container'>
          <div>
         <div className="h4">Contents In Container</div>
          <div className="padding section border">
            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
            </div>
          </div>
          <div className="padding section border">
            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
            </div>
          </div>
         </div>
          </div>
   

         <div className="h4">Content Not In container</div>
         <div>
          <div className="padding section border">
            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
            </div>
          </div>
          <div className="padding section border">
            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
            </div>
          </div>
         </div>

        </div>
    </div>
</div>

<div className="container padding-top-20" id="containerNote">
    <div className="note">
        <div className="note-title">Note</div>
        <div>
            It is good to wrap your contents in a container, because contents in a container normally give a better view than those that are not wrap in a container.
        </div>
    </div>
</div>

<Footer />
                </div>

                </div>
        </section>
    );
}

export default Container;