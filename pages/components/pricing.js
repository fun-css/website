import React from 'react'
import Link from 'next/link'
import {useEffect, useState} from "react"
import Typography from "../../Funcss/Components/Typography"
import Container from "../../Funcss/Components/Container"
import Breadcrumb from '../../Funcss/Components/Breadcrumb'
import Button from "../../Funcss/Components/Button"
import Icon from "../../Funcss/Components/Icon"
import Card from '../../Funcss/Components/Card';
import Input from './../../Funcss/Components/Input';
import IconicInput from './../../Funcss/Components/IconicInput';
import Div from './../../Funcss/Components/Div';
import Section from './../../Funcss/Components/Section';
import Grid from './../../Funcss/Components/Grid';
import Col from './../../Funcss/Components/Col';
import Hr from './../../Funcss/Components/Hr';
import List from './../../Funcss/Components/List';
import ListItem from './../../Funcss/Components/ListItem';
import RowFlex from './../../Funcss/Components/RowFlex';
import Avatar from './../../Funcss/Components/Avatar';
export default function Pricing() {
const [modalShow ,setmodalShow] = useState(false)
const [modalData ,setmodalData] = useState(null)
const HandleModal = (data)=>{
  setmodalData(data)
  setmodalShow(true)
}
  const Sections = [
    {
      key:1,
      title:"simple Hero",
      content:`

      `
    },
    {
      key:2,
      title:"simple Hero",
      content:`
 
      
      `
    }
  ]

  // useEffect(()=>{
  //   var code = document.querySelector(".code-one").contentWindow.document;
  //   code.open();
  //   code.writeln(
  //  `

  //  `
  //   );
  //   code.close();
  // })
return (
<div className="padding-top-70 padding-bottom-50">

<div>
<Container>
<Section>
<Link href="/components">
<a className="link padding hover-text-indigo">Components</a> 
</Link>
<Breadcrumb type="straight" />
<Link href="#">
<a className="link padding text-indigo">Forms</a> 
</Link>
</Section>
<Typography text="Forms" funcss="padding" size="bigger" color="indigo"/>
<Typography>

</Typography>
</Container>

<Container funcss="padding-top-40">
    <Typography heading="h3" text="Signup Form" />
    <div className="code">
        
<xmp>{` import Typography from Funcss/Components/Typography"
import Container from Funcss/Components/Container"
import Breadcrumb from Funcss/Components/Breadcrumb'
import Button from Funcss/Components/Button"
import Icon from Funcss/Components/Icon"
import Card from Funcss/Components/Card';
import Input from './../../Funcss/Components/Input';
import IconicInput from './../../Funcss/Components/IconicInput';
import Div from './../../Funcss/Components/Div';
import Section from './../../Funcss/Components/Section';
import Grid from './../../Funcss/Components/Grid';
import Col from './../../Funcss/Components/Col';

   <Card funcss="width-500-max center round-edge padding-20">
<Div funcss="text-center">
    <Icon icon="far fa-user-circle" size={3} color="success" />
    <Typography heading="h1" text="Create Account" />
</Div>
<Grid>
    <Col sm={12} md={6} lg={6}>
    <IconicInput funcss="section full-width" position="left" >
<Input type="text" label="First Name" funcss="full-width" bordered={true}  />
<Icon icon="far fa-user-circle" color="success" />
</IconicInput>
    </Col>
    <Col sm={12} md={6} lg={6}>
    <IconicInput funcss="section full-width" position="left" >
<Input type="text" label="Last Name" funcss="full-width" bordered={true}  />
<Icon icon="far fa-user" color="success" />
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
<Input type="email" label="Email" funcss="full-width" bordered={true}  />
<Icon icon="far fa-paper-plane" color="success" />
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
<Input type="number" label="Password" funcss="full-width" bordered={true}  />
<Icon icon="fas fa-lock" color="success" />
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
<Input type="checkbox" /> I have agreed to all terms and conditions
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
        <Button text="Create Account" color="white" bg="success" funcss="full-width"/>
    </Col>
</Grid>

</Card> `}</xmp>
    </div>

<Grid>
    <Col sm={12} md={4} lg={4}>
        <Card funcss="round-edge">
            <Div funcss="padding content-middle hr text-center">
               <Div funcss="height-100-min">
               <Typography text="Basic" heading="h4"/>
                <Typography text="$250" color="indigo" size="bigger"/>
                <Typography text=" / Month" heading="h5"/>
                </Div>
            </Div>
            <Div className="light">
            <List>
<ListItem>
   <RowFlex justify="space-between">
      <Div>
         <Avatar width="40px" height="40px" bg="light">
         <Icon icon="fas fa-check" color="indigo" />
         </Avatar>
      </Div>
      <Div funcss="padding">
      Lorem ipsum dolor adipisicing elit. 
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
      <Div funcss="padding">
      Lorem ipsum dolor adipisicing elit. 
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
      <Div funcss="padding">
      Lorem ipsum dolor adipisicing elit. 
      </Div>
   </RowFlex>
</ListItem>


</List>
            </Div>
        </Card>
    </Col>

</Grid>

</Container>
<Container funcss="padding-top-40">
    <Typography heading="h3" text="Login Form" />
    <div className="code">
        
<xmp>{` import Typography from Funcss/Components/Typography"
import Container from Funcss/Components/Container"
import Breadcrumb from Funcss/Components/Breadcrumb'
import Button from Funcss/Components/Button"
import Icon from Funcss/Components/Icon"
import Card from Funcss/Components/Card';
import Input from './../../Funcss/Components/Input';
import IconicInput from './../../Funcss/Components/IconicInput';
import Div from './../../Funcss/Components/Div';
import Section from './../../Funcss/Components/Section';
import Grid from './../../Funcss/Components/Grid';
import Col from './../../Funcss/Components/Col';

<Card funcss="width-400-max center round-edge padding-20">
<Div funcss="text-center">
    <Icon icon="far fa-user-circle" size={3} color="success" />
    <Typography heading="h1" text="Login Account" />
</Div>
<Grid>
<Col sm={12} md={12} lg={12} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
<Input type="email" label="Email" funcss="full-width" bordered={true}  />
<Icon icon="far fa-paper-plane" color="success" />
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
<Input type="number" label="Password" funcss="full-width" bordered={true}  />
<Icon icon="fas fa-lock" color="success" />
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
<Input type="checkbox" /> Remember Me
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
        <Button text="Login" color="white" bg="success" funcss="full-width"/>
    </Col>
</Grid>

</Card>`}</xmp>
    </div>
    <Section>
    <Card funcss="width-400-max center round-edge padding-20">
      <Div funcss="text-center">
          <Icon icon="far fa-user-circle" size={3} color="success" />
          <Typography heading="h1" text="Login Account" />
      </Div>
      <Grid>
      <Col sm={12} md={12} lg={12} funcss="padding">
          <IconicInput funcss="section full-width" position="left" >
      <Input type="email" label="Email" funcss="full-width" bordered={true}  />
      <Icon icon="far fa-paper-plane" color="success" />
      </IconicInput>
          </Col>
          <Col sm={12} md={12} lg={12} funcss="padding">
          <IconicInput funcss="section full-width" position="left" >
      <Input type="number" label="Password" funcss="full-width" bordered={true}  />
      <Icon icon="fas fa-lock" color="success" />
      </IconicInput>
          </Col>
          <Col sm={12} md={12} lg={12} funcss="padding">
      <Input type="checkbox" /> Remember Me
          </Col>
          <Col sm={12} md={12} lg={12} funcss="padding">
              <Button text="Login" color="white" bg="success" funcss="full-width"/>
          </Col>
      </Grid>
      
      </Card>
    </Section>
</Container>

</div>
</div>
)
}
