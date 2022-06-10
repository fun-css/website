import React from 'react';
import { useState , useEffect } from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
import Snackbar from '../Funcss/Components/Snackbar';
import Button from '../Funcss/Components/Button';
function Snackbars() {
   const [openSnackbar, setopenSnackbar] = useState(false)
const [topRight, settopRight] = useState(false)
const [topLeft, settopLeft] = useState(false)
const [bottomRight, setbottomRight] = useState(false)
    return (
        <div>
                    <section>
<Head>
   <title>Css Snackbars - Funcss Framework</title>
     <meta name='description' content='
    Snackbars displays short messages for users to know about the state of a particular process.
       ' />
    <meta
    name="keywords"
    content="fun, css, card, slide, panel, slide panel"
    />
</Head>
              <div className="content-wrapper">
            <div className="sub-content padding">
        <div className="section">
          <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
          <a href="#Snackbar" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Snackbar</div></a> 
          <a href="#note" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Note</div></a>         </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="header text-indigo">
          Css Snackbar - Funcss Framework
        </h1>
        <div className="h5 width-500-max">
        Snackbars displays short messages for users to know about the state of a particular process.
        </div>
       </div>

       
<div className="container padding-top-40" id="introduction">
<div className="h4 topic">Snackbars</div>
<div className="code react">
   <xmp>
{`
import Snackbar from 'Funcss/Components/Snackbar';
import Button from 'Funcss/Components/Button';

const App = ()=>{
//  react Snackbar
const [openSnackbar, setopenSnackbar] = useState(false)
const [topRight, settopRight] = useState(false)
const [topLeft, settopLeft] = useState(false)
const [bottomRight, setbottomRight] = useState(false)
return(
<div>
<Button  onClick={()=>setopenSnackbar(true)} color="success" text="Bottom Left"/>
<Button  onClick={()=>setbottomRight(true)} color="success" text="Bottom Right"/>
<Button  onClick={()=>settopRight(true)} color="success" text="Top Right"/>
<Button  onClick={()=>settopLeft(true)} color="success" text="Top Left"/>
<Snackbar position="default" close = {<span onClick={()=>setopenSnackbar(false)}>&times;</span>} message="Hi! - Welcome to my website" animation="SlideBottom" duration={0.5} open={openSnackbar} />
<Snackbar position="bottom-right" close = {<span onClick={()=>setbottomRight(false)}>&times;</span>} message="Hi! - Welcome to my website" animation="ScaleUp" duration={0.5} open={bottomRight} />
<Snackbar position="top-right" close = {<span onClick={()=>settopRight(false)}>&times;</span>} message="Hi! - Welcome to my website" animation="SlideTop" duration={0.5} open={topRight} />
<Snackbar position="top-left" close = {<span onClick={()=>settopLeft(false)}>&times;</span>} message="Hi! - Welcome to my website" animation="Opacity" duration={0.5} open={topLeft} />

</div>
)
}`}
   </xmp>
</div>

<div className="preview" id="Snackbar">
<Button  onClick={()=>setopenSnackbar(true)} color="success" text="Bottom Left"/>
<Button  onClick={()=>setbottomRight(true)} color="success" text="Bottom Right"/>
<Button  onClick={()=>settopRight(true)} color="success" text="Top Right"/>
<Button  onClick={()=>settopLeft(true)} color="success" text="Top Left"/>
<Snackbar position="default" close = {<span onClick={()=>setopenSnackbar(false)}>&times;</span>} message="Hi! - Welcome to my website" animation="SlideBottom" duration={0.5} open={openSnackbar} />
<Snackbar position="bottom-right" close = {<span onClick={()=>setbottomRight(false)}>&times;</span>} message="Hi! - Welcome to my website" animation="ScaleUp" duration={0.5} open={bottomRight} />
<Snackbar position="top-right" close = {<span onClick={()=>settopRight(false)}>&times;</span>} message="Hi! - Welcome to my website" animation="SlideTop" duration={0.5} open={topRight} />
<Snackbar position="top-left" close = {<span onClick={()=>settopLeft(false)}>&times;</span>} message="Hi! - Welcome to my website" animation="Opacity" duration={0.5} open={topLeft} />

</div>
</div>
 

<Footer />

</div>
</div>
   </section>
        </div>
    );
}

export default Snackbars;