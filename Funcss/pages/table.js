import React from 'react';
import Footer from '../components/Footer';
import Head from "next/head"
function table() {
    return (
        <section>
              <Head>
            <title>Css Tables - Funcss Framework</title>
          <meta name='description' content='
      Create nice and responsive css tables, create simple tables, stripped tables, hoverable table, borederd table
      and responsive table with funcss
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
          <a href="#simpleTable" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Table</div></a>
          <a href="#strippedTable" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Stripped Table</div></a> 
          <a href="#hoverableTable" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Hoverable table</div></a>
          <a href="#borderedTable" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Bordered Table</div></a>
          <a href="#responsiveTable" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Responsive Table</div></a>
     </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="header h1 text-lighter text-indigo">
           Tables
        </h1>
        <div className="h4">
         Tables group content in to rows and columns. Create nice and responsive css tables, create simple tables, stripped tables, hoverable table, borederd table and responsive table with funcss
        </div>

        <div className="section hr">

        </div>
       </div>

       
<div className="container padding-top-40" id="simpleTable">
<div className="h4 topic">Simple Table</div>
<div className="note">
    Just add the class <span className="badge">table</span> to create a simple tabel.
</div>
<div className="code">
   <xmp>
       {`
<table class="table">
<thead>
    <th>course</th>
    <th>votes</th>
    <th>skills</th>
</thead>
<tr>
    <td>HTML</td>
    <td>66%</td>
    <td>Very Good</td>
</tr>
<tr>
    <td>CSS</td>
    <td>99%</td>
    <td>Excellent</td>
</tr>
<tr>
    <td>JAVASCRIPT</td>
    <td>50%</td>
    <td>Good</td>
</tr>
</table>
       `}
   </xmp>
</div>
<div className="preview">
<table className="table">
     <thead>
         <th>course</th>
         <th>votes</th>
         <th>skills</th>
     </thead>
     <tr>
         <td>HTML</td>
         <td>66%</td>
         <td>Very Good</td>
     </tr>
     <tr>
         <td>CSS</td>
         <td>99%</td>
         <td>Excellent</td>
     </tr>
     <tr>
         <td>JAVASCRIPT</td>
         <td>50%</td>
         <td>Good</td>
     </tr>
  </table>
</div>
</div>
       
<div className="container padding-top-40" id="strippedTable">
<div className="h4 topic">Stripped Table</div>
<div className="note">
    Just add the class <span className="badge">stripped</span> to create a stripped tabel.
</div>
<div className="code">
   <xmp>
       {`
<table class="table stripped">
<thead>
    <th>course</th>
    <th>votes</th>
    <th>skills</th>
</thead>
<tr>
    <td>HTML</td>
    <td>66%</td>
    <td>Very Good</td>
</tr>
<tr>
    <td>CSS</td>
    <td>99%</td>
    <td>Excellent</td>
</tr>
<tr>
    <td>JAVASCRIPT</td>
    <td>50%</td>
    <td>Good</td>
</tr>
</table>
       `}
   </xmp>
</div>
<div className="preview">
<table className="table stripped">
     <thead>
         <th>course</th>
         <th>votes</th>
         <th>skills</th>
     </thead>
     <tr>
         <td>HTML</td>
         <td>66%</td>
         <td>Very Good</td>
     </tr>
     <tr>
         <td>CSS</td>
         <td>99%</td>
         <td>Excellent</td>
     </tr>
     <tr>
         <td>JAVASCRIPT</td>
         <td>50%</td>
         <td>Good</td>
     </tr>
  </table>
</div>
</div>
       
<div className="container padding-top-40" id="hoverableTable">
<div className="h4 topic">Hoverable Table</div>
<div className="note">
    The <span className="badge">hoverable</span> class is use to add a hover effect on each table row.
</div>
<div className="code">
   <xmp>
       {`
<table class="table stripped hoverable">
<thead>
    <th>course</th>
    <th>votes</th>
    <th>skills</th>
</thead>
<tr>
    <td>HTML</td>
    <td>66%</td>
    <td>Very Good</td>
</tr>
<tr>
    <td>CSS</td>
    <td>99%</td>
    <td>Excellent</td>
</tr>
<tr>
    <td>JAVASCRIPT</td>
    <td>50%</td>
    <td>Good</td>
</tr>
</table>
  `}
   </xmp>
</div>
<div className="preview">
<table className="table stripped hoverable">
     <thead>
         <th>course</th>
         <th>votes</th>
         <th>skills</th>
     </thead>
     <tr>
         <td>HTML</td>
         <td>66%</td>
         <td>Very Good</td>
     </tr>
     <tr>
         <td>CSS</td>
         <td>99%</td>
         <td>Excellent</td>
     </tr>
     <tr>
         <td>JAVASCRIPT</td>
         <td>50%</td>
         <td>Good</td>
     </tr>
  </table>

</div>
</div>
<div className="container padding-top-40" id="borderedTable">
<div className="h4 topic">Bordered Table</div>
<div className="note">
    Just add the class <span className="badge">bordered</span> to create a bordered tabel.
</div>
<div className="code">
   <xmp>
       {`
<table class="table stripped hoverable bordered">
<thead>
    <th>course</th>
    <th>votes</th>
    <th>skills</th>
</thead>
<tr>
    <td>HTML</td>
    <td>66%</td>
    <td>Very Good</td>
</tr>
<tr>
    <td>CSS</td>
    <td>99%</td>
    <td>Excellent</td>
</tr>
<tr>
    <td>JAVASCRIPT</td>
    <td>50%</td>
    <td>Good</td>
</tr>
</table>
  `}
   </xmp>
</div>
<div className="preview">
<table className="table stripped hoverable bordered">
     <thead>
         <th>course</th>
         <th>votes</th>
         <th>skills</th>
     </thead>
     <tr>
         <td>HTML</td>
         <td>66%</td>
         <td>Very Good</td>
     </tr>
     <tr>
         <td>CSS</td>
         <td>99%</td>
         <td>Excellent</td>
     </tr>
     <tr>
         <td>JAVASCRIPT</td>
         <td>50%</td>
         <td>Good</td>
     </tr>
  </table>

</div>
</div>
<div className="container padding-top-40" id="responsiveTable">
<div className="h4 topic">Responsive Table</div>
<div className="note">
    Wrap your table in a div with class <span className="badge">horizontal-scroll</span> to create a responsive table.
</div>
<div className="code">
   <xmp>
       {`
<div class="horizontal-scroll">
  <table class="table stripped text-small">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
    </tr>
  </table>
</div>
`}
   </xmp>
</div>
<div className="preview">

<div className="horizontal-scroll">
<table className="table stripped text-small">
<tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
    </tr>
  </table>
</div>


</div>
</div>

<Footer />

</div>
</div>
   </section>
    );
}

export default table;