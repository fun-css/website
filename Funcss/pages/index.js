import React from 'react';
import Footer from './../components/Footer';
import Head from 'next/head'
import Link from 'next/dist/client/link'
import {useEffect, useState} from "react"
import Logo from '../components/Logo';
import Grid from "../Funcss/Components/Grid"
import Col from "../Funcss/Components/Col"
import Button from "../Funcss/Components/Button"
import Color from "../Funcss/Components/Color"
import Container from "../Funcss/Components/Container"
import Typography from "../Funcss/Components/Typography"
import Icon from "../Funcss/Components/Icon"
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

<div className="row text-center">
<div className="col sm-12 md-10 lg-10">
    <div className="width-600-max center">
<div className="hero text-bigger">
<span className="text-indigo text-bigger">The Next Generation </span> 
Of Web Design
</div>
<div className="padding width-500-max center">
Funcss is an open source css framework for developing modern responsive
websites and impressive front-end applications.It comes with predefined components
which are easy to integrate with your react application.
</div>
<div className="padding-top-20">

<Link href="/gettingstarted">
<a>
<Button 
text="Getting Started"
bg="indigo"
color="white"
funcss="card card inline-block margin h4"
size="large"
/>
</a>
</Link>
<Link href="/components">
<a>
<Button 
text="Components"
color="indigo"
funcss="card inline-block margin h4"
size="large"
/>    
</a>
</Link>
</div>
</div>
</div>
<div className="col sm-12 md-2 lg-2 dotted blob">

</div>

</div>

<Container funcss="padding-top-40">
<Grid>
<Col sm={12} md={2} lg={2} funcss="padding dotted">
</Col>
<Col sm={12} md={10} lg={10} funcss="padding-20">
<Typography size="bigger">
<span className="text-indigo text-bigger">Don&apos;t Waste Time, </span>
Use Pre-built Components.
    </Typography>
<div className="width-400-max">
<Typography funcss="section" text={`
Make your code clean with our react components, just import to use for free.
`}/>
<Link href="/components">
<a>
<Button 
text="Our Components"
color="white"
bg="indigo"
funcss="card h5 section"
size="medium"
startIcon={<Icon icon="fab fa-buffer"/>}
/>    
</a>
</Link>
</div>
</Col>
</Grid>
</Container>



<div className="container padding-top-50">
    <div className="width-500-max">
    <div className="text-bigger text-indigo">Create Responsive Websites</div>
<div className="h4">Create Responsive Websites With Css Grid.</div>
<div className="section">
    Create awesome responsive websites with css flex-box and media queries.
    Our framework partition your website in to columns and rows which are 
    responsive to fit all screen sizes.
</div>
        </div>
<div className="row">
 <div className="col padding border sm-12 md-6 lg-8 light height-50">sm-12 md-6 lg-8</div>
 <div className="col padding border sm-12 md-6 lg-4  height-50">sm-12 md-6 lg-4</div>
 <div className="col padding border sm-6 md-8 lg-6  height-50">sm-6 md-8 lg-6</div>
 <div className="col padding border sm-6 md-4 lg-6 light height-50">sm-6 md-4 lg-6</div>
</div> 

</div>

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