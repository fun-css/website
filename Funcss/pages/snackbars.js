import React from 'react';
import { useState , useEffect } from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
import Snackbar from '../Funcss/Components/Snackbar';
function Snackbars() {
const [openSnackbar, setopenSnackbar] = useState(false)
    const Snackbarstyle = "`${Snackbar}`"
    useEffect(() => {
     const Snackbar = document.querySelector(".snackbar")
     const Snackbarclose = document.querySelector(".close-snackbar")
     window.addEventListener("click" ,(e)=>{
        if(e.target === Snackbar || e.target === Snackbarclose){
           Snackbar.style.display = "none"
        }
     })
   
    })
   //  react Snackbar

    return (
        <div>
                    <section>
<Head>
   <title>Css Snackbars - Funcss Framework</title>
     <meta name='description' content='
      Create nice css Snackbars with funcss framework, Snackbars can be use to create login or signup forms.
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
        <h1 className="header h1 text-lighter text-indigo">
          Css Snackbar - Funcss Framework
        </h1>
        <div className="h4">
          Snackbars are can be use to show information on popup.
          Create nice css Snackbars with funcss framework, Snackbars can be use to create login or signup forms.
        </div>

        <div className="section hr">

        </div>
       </div>

       
<div className="container padding-top-40" id="introduction">
<div className="h4 topic">Css Snackbar</div>
<div className="note">
    The <span className="badge">Snackbar</span> class is use to create a Snackbar.It wraps the <span className="badge">Snackbar-content</span> class.
    which contains the content of your Snackbar
</div>
<div className="code">
   <xmp>
{`<button className="button indigo text-white card open-Snackbar" onClick="openSnackbar('mySnackbar')">Open Snackbar</button>
<div class="snackbar" id='mySnackbar'>
<div class="snackbar-content">
<div>
Welcome Snackbar
</div>
<div>
<span class="close-snackbar">&times;</span>
</div>
</div>
</div>`}
   </xmp>
</div>
<div className="code react">
   <xmp>
{`const App = ()=>{
//  react Snackbar
const openSnackbar = async(id)=>{
const Snackbar = await document.querySelector("#" + id)
Snackbar.style.display = "block"
}
return(
<div>
<button className="button indigo text-white card open-Snackbar" onClick={()=>openSnackbar("mySnackbar")}>Open Snackbar</button>
   <div className="snackbar" id='mySnackbar'>
   <div className="snackbar-content">
<div>
Welcome Snackbar
</div>
<div>
<span className="close-snackbar">&times;</span>
</div>

   </div>
   </div>
</div>
)
}`}
   </xmp>
</div>

<div className="preview" id="Snackbar">
<button className="button indigo text-white card open-Snackbar" onClick={()=>setopenSnackbar(!openSnackbar)}>Open Snackbar</button>
<Snackbar  close = "&times;" message="Welcome to my website" open={openSnackbar} timeOut={6000} />
</div>
</div>
 

<div className="container">
<div className="note" id="note">
    <div className="note-title">Note:</div>
    <div>
     Snackbars are good for Login forms, signup forms and displaying other relevant information to the user.
    </div>
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