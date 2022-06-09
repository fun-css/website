import Head from "next/head";
import Footer from "../components/Footer";
import Alert from "../Funcss/Components/Alert";
import Section from "../Funcss/Components/Section";

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
Alerts are used to show important messages and notices to users.
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
      <Section>
      <Alert message="This is a success" type="success"/>
      </Section>

      <Section>
      <Alert message="This is the alert message" type="info"/>
      </Section>

      <Section>
      <Alert message="This is the alert message" type="warning"/>
      </Section>

      <Section>
      <Alert message="This is the alert message" type="danger"/>
      </Section>



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
    <Section>
      <Alert message="Success - This is a message" outline={true} type="success"/>
      </Section>

      <Section>
      <Alert message="Info - This is a message" outline={true} type="info"/>
      </Section>

      <Section>
      <Alert message="Warning - This is a message" outline={true} type="warning"/>
      </Section>

      <Section>
      <Alert message="Error - This is a message" outline={true} type="danger"/>
      </Section>

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