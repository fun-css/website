import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head'
import Input from './../Funcss/Components/Input';
import IconicInput from './../Funcss/Components/IconicInput';
import Icon from './../Funcss/Components/Icon';
function input() {
    return (
        <section>
            <Head>
            <title>Css input Field - Funcss Framework</title>
          <meta name='description' content='
      Create nice css input fields using funcss, create borderless input, bordered input and round 
      input field
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
               <a href="#simpleinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Input</div></a>
               <a href="#borderedinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Bordered Input</div></a> 
               <a href="#borderlessinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Borderless Input</div></a>
               <a href="#roundedinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Rounded Input</div></a>
               <a href="#animatedinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Animated Input</div></a>
              
            </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="text-big text-lighter header text-indigo">
                Css Input Field - Funcss Framework
             </h1>
             <div className="h4">
               Inputs Are Use To Accept Data From The User.Create simple input field, bordered input,
               borderless input field and round input field.
             </div>

             <div className="section hr">
    
             </div>
            </div>

            
 <div className="container padding-top-40" id="simpleinput">
    <div className="h4 topic">Simple Input Field</div>
    <div className="note">
        The <span className="badge">input</span> class is use to create a simple input field with a border at the bottom.
    </div>
    <div className="code">
        <xmp>
 {`
 import Input from 'Funcss/Components/Input';
<Input type="text" label="This is a simple input" funcss="full-width"/>
<Input type="text" bordered={true} label="This is a bordered" funcss="full-width section"/>
 `}
        </xmp>
    </div>
    <div className="preview">
    <Input type="text" label="This is a simple input" funcss="full-width"/>
<Input type="text" bordered={true} label="This is a bordered" funcss="full-width section"/>
    </div>
</div>
            
 <div className="container padding-top-40" id="iconicInput">
    <div className="h4 topic">Input With Icon</div>

<div className="code">
<xmp>
{`import Input from 'Funcss/Components/Input';
import IconicInput from 'Funcss/Components/IconicInput';
import Icon from 'Funcss/Components/Icon';
return(
<div>
<IconicInput funcss="section full-width" position="left" >
<Input type="email" label="Enter your email" funcss="full-width" bordered={true}  />
<Icon icon="far fa-user-circle" color="indigo" />
</IconicInput>
<IconicInput position="right" >
<Input type="text" label="Enter your password" funcss="full-width" bordered={true}  />
<Icon icon="far fa-eye" color="indigo"/>
</IconicInput>
</div>
)
`}
</xmp>
</div>
    <div className="preview">

<div className="card padding">
<IconicInput funcss="section full-width" position="left" >
<Icon icon="far fa-user-circle" color="indigo" />
<Input type="email" label="Enter your email" funcss="full-width" bordered={true}  />
</IconicInput>
<IconicInput position="right" >
<Input type="text" label="Enter your password" funcss="full-width" bordered={true}  />
<Icon icon="far fa-eye" color="indigo"/>
</IconicInput>
</div>      

    </div>
</div>
            
 <div className="container padding-top-40" id="borderlessinput">
    <div className="h4 topic">Borderless Input Field</div>
    <div className="note">
    The <span className="borderless"> borderless </span> class is use to remove all kind of border in your input field.
    </div>
    <div className="code">
        <xmp>
            {`
<input class="input full-width borderless light padding" placeholder="This is a borderless input field." />
            `}
        </xmp>
    </div>
    <div className="preview">

<div className="card padding">
<div className="text-larger padding">Borderless Input Field</div>
<input className="input full-width borderless light padding" placeholder="This is a borderless input field." />
</div>      

    </div>
</div>
 <div className="container padding-top-40" id="roundedinput">
    <div className="h4 topic">Rounded Input Field</div>
    <div className="note">
    The <span className="badge"> round-value </span> class is use to create a rounded input, the value can be
    <span className="badge">20, 30, 40 and 50</span>
    </div>
    <div className="code">
        <xmp>
            {`
<input class="input full-width round-30 light padding" placeholder="This is a rounded input with border-radius 15" />
            `}
        </xmp>
    </div>
    <div className="preview">

<div className="card padding">
<div className="text-larger padding">Rounded Input Field</div>
<input className="input full-width round-30 light padding" placeholder="This is a rounded input with border-radius 15" />
</div>      

    </div>
</div>
 <div className="container padding-top-40" id="animatedinput">
    <div className="h4 topic">Animated Input Field</div>
    <div className="code">
        <xmp>
{`<input class="input bordered light animate-width padding" placeholder="extend width"/>`}
        </xmp>
    </div>
    <div className="preview">

<div className="card padding">
<div className="text-larger padding">Animated Width</div>
<input className="input bordered light animate-width padding" placeholder="extend width"/>
</div>      

    </div>
</div>

<Footer />

</div>
</div>
        </section>
    );
}

export default input;