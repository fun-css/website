import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';
import  Head  from 'next/head';

function About() {
    const team = [
        {
            id:1,
            name: "Ahmed Salim Adam",
            job:"Backend Developer",
            picture:"/team/salim.jpg",
            about:"Ahmed Salim is an IT Manager and a software engineer focused on building Backend architecture, systems and services"
        },
        {
            id:2,
            name: "Iddris Abdul Wahab",
            job:"Front-end Developer",
            picture:"/images/avatar.png",
            about:"Abdul Wahab is a Frontend developer, UI/UX Designer, who loves designing and developing creative web application and websites."
        }
    ]
    const [members, setmembers] = useState(team);
    const [modal, setmodal] = useState("none");
    const [member, setmember] = useState([]);
    const Handlemodal = (id)=>{
    members.filter(member =>{
    if(member.id === id){
    return member
    }
    }).map(filter=>{
     setmember(filter)
     setmodal("block")
    })
    }

    const [ads, setads] = useState(<div id="container-8efab60a26b5c40a3a52aab9bdb98896"></div>)
    useEffect(()=>{
    setTimeout(()=>{
        const native = <div id="container-8efab60a26b5c40a3a52aab9bdb98896"></div>
        setads(native)
        console.log("this is a rendure")
    },1000)
    })
    return (
        <section>
        <Head>
        <title>About Funcss Framework</title>
          <meta name='description' content='
      Funcss was developed by Ahmed Salim and Iddris Abdul Wahab, the framework
      ease your work when creating website.
    ' />
    <meta
    name="keywords"
    content="Ahmed Salim, Iddris About Wahab, funcss, framework"
    />
        </Head>
        <div className="content-wrapper">
     <div className="sub-content padding">
      <div className="border padding ads content-middle light">
     {ads}
      </div>
      <div className="section">
        <a href="#intro" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
        {/* <a href="#video" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Starter Video</div></a>  */}
        <a href="#team" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Team</div></a>
     </div>
     </div>
         <div className="main-content">
         <div className="container">
      <h1 className="header text-indigo">
         Create Your Dream Project With Funcss
      </h1>
      <div className="h6 width-500-max">
       Meet Our Team And  Learn More.
      </div>

     </div>



<div className="container padding-top-40">
<div className="no-margin h4 topic padding-bottom-30" id="team">Meet The Team</div>
<div className="note">
Fun responsive css framework is developed to ease your work in developing websites and 
    webpages. It comes with pre-defined classes and components that you can use for your projects. 
     Meet the developers who contributed for the success of this project.
</div>

{
    team.map(member=>(
        <div key={member.name}>
            <div className="block-small  pointer hover-shadow padding">
    <div className="text-center">
        <Image src={member.picture} width={200} height={200} className="height-100 width-100 circle" alt={member.name} onClick={()=>Handlemodal(member.id)} />
    </div>
    <div className="padding ">
    <div className="h4">{member.name}</div>
    <div className="">
    <i className="fas fa-check text-indigo"></i> &nbsp;
    {member.job}
    </div>
    <div className="lato">
        {member.about}
    </div>
    </div>
</div>
        </div>
    ))
}

</div>


<Footer />
         </div>

         </div>
    
   <div className="modal" style={{display:`${modal}`}}>
   <div className="close-modal text-bigger text-red"  onClick={()=>setmodal("none")}>&times;</div>
   <div className="modal-content">
<div>
    <img src={member.picture} className="width-300" />
</div>
   </div>
   </div>
 </section>
    );
}

export default About;