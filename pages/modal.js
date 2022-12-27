import React from 'react';
import { useState , useEffect } from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
import Modal from '../Funcss/Components/Modal';
import Modalcontent from './../Funcss/Components/Modalcontent';
import Modalaction from './../Funcss/Components/Modalaction';
import Modalheader from '../Funcss/Components/Modalheader';
import Typography from '../Funcss/Components/Typography';
import Button from '../Funcss/Components/Button';
import Table from './../Funcss/Components/Table';
import TableHead from './../Funcss/Components/TableHead';
import TableRow from './../Funcss/Components/TableRow';
import TableData from './../Funcss/Components/TableData';
function Funmodal(props) {
    const [modal, setmodal] = useState(false);
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

<Table className="table">
<TableHead>
    <TableData>Prop</TableData>
    <TableData>Description</TableData>
    <TableData>Value</TableData>
</TableHead>
<TableRow>
    <TableData>open</TableData>
    <TableData>Open and close modal</TableData>
    <TableData>Boolean</TableData>
</TableRow>
<TableRow>
    <TableData>animation</TableData>
    <TableData>animate modal</TableData>
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
       

<div className="code react">
   <xmp>
{`import Modal from 'Funcss/Components/Modal';
import Modalcontent from 'Funcss/Components/Modalcontent';
import Modalaction from 'Funcss/Components/Modalaction';
import Modalheader from 'Funcss/Components/Modalheader';
import Typography from 'Funcss/Components/Typography';
import Button from 'Funcss/Components/Button';
const App = ()=>{
return(
<div>
<Button text="open modal" color="success" onClick={()=>setmodal(true)} />
<Modal animation="ScaleUp" duration={1} open={modal}>
<Modalheader>
<Typography text="Modal Header" heading="h2"/>
</Modalheader>
<Modalcontent>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius ipsa ipsum vitae, sed vero repellendus quibusdam tenetur laudantium, temporibus adipisci explicabo fuga nobis possimus quia, itaque ab at iure.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam earum facilis alias dolorem, quas doloremque. Eveniet repellendus nisi sint placeat maxime optio doloremque aliquam quasi veniam expedita, repellat animi.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio natus nam repellendus optio corporis, dicta dolorum laborum veniam numquam earum ut adipisci velit amet quibusdam quaerat perferendis minus id incidunt!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio natus nam repellendus optio corporis, dicta dolorum laborum veniam numquam earum ut adipisci velit amet quibusdam quaerat perferendis minus id incidunt!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio natus nam repellendus optio corporis, dicta dolorum laborum veniam numquam earum ut adipisci velit amet quibusdam quaerat perferendis minus id incidunt!
</Modalcontent>
<Modalaction funcss="text-right">
<Button color="white" bg="success">Save</Button>
<Button color="white" bg="red" onClick={()=>setmodal(false)}>Cancel</Button>
</Modalaction>
</Modal>

</div>
)
}`}
   </xmp>
</div>

<div className="preview" id="modal">
<Button text="open modal" color="success" onClick={()=>setmodal(true)} />

   <Modal animation="ScaleUp" duration={1} open={modal}>
<Modalheader>
   <Typography text="Modal Header" heading="h2"/>
</Modalheader>
<Modalcontent>
   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius ipsa ipsum vitae, sed vero repellendus quibusdam tenetur laudantium, temporibus adipisci explicabo fuga nobis possimus quia, itaque ab at iure.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam earum facilis alias dolorem, quas doloremque. Eveniet repellendus nisi sint placeat maxime optio doloremque aliquam quasi veniam expedita, repellat animi.
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio natus nam repellendus optio corporis, dicta dolorum laborum veniam numquam earum ut adipisci velit amet quibusdam quaerat perferendis minus id incidunt!
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio natus nam repellendus optio corporis, dicta dolorum laborum veniam numquam earum ut adipisci velit amet quibusdam quaerat perferendis minus id incidunt!
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio natus nam repellendus optio corporis, dicta dolorum laborum veniam numquam earum ut adipisci velit amet quibusdam quaerat perferendis minus id incidunt!
</Modalcontent>
<Modalaction funcss="text-right">
<Button color="white" bg="success">Save</Button>
<Button color="white" bg="red" onClick={()=>setmodal(false)}>Cancel</Button>
</Modalaction>
</Modal>

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

export default Funmodal;