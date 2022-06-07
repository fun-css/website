import React from 'react';
import Footer from './../components/Footer';
import Head from 'next/head'
import Link from 'next/dist/client/link'
import {useEffect, useState} from "react"
import Logo from '../components/Logo';
const Axios = require("axios")
function Home() {
const [comments, setcomments] = useState([])
const [email, setemail] = useState("")
const [comment, setcomment] = useState("")
const [error, seterror] = useState("")
const [modal, setmodal] = useState("none");
//     useEffect(()=>{
//     async function getData (){
//     await Axios.get("https://funcss-api.herokuapp.com")
//     .then((response)=>{
//     response.data.length = 3;
//     setcomments(response.data)
//     }).catch(err=>console.log(err))
//         }
//     getData()
// }, [])

// const HandleComment = ()=>{
//     if(email === "" || comment === ""){
//         seterror("Please make sure to fill all")
//     }else{
//         seterror(" ")
//         Axios.post("https://funcss-api.herokuapp.com/inputcomment" , {
//             email:email,
//             comment: comment
//         })
//         .then(()=>{
//             setmodal("block")
//         })
//     }

// }

    return (
        <section className="padding-top-30" lang="eng">
 <Head>
 <title>Fun Css Framework</title>
 <meta name='description' content='
     Fun css framework is a modern responsive css framework for developing
     responsive websites, with free website templates you can download.
    ' />
    <meta
    name="keywords"
    content="css, framework, free website templates, themes"
    
    />

 </Head>


      <div className="container">
        <div className="row">
            <div className="col sm-12 md-12 lg-6">
             <div className="padding">
             <h1 className="no-margin header h4">
                <Logo /> Modern responsive CSS framework for developing responsive websites.
            </h1>
             </div>
             <div className="padding">
                 Funcss is a free, open source css framework for developing modern responsive
                 websites and impressive front-end applications.
             </div>
   <div className="flex">
    <div className="flex-50">
        <div className="padding">
        <Link href="/gettingstarted">
         <a>
         <button className="button width-100-p text-white indigo card ">
          Getting Started
          <i className="fas fa-angle-right margin-left-10"></i>
          </button>
         </a>
       </Link>
        </div>
  </div>
    <div className="flex-50">
        <div className="padding">
        <Link href="https://codeload.github.com/fun-css/funcss/zip/refs/heads/main">
            <a>
            <button className="button width-100-p deep-purple card text-white">
        <i className="fas fa-download icon margin-right-10"></i> 
      Download v1.0 
        </button>         
            </a>
      </Link>
        </div>
  </div>

</div>
            </div>
            <div className="col sm-12 md-12 lg-6 padding-top-20">
                <div>
                    <video src="/video/colors.mp4" className="responsive" controls></video>
                </div>
            </div>
        </div>


      </div>



<div className="container padding-top-40">
<div className="text-center text-x-large text-indigo">Our Themes</div>
<div className="text-center h4">Download And Use Our Free Css Themes</div>
<div className="text-center  padding">
  Download and use our Themes for free, Build cool websites with Funcss.
</div>
<div>
    <div className="screen">
        <div className="row">
            <div className="col sm-6 md-4 lg-4 padding">
                <div>
                    <span className="screen-dot red"></span>
                    <span className="screen-dot yellow"></span>
                    <span className="screen-dot green"></span>
                </div>
            </div>
            <div className="col sm-6 md-8 lg-8 padding">
                <input type="text" className="input borderless white width-100-p padding" disabled placeholder="https://funcss.herokuapp.com"/>
            </div>
        </div>
        <div className="screen-content">
              
        <div className="slider three">
    <div className="slide-container">
        <div className="slide">
            <div className="slide-content">
            <img src="/themes/1.jpg" className="responsive" alt="company theme" />
            </div>

        </div>
        <div className="slide">
            <div className="slide-content">
            <img src="/themes/2.jpg" className="responsive" alt="company theme" />
            </div>
        </div>
        <div className="slide">
        <div className="slide-content">
        <img src="/themes/3.jpg" className="responsive" alt="company theme" />
        </div>
        </div>
   
    </div>

</div>
        </div>
    </div>
    <center><div className='height-50 width-40 black'></div></center>
    <center><div className='height-20 width-90-p black'></div></center>
</div>

</div>


<div className="container padding-top-50">
<div className="text-center text-xx-large text-indigo">Responsive</div>
<div className="h4 text-center">Create Responsive Websites With Css Grid.</div>
<div className="padding-20">
    Create awesome responsive websites with css flex-box and media queries.
    Our framework partition your website in to columns and rows which are 
    responsive to fit all screen sizes.
</div>
<div className="padding-20">
<Link href="/grid">
<a>
<button className="indigo button card text-white f2">
  Learn More
  <i className="fas fa-angle-right margin-left-10"></i>
</button>
</a>
</Link>
</div>
<div className="container text-center">
<img src="/svg/devices.svg" className="width-100-p" alt="cssresponsive" />
</div>


</div>

<div className="section hr container"></div>

<div className="container padding-top-30">
<h1 className="text-center text-xx-large text-indigo no-margin">FUNCSS BUTTONS</h1>
<h2 className="text-center no-margin h4">Create Nice Css Buttons Designs</h2>
<div className="padding">
  Create nice css buttons for your website, use buttons with cool animation effects, 
  Just type the class<span className="badge">button</span> to style your button, you can change the background color
  of your button by using our css color classes, you can also create a hover up and ripple buttons.
</div>

<div>
  
<div>
    <div className="screen">
        <div className="row">
            <div className="col sm-6 md-4 lg-4 padding">
                <div>
                    <span className="screen-dot red"></span>
                    <span className="screen-dot yellow"></span>
                    <span className="screen-dot green"></span>
                </div>
            </div>
            <div className="col sm-6 md-8 lg-8 padding">
                <input type="text" className="input borderless white width-100-p padding" disabled placeholder="https://funcss.herokuapp.com/buttons"/>
            </div>
        </div>
        <div className="screen-content">
        <div className='row white'>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
                <div className='text-large'>Simple Button</div>
                <div className='hr section'></div>
                <button className='button indigo  text-white'>Simple Button</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Raised Button</div>
                <div className='hr section'></div>
                <button className='button deep-purple text-white card'>Raised Button</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Circular Button</div>
                <div className='hr section'></div>
                <button className='button indigo card text-white float height-50 width-50'>Float</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Full width Button</div>
                <div className='hr section'></div>
                <button className='button full-width green text-white card'>Full width</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Ripple Effect Button</div>
                <div className='hr section'></div>
                <button className='button full-width ripple pink text-white card'>Ripple Effect</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Hover Up Button</div>
                <div className='hr section'></div>
                <button className='button full-width ripple teal card hover-up'>Hover up</button>
            </div>
        </div>
    </div>
        </div>
        
    <div className="section">
    <Link href="/buttons">
<a>
    <button className="indigo button card text-white f2">
  Learn More
  <i className="fas fa-angle-right margin-left-10"></i>
  </button>
</a>
</Link>
</div>

    </div>

</div>
</div>


</div>
<div className="section hr container"></div>

<div className="container padding-top-30">
<div className="text-center text-xx-large text-indigo no-margin">CSS CARDS</div>
<h2 className="header h4 padding">Create css cards, hoverable cards, fliping cards , horizontal cards and reveal content cards.</h2>
<div className="padding">
 Design nice css cards, hoverable fliping card, reveal content card and horizontal cards.
 Cards are use to design specific important areas of your website.
 The class <span className="badge">card </span> is use to create a cool shadow effect on your 
 html element.
</div>
<div>
<div>
    <div className="screen">
        <div className="row">
            <div className="col sm-6 md-4 lg-4 padding">
                <div>
                    <span className="screen-dot red"></span>
                    <span className="screen-dot yellow"></span>
                    <span className="screen-dot green"></span>
                </div>
            </div>
            <div className="col sm-6 md-8 lg-8 padding">
                <input type="text" className="input borderless white width-100-p padding" disabled placeholder="https://funcss.herokuapp.com/card"/>
            </div>
        </div>
        <div className="screen-content relative">
        <div className='row white'>
        <div className='col sm-12 md-6 lg-4 padding'>
<div className="card width-100-p">
    <div className="relative">
        <img src="images/deo.jpg" className="width-100-p height-200" alt="hoverable css card" />
        <div className="text-large card-title text-white">Card Title</div>
    </div>

    <div className="padding text-small">
    This is have a Title on top of the image.
    You can use this card to display informtion about a person or a team.
    </div>
</div>
        </div>
        <div className='col sm-12 md-6 lg-4 padding'>
<div className="card hover-shadow">
    <div className="relative">
        <img src="images/deo.jpg" className="width-100-p height-200" alt="reveal content css card"/>
        <div className="text-large card-title text-white">Card Title</div>
        <div className="text-large card-fab">
            <button className='button indigo card text-white float height-40 width-40'>
            <i className="fas fa-check"></i>
            </button>
        </div>
    </div>

    <div className="padding text-small">
    This is have a Title on top of the image with a floating button.
    You can use this card to display informtion about a person or a team.
    </div>
</div>
            
        </div>


    </div>
        </div>
        
    <div className="section">
<Link href="/card">
<button className="button indigo text-white">
  Learn More
  <i className="fas fa-angle-right margin-left-10"></i>
</button>
</Link>
</div>

    </div>

</div>

<div>

</div>
</div>


</div>
{/* 
<div className="container padding-top-30">
<div>
            <div className="row shadow-bingo padding">
                <div className="col sm-12 md-6 lg-6 padding">
                <div className="h2 outfit">Give A Comment</div>
                <div className="hr section"></div>
                <div className="h4">
                    Drop a comment, it will help our team understand user experience so that
                    we will be able to provide users with what they need.
                </div>
                </div>
                <div className="col sm-12 md-6 lg-6 padding">
                    <div className="section">
                        <label htmlFor="">Email:</label>
                        <input type="email" className="input bordered full-width" placeholder="enter your email" onChange={(e)=>setemail(e.target.value)} />
                    </div>
                    <div className="section">
                    <label htmlFor="">Comment:</label>
                        <textarea type="text" className="input bordered full-width" placeholder="enter your comment"  onChange={(e)=>setcomment(e.target.value)}  />
                    </div>
                    <div className="section">
                        <div className="text-red text-small">{error}</div>
                    </div>
                    <button className="button indigo text-white" onClick={HandleComment}>Comment <i className="far fa-paper-plane"></i></button>
                </div>
            </div>
 </div>
 <div className="row">
     
{/* {
    comments.map(comment=>(
    <div className="col sm-12 md-6 lg-6 padding">
        <div className="section">
        <div className="pointer padding react-card center">
        <div className="row-flex">
            <div> <img src="/images/avatar.png" className="height-50 width-50 circle" /> </div>
            <div className="padding">
             <div className="">{comment.email}</div>
            <div className="opacity-5 text-small">
            <i className="fas fa-check text-deep-purple"></i>
            <span>Developer</span>
            </div>
            </div>
        </div>
        <div>
          <div className="text-small">
          <span><i className="fas fa-quote-left text-indigo inline-block margin"></i></span>
            {comment.comment}
          <span><i className="fas fa-quote-right text-indigo inline-block margin"></i></span>
          </div>
        </div>
    </div>
        </div>
    </div>

    ))
}
</div>
<div className="slider three padding-top-50">
    <div className="slide-container">


        {
    comments.map(comment=>(
        <div className="slide" key={comment.id}>
        <div className="pointer padding react-card center">
        <div className="row-flex">
            <div> <img src="/images/avatar.png" className="height-50 width-50 circle" /> </div>
            <div className="padding">
             <div className="">{comment.email}</div>
            <div className="opacity-5 text-small">
            <i className="fas fa-check text-deep-purple"></i>
            <span>Developer</span>
            </div>
            </div>
        </div>
        <div>
          <span><i className="fas fa-quote-left text-indigo inline-block margin"></i></span>
          <span className="text-small">          
          {comment.comment}
          </span>
          <span><i className="fas fa-quote-right text-indigo inline-block margin"></i></span>
        </div>
    </div>
        </div>
    ))
}

    </div>

</div>



</div> */}

<Footer />

<div className="modal" style={{display:`${modal}`}}>
   <div className="close-modal text-bigger text-red"  onClick={()=>setmodal("none")}>&times;</div>
   <div className="modal-content padding width-500-max">
           <div className="light">
           <div className="h4 padding hr"><i className="fas fa-check text-indigo"></i> Thanks For Your Comment.</div>
            <div className='padding'>
            Thank you for your feedback, your feedback means alot to us.
            We hope you enjoyed the framework. <br />
            </div>
            <div className="padding">
                <button className="button white h4">
                    Contribute   <a href="https://github.com/fun-css"><img src="/icons/github.png"  className="height-30" alt="github" /></a>
                </button>
            </div>
           </div>
   </div>
   </div>

        </section>
    );
}

export default Home;