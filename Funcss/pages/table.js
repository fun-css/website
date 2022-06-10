import React from 'react';
import Footer from '../components/Footer';
import Head from "next/head"
import Typography from "../Funcss/Components/Typography"
import Breadcrumb from "../Funcss/Components/Breadcrumb"
import Link from "next/link"
import Table from './../Funcss/Components/Table';
import TableHead from './../Funcss/Components/TableHead';
import TableRow from './../Funcss/Components/TableRow';
import TableData from './../Funcss/Components/TableData';

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
               
        <Link href= "/">
        <a>Home</a>
        </Link>
        <Breadcrumb type="slash" />
        <Link href= "#">
        <a>Tables</a>
        </Link>
        <h1 className="header text-indigo">
           Tables
        </h1>
        <div className="h5 width-500-max">
         Tables group content in to rows and columns. Create nice and responsive css tables, create simple tables, stripped tables, hoverable table, borederd table and responsive table with funcss
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
<Table className="table">
<TableHead>
    <TableData>course</TableData>
    <TableData>votes</TableData>
    <TableData>skills</TableData>
</TableHead>
<TableRow>
    <TableData>HTML</TableData>
    <TableData>66%</TableData>
    <TableData>Very Good</TableData>
</TableRow>
<TableRow>
    <TableData>CSS</TableData>
    <TableData>99%</TableData>
    <TableData>Excellent</TableData>
</TableRow>
<TableRow>
    <TableData>JAVASCRIPT</TableData>
    <TableData>50%</TableData>
    <TableData>Good</TableData>
</TableRow>
<TableRow>
    <TableData>HTML</TableData>
    <TableData>66%</TableData>
    <TableData>Very Good</TableData>
</TableRow>
<TableRow>
    <TableData>CSS</TableData>
    <TableData>99%</TableData>
    <TableData>Excellent</TableData>
</TableRow>
<TableRow>
    <TableData>JAVASCRIPT</TableData>
    <TableData>50%</TableData>
    <TableData>Good</TableData>
</TableRow>
</Table>
       `}
   </xmp>
</div>
<div className="preview">
<Table >
     <TableHead>
         <TableData>course</TableData>
         <TableData>votes</TableData>
         <TableData>skills</TableData>
     </TableHead>
     <TableRow>
         <TableData>HTML</TableData>
         <TableData>66%</TableData>
         <TableData>Very Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>CSS</TableData>
         <TableData>99%</TableData>
         <TableData>Excellent</TableData>
     </TableRow>
     <TableRow>
         <TableData>JAVASCRIPT</TableData>
         <TableData>50%</TableData>
         <TableData>Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>HTML</TableData>
         <TableData>66%</TableData>
         <TableData>Very Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>CSS</TableData>
         <TableData>99%</TableData>
         <TableData>Excellent</TableData>
     </TableRow>
     <TableRow>
         <TableData>JAVASCRIPT</TableData>
         <TableData>50%</TableData>
         <TableData>Good</TableData>
     </TableRow>
  </Table>
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
<TableHead>
    <th>course</th>
    <th>votes</th>
    <th>skills</th>
</TableHead>
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
<Table stripped="stripped">
     <TableHead>
         <TableData>course</TableData>
         <TableData>votes</TableData>
         <TableData>skills</TableData>
     </TableHead>
     <TableRow>
         <TableData>HTML</TableData>
         <TableData>66%</TableData>
         <TableData>Very Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>CSS</TableData>
         <TableData>99%</TableData>
         <TableData>Excellent</TableData>
     </TableRow>
     <TableRow>
         <TableData>JAVASCRIPT</TableData>
         <TableData>50%</TableData>
         <TableData>Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>HTML</TableData>
         <TableData>66%</TableData>
         <TableData>Very Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>CSS</TableData>
         <TableData>99%</TableData>
         <TableData>Excellent</TableData>
     </TableRow>
     <TableRow>
         <TableData>JAVASCRIPT</TableData>
         <TableData>50%</TableData>
         <TableData>Good</TableData>
     </TableRow>
  </Table>
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
<TableHead>
    <th>course</th>
    <th>votes</th>
    <th>skills</th>
</TableHead>
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
<Table hoverable="hoverable">
     <TableHead>
         <TableData>course</TableData>
         <TableData>votes</TableData>
         <TableData>skills</TableData>
     </TableHead>
     <TableRow>
         <TableData>HTML</TableData>
         <TableData>66%</TableData>
         <TableData>Very Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>CSS</TableData>
         <TableData>99%</TableData>
         <TableData>Excellent</TableData>
     </TableRow>
     <TableRow>
         <TableData>JAVASCRIPT</TableData>
         <TableData>50%</TableData>
         <TableData>Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>HTML</TableData>
         <TableData>66%</TableData>
         <TableData>Very Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>CSS</TableData>
         <TableData>99%</TableData>
         <TableData>Excellent</TableData>
     </TableRow>
     <TableRow>
         <TableData>JAVASCRIPT</TableData>
         <TableData>50%</TableData>
         <TableData>Good</TableData>
     </TableRow>
  </Table>
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
<TableHead>
    <th>course</th>
    <th>votes</th>
    <th>skills</th>
</TableHead>
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
<Table bordered="bordered" showTotal={true}>
     <TableHead funcss="black text-white">
         <TableData>course</TableData>
         <TableData>votes</TableData>
         <TableData>skills</TableData>
     </TableHead>
     <TableRow>
         <TableData>HTML</TableData>
         <TableData>66%</TableData>
         <TableData>Very Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>CSS</TableData>
         <TableData>99%</TableData>
         <TableData>Excellent</TableData>
     </TableRow>
     <TableRow>
         <TableData>JAVASCRIPT</TableData>
         <TableData>50%</TableData>
         <TableData>Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>HTML</TableData>
         <TableData>66%</TableData>
         <TableData>Very Good</TableData>
     </TableRow>
     <TableRow>
         <TableData>CSS</TableData>
         <TableData>99%</TableData>
         <TableData>Excellent</TableData>
     </TableRow>
     <TableRow>
         <TableData>JAVASCRIPT</TableData>
         <TableData>50%</TableData>
         <TableData>Good</TableData>
     </TableRow>
  </Table>

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
<table className="table ">
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