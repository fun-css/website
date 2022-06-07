import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
function list() {
    return (
        <section>
    <Head>
   <title>Css List - Funcss Framework</title>
     <meta name='description' content='
      Create nice and responsive css Lists and collection, create simple list, stripped list, bordered list and
      list with header.
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
          <a href="#simpleList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple List</div></a>
          <a href="#borderedList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Bordered List</div></a> 
          <a href="#strippedList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Stripped List</div></a> 
          <a href="#headedList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">List With Header</div></a>
          </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="header h1 text-lighter text-indigo">
        Css List - Funcss Framework
        </h1>
        <div className="h4">
        List can be use to collect data and group the data into rows. create simple list, stripped list, bordered list and list with header.
        </div>

        <div className="section hr">

        </div>
       </div>

       
<div className="container padding-top-40" id="simpleList">
<div className="h4 topic">Simple List</div>
<div className="note">
    The <span className="badge">list</span> class is use to create a simple list.
</div>
<div className="code">
   <xmp>
{`<ul class="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>FUN CSS</li>
  <li>JAVASCRIPT</li>
</ul>`}
   </xmp>
</div>
<div className="preview">
<ul className="list">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
</ul>
        
</div>
</div>
       
<div className="container padding-top-40" id="borderedList">
<div className="h4 topic">Bordered List</div>
<div className="note">
   The <span className="badge">bordered</span> class is use to add a border to your list. You can also add a hoverable effect 
   with the class of <span className="badge">hover</span>
</div>
<div className="code">
   <xmp>
{`<ul class="list bordered hover">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
</ul>`}
   </xmp>
</div>
<div className="preview">
<ul className="list bordered hover">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
</ul>  
</div>
</div>
       
<div className="container padding-top-40" id="strippedList">
<div className="h4 topic">Stripped List</div>
<div className="note">
    The <span className="badge">stripped</span> class is use to create a stripped list. stripped list have an even background color 
    distribution.
</div>
<div className="code">
   <xmp>
{`<ul class="list stripped">
  <li>HTML</li>
  <li>CSS</li>
  <li>FUN CSS</li>
  <li>JAVASCRIPT</li>
  <li>FUN CSS</li>
  <li>REACT</li>
</ul>`}
   </xmp>
</div>
<div className="preview">
<ul className="list stripped">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
    <li>FUN CSS</li>
    <li>REACT</li>
</ul>
     
</div>
</div>

<div className="container padding-top-40" id="headedList">
<div className="h4 topic">List Header</div>
<div className="note">
  You can add a header to your list by using our <span className="badge">header</span> class.
</div>
<div className="code">
   <xmp>
{`<ul class="list stripped bordered">
 <li><h2>Courses</h2></li>
 <li>HTML</li>
 <li>CSS</li>
 <li>FUN CSS</li>
 <li>JAVASCRIPT</li>
 <li>FUN CSS</li>
 <li>REACT</li>
</ul>`}
   </xmp>
</div>
<div className="preview">
<ul className="list stripped bordered">
    <li><div className="h2">Courses</div></li>
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
    <li>FUN CSS</li>
    <li>REACT</li>
</ul>
</div>
</div>

<Footer />
</div>
</div>
   </section>
    );
}

export default list;