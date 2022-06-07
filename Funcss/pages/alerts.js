import Head from "next/head";
import Footer from "../components/Footer";

const alerts = () => {
    return ( 
        <div>
        <div>
        <section>
<Head>
<title>Alerts - Funcss Framework</title>
<meta name='description' content='
Alerts are important when showing a success message, warning and informations.
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
<a href="#simpleAlerts" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Alerts</div></a>
<a href="#outlinedAlerts" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Outlined Alerts</div></a>
</div>
</div>
<div className="main-content">
<div className="container">
<h1 className="header h1  text-indigo">
Alerts - Funcss
</h1>
<div className="h4">
Alerts are used to show imprtant messages and notices to users.
</div>
<div className="section hr">

</div>
</div>
<div className="padding-top-30 container" id="simpleAlerts">
<div className="topic h4">Simple Alerts.</div>
<div>
    <div className="code"> 
<xmp>
{`<div class="alert success section">
      <div class="icon"><i class="fa fa-check"></i></div>
      <div class="text text-white">
        This is Success!
      </div>
      <div class="close">&times;</div>
  </div>
  <div class="alert info section">
      <div class="icon"> <i class="fa fa-info-circle"></i></div>
      <div class="text text-white">
        This is an Info!
      </div>
      <div class="close">&times;</div>
  </div>
  
  <div class="alert warning section">
      <div class="icon"><i class="fa fa-exclamation-triangle"></i></div>
      <div class="text text-white">
        This is a warning!
      </div>
      <div class="close">&times;</div>
  </div>
  <div class="alert danger section">
      <div class="icon"><i class="far fa-times-circle"></i></div>
      <div class="text text-white">
        This is Danger!
      </div>
      <div class="close">&times;</div>
  </div>
  `}
</xmp>
    </div>
    <div className="preview">


<div className="alert success section">
    <div className="icon"><i className="fa fa-check"></i></div>
    <div className="text text-white">
      This is Success!
    </div>
    <div className="close">&times;</div>
</div>
<div className="alert info section">
    <div className="icon"> <i class="fa fa-info-circle"></i></div>
    <div className="text text-white">
      This is an Info!
    </div>
    <div className="close">&times;</div>
</div>

<div className="alert warning section">
    <div className="icon"><i class="fa fa-exclamation-triangle"></i></div>
    <div className="text text-white">
      This is a warning!
    </div>
    <div className="close">&times;</div>
</div>
<div className="alert danger section">
    <div className="icon"><i class="far fa-times-circle"></i></div>
    <div className="text text-white">
      This is Danger!
    </div>
    <div className="close">&times;</div>
</div>


    </div>
</div>
<div>

  <div className="topic h4 padding-top-40" id="outlinedAlerts">
    Outlined Alerts
  </div>
    <div className="code"> 
<xmp>
{`<div class="alert success-outline section">
      <div class="icon"><i class="fa fa-check"></i></div>
      <div class="text">
        This is Success!
      </div>
      <div class="close">&times;</div>
  </div>
  <div class="alert info-outline section">
      <div class="icon"> <i class="fa fa-info-circle"></i></div>
      <div class="text">
        This is an Info!
      </div>
      <div class="close">&times;</div>
  </div>
  
  <div class="alert warning-outline section">
      <div class="icon"><i class="fa fa-exclamation-triangle"></i></div>
      <div class="text">
        This is a warning!
      </div>
      <div class="close">&times;</div>
  </div>
  <div class="alert danger-outline section">
      <div class="icon"><i class="far fa-times-circle"></i></div>
      <div class="text">
        This is Danger!
      </div>
      <div class="close">&times;</div>
  </div>`}
</xmp>
    </div>
    <div className="preview">

<div className="alert success-outline section">
    <div className="icon"><i className="fa fa-check"></i></div>
    <div className="text">
      This is Success!
    </div>
    <div className="close">&times;</div>
</div>
<div className="alert info-outline section">
    <div className="icon"> <i class="fa fa-info-circle"></i></div>
    <div className="text">
      This is an Info!
    </div>
    <div className="close">&times;</div>
</div>

<div className="alert warning-outline section">
    <div className="icon"><i class="fa fa-exclamation-triangle"></i></div>
    <div className="text">
      This is a warning!
    </div>
    <div className="close">&times;</div>
</div>
<div className="alert danger-outline section">
    <div className="icon"><i class="far fa-times-circle"></i></div>
    <div className="text">
      This is Danger!
    </div>
    <div className="close">&times;</div>
</div>


    </div>
</div>


</div>
<Footer />

</div>
</div>
</section>
</div>
</div>
     );
}
 
export default alerts;