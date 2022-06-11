import React from 'react';
import Footer from '../components/Footer';
import Head from "next/head"
import Dropdown from '../Funcss/Components/Dropdown';
import Button from '../Funcss/Components/Button';
import DropMenu from './../Funcss/Components/DropMenu';
import DropItem from './../Funcss/Components/Dropitem';
import Dropup from './../Funcss/Components/Dropup';
function dropdown() {
    return (
        <section>
 <Head>
   <title>Css Dropdowns - Funcss Framework</title>
     <meta name='description' content='
      Create nice css dropdown and dropupcreate animated dropdown and dropdown with funcss framework. 
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
          <a href="#scaleup" className="link text-black block"> <div className="padding  hover-left-indigo right-link">Scaleup Dropdown</div></a>
          <a href="#opacity" className="link text-black block"> <div className="padding  hover-left-indigo right-link">Opacity Dropdown</div></a> 
          <a href="#dropup" className="link text-black block"> <div className="padding  hover-left-indigo right-link">Drop Up</div></a>        </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="header text-indigo">
         Css Dropdown And Dropup - Funcss Framework
        </h1>
        <div className="h5">
        Dropdowns are usuallly use on the navigation bar, they hold 
        content which can be seen when you hover or click on them.
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
                        <td>.dropdown-hover</td>
                        <td>It contains all other contents in the dropdown.</td>
                      <td><div> class = {"dropdown-hover"}</div></td>
                    </tr>
                    <tr>
                        <td>.dropdown-button</td>
                        <td>It triggers your dropdown.It can be a link,div or any other html element</td>
                    <td><div> class = {"dropdown-button"}</div></td>
                    </tr>
                    <tr>
                        <td>dropdown-menu</td>
                        <td>
                           It contains contents of your dropdown.
                        </td>
                    <td><div> class = {"dropdown-menu"}</div></td>
                    </tr>
                    <tr>
                        <td>dropdown-item</td>
                        <td>
                           Are found in the dropdown-menu, they are displayed in block and sections.
                        </td>
                        <td><div> class = {"dropdown-item"}</div></td>
                    </tr>
                </tbody>
            </table>
</div>
       
<div className="container padding-top-40" id="scaleup">
<div className="h4 topic">Simple Dropdown With Scaleup Animation</div>
<div className="code">
<xmp>
{`import Dropdown from 'Funcss/Components/Dropdown';
import Button from 'Funcss/Components/Button';
import DropMenu from 'Funcss/Components/DropMenu';
import DropItem from 'Funcss/Components/Dropitem';
<Dropdown>
        <Button text="Scale up Dropdown" color="success"/>
    <DropMenu animation="ScaleUp" hoverable="hoverable" funcss="white" duration={1.5}>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
    </DropMenu>
</Dropdown>
`}
</xmp>
</div>
<div className="preview">
<Dropdown>
        <Button text="Scale up Dropdown" color="success"/>
    <DropMenu animation="ScaleUp" hoverable="hoverable" funcss="white" duration={1.5}>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
    </DropMenu>
</Dropdown>


</div>
</div>
<div className="container padding-top-40" id="opacity">
<div className="h4 topic">Simple Dropdown With Opacity Animation</div>
<div className="code">
<xmp>
{`import Dropdown from 'Funcss/Components/Dropdown';
import Button from 'Funcss/Components/Button';
import DropMenu from 'Funcss/Components/DropMenu';
import DropItem from 'Funcss/Components/Dropitem';
<Dropdown>
        <Button text="Opacity Dropdown" color="success"/>
    <DropMenu animation="Opacity" hoverable="hoverable" funcss="white" duration={1.5}>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
    </DropMenu>
</Dropdown>`}
</xmp>
</div>
<div className="preview">

<Dropdown>
        <Button text="Opacity Dropdown" color="success"/>
    <DropMenu animation="Opacity" hoverable="hoverable" funcss="white" duration={1.5}>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
    </DropMenu>
</Dropdown>


</div>
</div>
       
<div className="container padding-top-40" id="dropup">
<div className="h4 topic">Dropup</div>
<div className="note">
   The <span className="badge">dropup-hover</span> class is use to create hoverable dropups for your website.
</div>
<div className="code">
   <xmp>
{`import Dropup from 'Funcss/Components/Dropup';
import Button from 'Funcss/Components/Button';
import DropMenu from 'Funcss/Components/DropMenu';
import DropItem from 'Funcss/Components/Dropitem';
<Dropup>
        <Button text="Drop Up" color="success"/>
    <DropMenu animation="ScaleUp" hoverable="hoverable" funcss="white" duration={1.5}>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
    </DropMenu>
</Dropup>
`}
   </xmp>
</div>
<div className="preview">
<Dropup>
        <Button text="Drop Up" color="success"/>
    <DropMenu animation="ScaleUp" hoverable="hoverable" funcss="white" duration={1.5}>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
        <DropItem>Hello</DropItem>
    </DropMenu>
</Dropup>


</div>
</div>

  

<Footer />
</div>
</div>
        </section>
    );
}

export default dropdown;