import React from 'react'
import Typography from "../../Funcss/Components/Typography"
import Container from "../../Funcss/Components/Container"
import Breadcumb from '../../Funcss/Components/Breadcumb'
import Link from 'next/link'
import {useEffect} from "react"
export default function hero() {

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
    <div class="col sm-12 md-12 lg-5 padding">
      <img 
        class="fit card round-edge" src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
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
<div>
<Container>
<Link href="/">
<a className="link padding hover-text-indigo">Home</a> 
</Link>
<Breadcumb type="greater" />
<Link href="#">
<a className="link padding hover-text-indigo">Hero sections</a> 
</Link>
<Typography text="Hero Sections" size="bigger" color="indigo"/>
<Typography>
<div className="width-500-max h5">
Hero sections are grabs users attentions, it is the first thing a user interacts with
when they visit your website.
</div>
</Typography>
</Container>
<div>

{
Sections.map(docs=>(
<div key={docs.key}>
{/* <Container>
<div className="code">
<xmp>
{`${docs.content}`}
</xmp>
 </div>
</Container> */}
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
