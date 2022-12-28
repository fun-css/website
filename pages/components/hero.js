import React from 'react'
import Typography from "../../Funcss/Components/Typography"
import Container from "../../Funcss/Components/Container"
import Breadcrumb from '../../Funcss/Components/Breadcrumb'
import Section from '../../Funcss/Components/Section'
import Link from 'next/link'
import {useEffect, useState} from "react"
import Button from "../../Funcss/Components/Button"
import Icon from "../../Funcss/Components/Icon"
import Modal from '../../Funcss/Components/Modal';
import Modalcontent from '../../Funcss/Components/Modalcontent';
import Modalaction from '../../Funcss/Components/Modalaction';
import Modalheader from '../../Funcss/Components/Modalheader';
export default function Hero() {
const [modalShow ,setmodalShow] = useState(false)
const [modalData ,setmodalData] = useState(null)
const HandleModal = (data)=>{
  setmodalData(data)
  setmodalShow(true)
}
  const Sections = [
    {
      key:1,
      title:"simple Hero",
      content:`
          
<!-- Compiled and minified css -->
<link rel="stylesheet" href="https://fun-css.github.io/funcss/css/fun.css"/>
<!-- Compiled and minified jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<!-- Compiled and minified javascript -->
<script src="https://fun-css.github.io/funcss/js/fun.js"> </script>
<div>

  <div class="row">
    <div class="col sm-12 md-12 lg-7 padding"> 
    <div class="content-middle">
    <div class="container">
          <div class="hero text-bigger">
        <span class="text-indigo">The Next Generation</span> 
            Of Web Design
      </div>
            <div class="padding width-500-max">
Anim aute id magna aliqua ad ad non deserunt sunt. Quiirurequi lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </div>
      <div class="padding-top-20">
        <button class="button indigo text-white card inline-block margin padding-20 h4">
          Join Us
        </button>
                <button class="button text-indigo card inline-block margin padding-20 h4">
          Design Better
        </button>
      </div>
    </div>
      </div>

      
    </div>
    <div class="col sm-12 md-12 lg-5 padding hide-medium-down">
      <img 
        class="fit card round-edge" src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
  </div>
  
</div>
      `
    },
    {
      key:2,
      title:"simple Hero",
      content:`
      <!-- Compiled and minified css -->
<link rel="stylesheet" href="https://fun-css.github.io/funcss/css/fun.css"/>
<!-- Compiled and minified jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<!-- Compiled and minified javascript -->
<script src="https://fun-css.github.io/funcss/js/fun.js"> </script>
      <div>
      <div class="width-900-max center text-center">
            <div>
         <div class="container">
               <div class="hero text-bigger">
             <span class="text-indigo">The Next Generation</span> 
                 Of Web Design
           </div>
                 <div class="padding width-500-max center">
     Anim aute id magna aliqua ad ad non deserunt sunt. Quiirurequi lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
           </div>
           <div class="padding-top-20">
             <button class="button indigo text-white card inline-block margin padding-20 h4">
               Great Designs
             </button>
                     <button class="button text-indigo card inline-block margin padding-20 h4">
               Design Better
             </button>
           </div>
         </div>
       </div>
     </div>
      `
    }
  ]

  // useEffect(()=>{
  //   var code = document.querySelector(".code-one").contentWindow.document;
  //   code.open();
  //   code.writeln(
  //  `

  //  `
  //   );
  //   code.close();
  // })
return (
<div className="padding-top-70">
{
  modalShow === true &&
  <Modal>
<Modalheader>
   <Typography text={modalData.title} heading="h2"/>
</Modalheader>
<Modalcontent funcss="width-800-max">
  {
    modalData != null &&
    <div>
      <div>
      <div className="code"> 
<xmp>
{`${modalData.content}`}
</xmp>
    </div>
      </div>
    </div>
  }
</Modalcontent>
<Modalaction funcss="text-right">
<Button color="white" bg="red" onClick={()=>setmodalShow(false)}>Cancel</Button>
</Modalaction>
</Modal>
}
<div>
<Container>
<Section>
<Link href="/components">
<a className="link padding hover-text-indigo">Components</a> 
</Link>
<Breadcrumb type="straight" />
<Link href="#">
<a className="link padding text-indigo">Hero sections</a> 
</Link>
</Section>
<Typography text="Hero Sections" funcss="padding" size="bigger" color="indigo"/>
<Typography>
<div className="width-500-max h5">
Hero sections are grabs users attentions, it is the first thing a user interacts with
when they visit your website.
</div>
</Typography>
</Container>
<div className="">

{
Sections.map(docs=>(
<div key={docs.key} className="margin-top-100">
<Container>
<Button 
onClick={()=> HandleModal(docs)}
startIcon={
<Icon icon={"far fa-eye"} />
} 
text="Preview"
bg="indigo"
color="white"
funcss="card"
/> 
    </Container>
<div className="iframe-container">
<iframe srcDoc={`
${docs.content}
`} frameBorder="0" className="responsive-iframe code-one"></iframe>
</div>
</div>
))
}



</div>
</div>
</div>
)
}
