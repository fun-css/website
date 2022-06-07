import React from 'react';
import { useState } from 'react';
import Footer from './../components/Footer';
import Head from 'next/head';
const icons = [
    {class:"fas fa-home",name:"home"},
    {class:"fab fa-facebook",name:"facebook"},
    {class:"fab fa-instagram",name:"instagram"},
    {class:"fab fa-twitter",name:"twitter"},
    {class:"fab fa-apple",name:"apple"},
    { class:"fab fa-youtube", name:"youtube"},
    { class:"fas fa-angle-double-down", name:"arrowdowndouble"},
    { class:"fas fa-angle-double-up", name:"arrowupdouble"},
    { class:"fas fa-angle-double-left", name:"arrowleftdouble"},
    { class:"fas fa-angle-double-right", name:"arrowrightdouble"},
    { class:"fas fa-angle-up", name:"angleup"},
    { class:"fas fa-angle-down", name:"angledown"},
    { class:"fas fa-angle-left", name:"angleleft"},
    { class:"fas fa-angle-right", name:"angleright"},
    { class:"fas fa-at", name:"at"},
    { class:"fas fa-award", name:"award"},
    { class:"fas fa-bars", name:"bars"},
    { class:"fas fa-bookmark", name:"bookmark"},
    { class:"far fa-bookmark", name:"bookmark"},
    { class:"fas fa-bell", name:"bellnotification"},
    { class:"far fa-bell", name:"bellnotification"},
    { class:"fas fa-blog", name:"blog"},
    { class:"fas fa-bolt", name:"flashbolt"},
    { class:"fab fa-buffer", name:"buffer"},
    { class:"fas fa-calendar", name:"calendar"},
    { class:"far fa-calendar", name:"calendar"},
    { class:"fas fa-adjust", name:"adjust"},
    { class:"fas fa-camera", name:"camera"},
    { class:"fas fa-envelope", name:"envelopemail"},
    { class:"far fa-envelope", name:"envelopemail"},
    { class:"fas fa-phone", name:"cellphone"},
    { class:"fas fa-check", name:"correctcheck"},
    { class:"fas fa-clock", name:"clock"},
    { class:"far fa-clock", name:"clock"},
    { class:"fas fa-cloud", name:"cloud"},
    { class:"fas fa-clone", name:"clone"},
    { class:"fas fa-comment", name:"comment"},
    { class:"far fa-comment", name:"comment"},
    { class:"fas fa-chalkboard", name:"chalkboard"},
    { class:"fas fa-copy", name:"copy"},
    { class:"far fa-copy", name:"copy"},
    { class:"fas fa-download", name:"download"},
    { class:"fas fa-edit", name:"edit"},
    { class:"far fa-edit", name:"edit"},
    { class:"fas fa-exclamation", name:"exclamation"},
    { class:"fas fa-eye", name:"eye"},
    { class:"far fa-eye", name:"eye"},
    { class:"fas fa-heart", name:"heart"},
    { class:"far fa-heart", name:"heart"},
    { class:"fas fa-image", name:"image"},
    { class:"far fa-image", name:"image"},
    { class:"fas fa-laptop", name:"laptop"},
    { class:"fas fa-rss", name:"rss"},
    { class:"fas fa-map-marker", name:"maplocation"},
    { class:"fas fa-poll", name:"pollstatistics"},
    { class:"fas fa-paper-plane", name:"sendplane"},
    { class:"far fa-paper-plane", name:"sendplane"},
    { class:"fas fa-quote-left", name:"openquote"},
    { class:"fas fa-quote-right", name:"closequote"},
    { class:"fas fa-share", name:"share"},
    { class:"fas fa-share-alt", name:"share"},
    { class:"fas fa-thumbs-up", name:"thubmsuplike"},
    { class:"far fa-thumbs-up", name:"thubmsuplike"},
    { class:"fas fa-thumbs-down", name:"thubmsdowndislike"},
    { class:"far fa-thumbs-down", name:"thubmsdowndislike"},
    { class:"fas fa-user", name:"user"},
    { class:"far fa-user", name:"user"},
    { class:"fas fa-user-circle", name:"usercircle"},
    { class:"far fa-user-circle", name:"usercircle"},
    { class:"fas fa-user-plus", name:"adduser"},
    { class:"fas fa-users", name:"users"},
    { class:"fas fa-video", name:"users"},
    { class:"fas fa-circle", name:"circle"},
    { class:"fas fa-braille", name:"braille"},
    { class:"fas fa-ellipsis-v", name:"morevertical"},
    { class:"fas fa-ellipsis-h", name:"morehorizontal"},
    { class:"fas fa-cog", name:"setting"},
    { class:"fas fa-cogs", name:"settings"},
    { class:"fas fa-tasks", name:"tasks"},
    { class:"fas fa-arrow-up", name:"arrowup"},
    { class:"fas fa-arrow-down", name:"arrowdown"},
    { class:"fas fa-arrow-left", name:"arrowleft"},
    { class:"fas fa-arrow-right", name:"arrowright"},
    { class:"fas fa-dollar-sign", name:"dollar"},
    { class:"fas fa-info", name:"information"},
    { class:"fas fa-credit-card", name:"creditcardpay"},
    { class:"fas fa-times", name:"times close"},

 

]

function Icons() {
    const [iconName, seticonName] = useState('');
    return (
        <section>
        <Head>
          <title>Css Icons | Funcss Framework</title>
          <meta name='description' content='
        Learn how to use css icons, icon sizes, iconic buttons.Make greate 
        changes using css icons. by funcss framework.
       ' />
    <meta
    name="keywords"
    content="fun, css, css margin, css padding, css, width, css show and hide content based on screen width"
    />
          </Head>
          
        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding content-middle light ads">
             <div id="container-8efab60a26b5c40a3a52aab9bdb98896">Ads</div>
             </div>
             <div className="section">
               <a href="#icons" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Icons</div></a>
               <a href="#iconsize" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Icon Sizes</div></a>
               <a href="#iconbutton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Icon Buttons</div></a>
            </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="header h1 text-lighter text-indigo">
                 Css Icons Based On Fontawesome - Funcss Framework
             </h1>
             <div className="h4">
               Using Icons Gives You A Better<br /> Website View.
             </div>

             <div className="section hr">
    
             </div>
            </div>

<div className='container padding-top-20' id="icons">
<div> 
<input className="input full-width borderless light padding" placeholder="search icon" onChange={(e)=>seticonName(e.target.value)} />
</div>
 <div>
     
     <div className="row">
         {
             icons.filter(filterIcon=>{
             if(iconName === ''){
                 return filterIcon;
             }else if(
              filterIcon.class.toLowerCase().trim().includes(iconName.toLowerCase().trim())||
              filterIcon.name.toLowerCase().trim().includes(iconName.toLowerCase().trim())
             ){
                 return filterIcon;
             }else{
                 
             }
             }).map(icon=>(
        <div className="col sm-6 md-3 lg-3 padding" key={icon.class}>
             <div className="hover-shadow">
                 <div className="padding icon size-2">
                 <i className={icon.class}></i>
                 </div>
                 <div className="f2 padding icon-className padding-top-30 monospace">{`<i class="${icon.class}"></i>`}</div>
             </div>
         </div>
               
             ))
         }
 
     </div>
 </div>
</div> 

<div className="container padding-top-50" id="iconsize">
    <div className="topic h4">Css Icon Sizes</div>
    <div className="note">
        When using icons, you  might want to change the size of your icon, the <span className="badge">size-value</span>
      is the answer, You can use any of this value to change the size of your icon. <br />
      <span className="badge">
          1, 2, 3, 4, 5, 6, 7, 8, 9 and 10
      </span>
    </div>
    <div className="code">
<xmp>{`<div class="row">
      <div class="col sm-12 md-4 lg-4">
        <div class="h3">Size 10</div>
        <i class="fas fa-cogs icon size-10"></i>
      </div>
      <div class="col sm-12 md-4 lg-4 ">
        <div class="h3">Size 5</div>
        <i class="fas fa-laptop icon size-5"></i>
      </div>
      <div class="col sm-12 md-4 lg-4">
        <div class="h3">Size 1</div>
        <i class="fas fa-blog icon size-1"></i>
        </div>
      </div>`}
</xmp>
    </div>
    <div className="preview">
      <div className="row">
      <div className="col sm-12 md-4 lg-4">
        <div className="h3">Size 10</div>
        <i className="fas fa-cogs icon size-10"></i>
      </div>
      <div className="col sm-12 md-4 lg-4 ">
        <div className="h3">Size 5</div>
        <i className="fas fa-laptop icon size-5"></i>
      </div>
      <div className="col sm-12 md-4 lg-4">
        <div className="h3">Size 1</div>
        <i className="fas fa-blog icon size-1"></i>
        </div>
      </div>
    </div>
</div>

<div className="container padding-top-50" id="iconbutton">
    <div className="h4 topic">Css Icon In Button</div>
    <div className="note">
   Icons can be use in buttons, buttons with icons look nicer, here is how you can insect an icon in your button.
    </div>
    <div className="code">
<xmp>{`<button class="button deep-purple card text-white">
    Send Message <i class="fas fa-paper-plane"></i>
</button>

<button class="button indigo card text-white t">
    Cogs Rotating <i class="fas fa-cog rotate"></i>
</button>`}
</xmp>
    </div>
    <div className="preview">
      <div className="row">
      <div className="col sm-12 md-6 lg-6">
        <div className="h4">Simple Icon Button</div>
        <button className="button deep-purple card text-white">
            Send Message <i className="fas fa-paper-plane"></i>
        </button>
      </div>
      <div className="col sm-12 md-6 lg-6">
        <div className="h4">Animated Button</div>
        <button className="button indigo card text-white t">
            Cogs Rotating <i className="fas fa-cog rotate"></i>
        </button>
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

export default Icons;