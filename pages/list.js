import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
import List from './../Funcss/Components/List';
import ListItem from './../Funcss/Components/ListItem';
import RowFlex from './../Funcss/Components/RowFlex';
import Div from './../Funcss/Components/Div';
import Icon from './../Funcss/Components/Icon';
import Card from './../Funcss/Components/Card';
import Button from './../Funcss/Components/Button';
import Avatar from './../Funcss/Components/Avatar';
import Typography from './../Funcss/Components/Typography';
import Middle from './../Funcss/Components/Middle';
import Hr from './../Funcss/Components/Hr';
import Section from './../Funcss/Components/Section';
import Input from './../Funcss/Components/Input';
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
          <a href="#iconicList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Iconic List</div></a> 
          <a href="#imageList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Image List</div></a> 
          <a href="#checkList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Checkbox List</div></a>
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
{`import List from 'Funcss/Components/List';
import ListItem from 'Funcss/Components/ListItem';
return(
   <List>
   <ListItem>HTML</ListItem>
   <ListItem>CSS</ListItem>
   <ListItem>FUN CSS</ListItem>
   <ListItem>JAVASCRIPT</ListItem>
   </List>
   );
`}
   </xmp>
</div>
<div className="preview">
<List>
<ListItem>HTML</ListItem>
<ListItem>CSS</ListItem>
<ListItem>FUN CSS</ListItem>
<ListItem>JAVASCRIPT</ListItem>
</List>
</div>
</div>
       
<div className="container padding-top-40" id="iconicList">
<div className="h4 topic">Iconic List</div>

<div className="react code">
   <xmp>
{`import List from 'Funcss/Components/List';
import ListItem from 'Funcss/Components/ListItem';
import RowFlex from 'Funcss/Components/RowFlex';
import Div from 'Funcss/Components/Div';
import Icon from 'Funcss/Components/Icon';
import Card from 'Funcss/Components/Card';
import Avatar from 'Funcss/Components/Avatar';
import Typography from 'Funcss/Components/Typography';
import Middle from 'Funcss/Components/Middle';
import Hr from 'Funcss/Components/Hr';
import Section from 'Funcss/Components/Section';

return(
<Card funcss="padding width-300-max">
<List>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
         <Avatar width="40px" height="40px" bg="light">
         <Icon icon="fas fa-check" color="indigo" />
         </Avatar>
      </Div>
      <Div funcss="padding">HTML Lesson</Div>
      <Div funcss="padding">
         <Icon icon="fas fa-trash" funcss="pointer hover-text-red"/>
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
         <Avatar width="40px" height="40px" bg="light">
         <Icon icon="fas fa-check" color="indigo" />
         </Avatar>
      </Div>
      <Div funcss="padding">CSS Lesson</Div>
      <Div funcss="padding">
         <Icon icon="fas fa-trash" funcss="pointer hover-text-red"/>
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
         <Avatar width="40px" height="40px" bg="light">
         <Icon icon="fas fa-check" color="indigo" />
         </Avatar>
      </Div>
      <Div funcss="padding">JAVASCRIPT Lesson</Div>
      <Div funcss="padding">
         <Icon icon="fas fa-trash" funcss="pointer hover-text-red"/>
      </Div>
   </RowFlex>
</ListItem>

</List>
</Card>);`}
   </xmp>
</div>
<div className="preview">
<Card funcss="padding width-300-max">
<List>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
         <Avatar width="40px" height="40px" bg="light">
         <Icon icon="fas fa-check" color="indigo" />
         </Avatar>
      </Div>
      <Div funcss="padding">HTML Lesson</Div>
      <Div funcss="padding">
         <Icon icon="fas fa-trash" funcss="pointer hover-text-red"/>
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
         <Avatar width="40px" height="40px" bg="light">
         <Icon icon="fas fa-check" color="indigo" />
         </Avatar>
      </Div>
      <Div funcss="padding">CSS Lesson</Div>
      <Div funcss="padding">
         <Icon icon="fas fa-trash" funcss="pointer hover-text-red"/>
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
         <Avatar width="40px" height="40px" bg="light">
         <Icon icon="fas fa-check" color="indigo" />
         </Avatar>
      </Div>
      <Div funcss="padding">JAVASCRIPT Lesson</Div>
      <Div funcss="padding">
         <Icon icon="fas fa-trash" funcss="pointer hover-text-red"/>
      </Div>
   </RowFlex>
</ListItem>

</List>
</Card>
</div>
</div>
       
<div className="container padding-top-40" id="imageList">
<div className="h4 topic">List With Images</div>
<div className="code">
   <xmp>
{`
import List from 'Funcss/Components/List';
import ListItem from 'Funcss/Components/ListItem';
import RowFlex from 'Funcss/Components/RowFlex';
import Div from 'Funcss/Components/Div';
import Icon from 'Funcss/Components/Icon';
import Card from 'Funcss/Components/Card';
import Avatar from 'Funcss/Components/Avatar';
import Typography from 'Funcss/Components/Typography';
import Middle from 'Funcss/Components/Middle';
import Hr from 'Funcss/Components/Hr';
import Section from 'Funcss/Components/Section';
return(
<Card funcss="padding width-400-max">
<List>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/avatar.png" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="John Deo" heading="h5"/>
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      <Section><Hr/></Section>
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/deo.jpg" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="John Deo" heading="h5"/>
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
        <Section><Hr/></Section>
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/jane.jpg" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="Jane Deo" heading="h5"/>
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      </Div>
   </RowFlex>
</ListItem>

</List>
</Card>
    );
`}
   </xmp>
</div>
<div className="preview">
<Card funcss="padding width-400-max">
<List>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/avatar.png" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="John Deo" heading="h5"/>
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      <Section><Hr/></Section>
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/deo.jpg" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="John Deo" heading="h5"/>
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
        <Section><Hr/></Section>
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/jane.jpg" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="Jane Deo" heading="h5"/>
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      </Div>
   </RowFlex>
</ListItem>

</List>
</Card>

</div>
</div>

<div className="container padding-top-40" id="checkList">
<div className="h4 topic">List With Checkboxs</div>

<div className="code">
   <xmp>
{`import List from 'Funcss/Components/List';
import ListItem from 'Funcss/Components/ListItem';
import RowFlex from 'Funcss/Components/RowFlex';
import Div from 'Funcss/Components/Div';
import Icon from 'Funcss/Components/Icon';
import Card from 'Funcss/Components/Card';
import Avatar from 'Funcss/Components/Avatar';
import Typography from 'Funcss/Components/Typography';
import Middle from 'Funcss/Components/Middle';
import Hr from 'Funcss/Components/Hr';
import Section from 'Funcss/Components/Section';
import Input from 'Funcss/Components/Input';

return(
<Card funcss="padding width-400-max">
<List>
<ListItem>
<RowFlex justify="space-between" funcss="pointer">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/avatar.png" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      </Div>
      <Div funcss="padding">
        <Input type="checkbox" funcss="width-20 height-20" />
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
<RowFlex justify="space-between" funcss="pointer">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/jane.jpg" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      </Div>
      <Div funcss="padding">
        <Input type="checkbox" funcss="width-20 height-20" />
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
<RowFlex justify="space-between" funcss="pointer">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/deo.jpg" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      </Div>
      <Div funcss="padding">
        <Input type="checkbox" funcss="width-20 height-20" />
      </Div>
   </RowFlex>
</ListItem>

</List>
</Card>)`}
   </xmp>
</div>
<div className="preview">
<Card funcss="padding width-400-max">
<List>
<ListItem>
<RowFlex justify="space-between" funcss="pointer">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/avatar.png" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      </Div>
      <Div funcss="padding">
        <Input type="checkbox" funcss="width-20 height-20" />
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
<RowFlex justify="space-between" funcss="pointer">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/jane.jpg" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      </Div>
      <Div funcss="padding">
        <Input type="checkbox" funcss="width-20 height-20" />
      </Div>
   </RowFlex>
</ListItem>
<ListItem>
<RowFlex justify="space-between" funcss="pointer">
      <Div>
        <Middle>
        <img className="height-40 width-40 circle" src="/images/deo.jpg" />
        </Middle>
      </Div>
      <Div funcss="padding">
        <Typography text="Funcss Framework - Making the web simple with our framework for free." />
      </Div>
      <Div funcss="padding">
        <Input type="checkbox" funcss="width-20 height-20" />
      </Div>
   </RowFlex>
</ListItem>

</List>
</Card>
</div>
</div>

<Footer />
</div>
</div>
   </section>
    );
}

export default list;