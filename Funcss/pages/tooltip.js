import React from 'react';
import Footer from '../components/Footer';
import  Head from 'next/head';
import ToolTip from '../Funcss/Components/ToolTip';
import Button from '../Funcss/Components/Button';
import Tip from '../Funcss/Components/Tip';
import Table from './../Funcss/Components/Table';
import TableHead from './../Funcss/Components/TableHead';
import TableRow from './../Funcss/Components/TableRow';
import TableData from './../Funcss/Components/TableData';
function tooltip(props) {
    return (
        <section>
    <Head>
   <title>Css Progressbars - Funcss Framework</title>
     <meta name='description' content='
     Tooltips provides information about a particular element when you hover on that element.
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
        <a href="#top" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Top Tooltip</div></a>
        <a href="#bottom" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Bottom Tooltip</div></a> 
        <a href="#lefttip" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Left Tooltip</div></a> 
        <a href="#righttip" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Right Tooltip</div></a> 
        </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="header text-indigo">
          Css Tooltip - Funcss Framework
        </h1>
        <div className="h5 width-500-max">
         Tooltips provides information about a particular element when you hover on that element.
        </div>
        <Table className="table">
<TableHead>
    <TableData>Prop</TableData>
    <TableData>Description</TableData>
    <TableData>Value</TableData>
</TableHead>
<TableRow>
    <TableData>tip</TableData>
    <TableData>Defines the position of your tip</TableData>
    <TableData>top , bottom , left , right</TableData>
</TableRow>
<TableRow>
    <TableData>animation</TableData>
    <TableData>animate tip</TableData>
    <TableData>ScaleUp , Opacity</TableData>
</TableRow>
<TableRow>
    <TableData>duration</TableData>
    <TableData>animation duration</TableData>
    <TableData>number</TableData>
</TableRow>
<TableRow>
    <TableData>funcss</TableData>
    <TableData>Add funcss classes</TableData>
    <TableData>funcss classes</TableData>
</TableRow>
</Table>
       </div>


       
<div className="container padding-top-40" id="simple">
<div className="h4 topic"> Css Top Tooltip</div>
<div className="note">
The class <span className="badge">top-tip</span> is use to create a tooltip to the top of that element.
</div>
<div className="code">
   <xmp>
{`import ToolTip from 'Funcss/Components/ToolTip';
import Button from 'Funcss/Components/Button';
import Tip from 'Funcss/Components/Tip';
<ToolTip>
  <Button text="Top Tooltip" color="success"/>
  <Tip tip="top" animation="ScaleUp" duration={1} content="Hello world!"/>
</ToolTip>`}
   </xmp>
</div>

<div className="preview" id="modal">
<ToolTip>
  <Button text="Top Tooltip" color="success"/>
  <Tip tip="top" animation="ScaleUp" duration={1} content="Hello world!"/>
</ToolTip>
</div>


</div>

<div className="container padding-top-40" id="bottom">
<div className="h4 topic"> Css Bottom Tooltip</div>
<div className="note">
The class <span className="badge">bottom-tip</span> is use to create a tooltip which appears on the bottom of that element.
</div>
<div className="code">
   <xmp>
{`import ToolTip from 'Funcss/Components/ToolTip';
import Button from 'Funcss/Components/Button';
import Tip from 'Funcss/Components/Tip';
<ToolTip>
  <Button text="Bottom Tooltip" color="success"/>
  <Tip tip="bottom" animation="Opacity" duration={2} content="Hello world!"/>
</ToolTip>`}
   </xmp>
</div>

<div className="preview">
<ToolTip>
  <Button text="Bottom Tooltip" color="success"/>
  <Tip tip="bottom" animation="Opacity" duration={2} content="Hello world!"/>
</ToolTip>
</div>

</div>

<div className="container padding-top-40" id="lefttip">
<div className="h4 topic"> Css Left Tooltip</div>
<div className="note">
The class <span className="badge">left-tip</span> is use to create a tooltip which appears on at the left side of that element.
</div>
<div className="code">
   <xmp>
{`import ToolTip from 'Funcss/Components/ToolTip';
import Button from 'Funcss/Components/Button';
import Tip from 'Funcss/Components/Tip';
<ToolTip>
  <Button text="Left Tooltip" color="success"/>
  <Tip tip="left" content="Hello world!"/>
</ToolTip>
`}
   </xmp>
</div>

<div className="preview">
<ToolTip>
  <Button text="Left Tooltip" color="success"/>
  <Tip tip="left" content="Hello world!"/>
</ToolTip>

</div>
</div>

<div className="container padding-top-40" id="righttip">
<div className="h4 topic"> Css Right Tooltip</div>
<div className="note">
The class <span className="badge">right-tip</span> is use to create a tooltip which appears at the right side of that element.
</div>
<div className="code">
   <xmp>
{`import ToolTip from 'Funcss/Components/ToolTip';
import Button from 'Funcss/Components/Button';
import Tip from 'Funcss/Components/Tip';
<ToolTip>
  <Button text="Right Tooltip" color="success"/>
  <Tip tip="right" content="Hello world!"/>
</ToolTip>
`}
   </xmp>
</div>

<div className="preview">
<ToolTip>
  <Button text="Right Tooltip" color="success"/>
  <Tip tip="right" content="Hello world!"/>
</ToolTip>

</div>

</div>


 



<Footer />

</div>
</div>
   </section>
    );
}

export default tooltip;