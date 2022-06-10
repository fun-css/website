import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
import Slidepanel from './../Funcss/Components/Slidepanel';
import Panelcontent from '../Funcss/Components/Panelcontent';
import Panelfront from './../Funcss/Components/Panelfront';
import Middle from './../Funcss/Components/Middle';
import Div from './../Funcss/Components/Div';
import Typography from './../Funcss/Components/Typography';
import Icon from './../Funcss/Components/Icon';
import Button from './../Funcss/Components/Button';
function Slidepanels() {
    return (
        <section>
            <Head>
            <title>Css Slide Panels | Funcss Framework</title>
          <meta name='description' content='
        Slide panels reveals their content when a user hovers
        on them, you can use them for your about section when 
        creating a website.
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
               <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
               <a href="#topPanel" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Top Slide Panel</div></a>
               <a href="#bottomPanel" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Bottom Slide Panel</div></a> 
               <a href="#leftPanel" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Left Slide Panel</div></a>
               <a href="#rightPanel" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Right Slide Panel</div></a>
            </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="h1 header text-indigo">
               Css Slide Panels - Funcss Framework
             </h1>
             <div className="h4">
            Slide panels shows their overlayed content when you hover on them. Create 
            top sliding panels, left sliding panels, right sliding panel and bottom sliding panels.
             </div>

             <div className="section hr">
    
             </div>
            </div>

            <div className="container" id="introduction">
            <table className="table stripped text-small">
        <thead className="indigo text-white">
        <tr>
            <td>Class</td>
            <td>discription</td>
            <td>syntax</td>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>.slide-panel</td>
                <td>Create A sliding panel</td>
                <td><div> class = {"slide-panel"}</div></td>
            </tr>
            <tr>
                <td>.slide-panel-content</td>
                <td>It is written in the slide panel, it contains contents of your slide.</td>
                <td><div>class = {"slide-panel-content"}</div></td>
            </tr>
            <tr>
                <td>.slide-panel-image</td>
                <td>To show the content in which the slide will be on top.</td>
                <td> class = {"slide-panel-image"}</td>
            </tr>
            <tr>
                <td>.slide-top</td>
                <td>To create a sliding effect from the top</td>
                <td> class = {"slide-top"}</td>
            </tr>
            <tr>
                <td>.slide-bottom</td>
                <td>To create a sliding effect from the bottom</td>
                <td> class = {"slide-bottom"}</td>
            </tr>
            <tr>
                <td>.slide-left</td>
                <td>To create a sliding effect from the left</td>
                <td> class = {"slide-left"}</td>
            </tr>
            <tr>
                <td>.slide-right</td>
                <td>To create a sliding effect from the bottom</td>
                <td> class = {"slide-bottom"}</td>
            </tr>
  

        </tbody>
    </table>
            </div>

            <div className="container padding-top-40" id="topPanel">
    <div className="h4 topic">Slide Top</div>
    <div className="note">
The <span className="badge"> slide-top </span> class is use to create a slide animation from the top.
</div>
    <div className="code">
        <xmp>
{`<center> 
    <div class="padding text-larger">slide panel top</div>
    <div class="slide-panel slide-top fit-height width-200">
        <div class="slide-panel-content indigo text-center padding opacity-1 text-white">
        <div class="text-larger">Jhon Deo</div>
     Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
        </div>
        <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
    </div>      
</center>`}
        </xmp>
    </div>
    <div className="code react">
        <xmp>
{`
import Slidepanel from 'Funcss/Components/Slidepanel';
import Panelcontent from 'Funcss/Components/Panelcontent';
import Panelfront from 'Funcss/Components/Panelfront';
import Middle from 'Funcss/Components/Middle';
import Div from 'Funcss/Components/Div';
import Typography from 'Funcss/Components/Typography';
import Icon from 'Funcss/Components/Icon';

<Slidepanel slide="top" funcss="width-300">
    <Panelcontent>
        <Middle funcss="indigo text-white">
        <Div funcss="padding-20">
            <Div funcss="white text-indigo"><Typography text="Jhon Deo section" heading="h3" /></Div>
            <Typography funcss="section" text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Cumque ipsam non animi blanditiis. Ducimus alias minima repudiandae"} />
            <Div>
                <Icon funcss="pointer padding" icon="fab fa-facebook"/>
                <Icon funcss="pointer padding" icon="fab fa-instagram"/>
                <Icon funcss="pointer padding" icon="fab fa-twitter"/>
            </Div>
        </Div>
        </Middle>
    </Panelcontent>
    <Panelfront>
<img src="/images/avatar.png" alt="" className="width-100-p height-100-p" />
    </Panelfront>
</Slidepanel>  `}
        </xmp>
    </div>
    <div className="preview">
<center> 
<div className="padding h2">slide panel top</div>
<Slidepanel slide="top" funcss="width-300">
    <Panelcontent>
        <Middle funcss="indigo text-white">
        <Div funcss="padding-20">
            <Div funcss="white text-indigo"><Typography text="Jhon Deo section" heading="h3" /></Div>
            <Typography funcss="section" text={`
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cumque ipsam non animi blanditiis. Ducimus alias minima repudiandae
            `} />
            <Div>
                <Icon funcss="pointer padding" icon="fab fa-facebook"/>
                <Icon funcss="pointer padding" icon="fab fa-instagram"/>
                <Icon funcss="pointer padding" icon="fab fa-twitter"/>
            </Div>
        </Div>
        </Middle>
    </Panelcontent>
    <Panelfront>
<img src="/images/avatar.png" alt="" className="width-100-p height-100-p" />
    </Panelfront>
</Slidepanel>   
</center>

    </div>
</div>

<div className="container padding-top-40" id="bottomPanel">
    <div className="h4 topic">Slide Bottom</div>
    <div className="note">
The <span className="badge"> slide-bottom </span> class is use to create a slide animation from the bottom.
</div>
    <div className="code">
<xmp>{`<center> 
    <div class="padding text-larger">slide panel Bottom</div>
    <div class="slide-panel slide-bottom fit-height width-200">
        <div class="slide-panel-content indigo text-center padding opacity-1 text-white">
        <div class="text-larger">Jhon Deo</div>
     Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
        </div>
        <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
    </div>      
    </center>
    
`}</xmp>
    </div>
    <div className="preview">
<center> 
<div className="padding h3">slide panel Bottom</div>
<Slidepanel slide="bottom" funcss="width-300">
    <Panelcontent>
        <Middle funcss="indigo text-white">
        <Div funcss="padding-20">
            <Div funcss="white text-indigo"><Typography text="Jhon Deo section" heading="h3" /></Div>
            <Typography funcss="section" text={`
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cumque ipsam non animi blanditiis. Ducimus alias minima repudiandae
            `} />
            <Div>
                <Icon funcss="pointer padding" icon="fab fa-facebook"/>
                <Icon funcss="pointer padding" icon="fab fa-instagram"/>
                <Icon funcss="pointer padding" icon="fab fa-twitter"/>
            </Div>
        </Div>
        </Middle>
    </Panelcontent>
    <Panelfront>
<img src="/images/avatar.png" alt="" className="width-100-p height-100-p" />
    </Panelfront>
</Slidepanel>      
</center>

    </div>
</div>

<div className="container padding-top-40" id="leftPanel">
    <div className="h4 topic">Slide Left</div>
    <div className="note">
The <span className="badge"> slide-left </span> class is use to create a slide animation from the left.
</div>
    <div className="code">
        <xmp>
            {`
    <center> 
    <div class="padding text-larger">slide panel Bottom</div>
    <div class="slide-panel slide-left fit-height width-200">
        <div class="slide-panel-content deep-purple text-center padding opacity-1 text-white">
        <div class="text-larger">Jhon Deo</div>
     Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
        </div>
        <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
    </div>      
    </center>
    
            `}
        </xmp>
    </div>
    <div className="preview">
<center> 
<div className="padding h3">slide panel Left</div>
<Slidepanel slide="left" funcss="width-300">
    <Panelcontent>
        <Middle funcss="indigo text-white">
        <Div funcss="padding-20">
            <Div funcss="white text-indigo"><Typography text="Jhon Deo section" heading="h3" /></Div>
            <Typography funcss="section" text={`
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cumque ipsam non animi blanditiis. Ducimus alias minima repudiandae
            `} />
            <Div>
                <Icon funcss="pointer padding" icon="fab fa-facebook"/>
                <Icon funcss="pointer padding" icon="fab fa-instagram"/>
                <Icon funcss="pointer padding" icon="fab fa-twitter"/>
            </Div>
        </Div>
        </Middle>
    </Panelcontent>
    <Panelfront>
<img src="/images/avatar.png" alt="" className="width-100-p height-100-p" />
    </Panelfront>
</Slidepanel>  
</center>

    </div>
</div>

<div className="container padding-top-40" id="rightPanel">
    <div className="h4 topic">Slide Right</div>
    <div className="note">
The <span className="badge"> slide-right </span> class is use to create a slide animation from the right.
</div>
    <div className="code">
        <xmp>
{`<center> 
    <div class="padding text-larger">slide panel Bottom</div>
    <div class="slide-panel slide-right fit-height width-200">
        <div class="slide-panel-content deep-purple text-center padding opacity-1 text-white">
        <div class="text-larger">Jhon Deo</div>
     Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
        </div>
        <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
    </div>      
    </center>`}
        </xmp>
    </div>
    <div className="preview">
<center> 
<div className="padding h3">slide panel Right</div>
<Slidepanel slide="right" funcss="width-300">
    <Panelcontent>
        <Middle funcss="indigo text-white">
        <Div funcss="padding-20">
            <Div funcss="white text-indigo"><Typography text="Jhon Deo section" heading="h3" /></Div>
            <Typography funcss="section" text={`
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cumque ipsam non animi blanditiis. Ducimus alias minima repudiandae
            `} />
            <Div>
                <Icon funcss="pointer padding" icon="fab fa-facebook"/>
                <Icon funcss="pointer padding" icon="fab fa-instagram"/>
                <Icon funcss="pointer padding" icon="fab fa-twitter"/>
            </Div>
        </Div>
        </Middle>
    </Panelcontent>
    <Panelfront>
<img src="/images/avatar.png" alt="" className="width-100-p height-100-p" />
    </Panelfront>
</Slidepanel>     
</center>

    </div>
</div>


<Footer />
  </div>
  </div>
        </section>
    );
}

export default Slidepanels;