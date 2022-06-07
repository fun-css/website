import React from 'react';
import { useState , useEffect } from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
function Modal(props) {
    const [modal, setmodal] = useState("-100%");
    const modalstyle = "`${modal}`"
    useEffect(() => {
     const modal = document.querySelector(".modal")
     const modalclose = document.querySelector(".close-modal")
     window.addEventListener("click" ,(e)=>{
        if(e.target === modal || e.target === modalclose){
           modal.style.display = "none"
        }
     })
   
    })
   //  react modal
    const openModal = async(id)=>{
      const modal = await document.querySelector(`#${id}`)
      modal.style.display = "block"
    }
    return (
        <div>
                    <section>
<Head>
   <title>Css Modals - Funcss Framework</title>
     <meta name='description' content='
      Create nice css modals with funcss framework, modals can be use to create login or signup forms.
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
          <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
          <a href="#modal" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Modal</div></a> 
          <a href="#note" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Note</div></a>         </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="header h1 text-lighter text-indigo">
          Css Modal - Funcss Framework
        </h1>
        <div className="h4">
          Modals are can be use to show information on popup.
          Create nice css modals with funcss framework, modals can be use to create login or signup forms.
        </div>

        <div className="section hr">

        </div>
       </div>

       
<div className="container padding-top-40" id="introduction">
<div className="h4 topic">Css Modal</div>
<div className="note">
    The <span className="badge">modal</span> class is use to create a modal.It wraps the <span className="badge">modal-content</span> class.
    which contains the content of your modal
</div>
<div className="code">
   <xmp>
{`<button className="button indigo text-white card open-modal" onClick="openModal('myModal')">Open Modal</button>
<div className="modal" id='myModal'>
<div className="modal-content">
<div className="modal-title">Modal Header</div>
<div className='modal-body'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
</div>
<div className="modal-action">
<button className="button blue text-white">Save</button>
<button className="button red text-white close-modal">Abort</button>
</div>
</div>
</div>
`}
   </xmp>
</div>
<div className="code react">
   <xmp>
{`const App = ()=>{
//  react modal
const openModal = async(id)=>{
const modal = await document.querySelector("#" + id)
modal.style.display = "block"
}
return(
<div>

<div className="modal" id='myModal'>
<div className="modal-content">
<div className="modal-title">Modal Header</div>
<div className='modal-body'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
</div>
<div className="modal-action">
   <button className="button blue text-white">Save</button>
   <button className="button red text-white close-modal">Abort</button>
</div>
</div>
</div>
</div>
)
}`}
   </xmp>
</div>

<div className="preview" id="modal">
<button className="button indigo text-white card open-modal" onClick={()=>openModal("myModal")}>Open Modal</button>
   <div className="modal" id='myModal'>
   <div className="modal-content">
   <div className="modal-title">Modal Header</div>
   <div className='modal-body'>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   </div>
   <div className="modal-action">
      <button className="button blue text-white">Save</button>
      <button className="button red text-white close-modal">Abort</button>
   </div>
   </div>
   </div>
</div>
</div>
 

<div className="container">
<div className="note" id="note">
    <div className="note-title">Note:</div>
    <div>
     Modals are good for Login forms, signup forms and displaying other relevant information to the user.
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

export default Modal;