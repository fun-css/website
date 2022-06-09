import React from 'react'
import Container from "../Funcss/Components/Container"
import Breadcrumb from "../Funcss/Components/Breadcrumb"
import Typography from "../Funcss/Components/Typography"
import Div from "../Funcss/Components/Div"
import Grid from "../Funcss/Components/Grid"
import Col from "../Funcss/Components/Col"
import Card from "../Funcss/Components/Card"
import Section from "../Funcss/Components/Section"
import Link from "next/link"
import Image from 'next/image'
export default function Components() {
  return (
    <div>
      <Container>
      <Link href="/">
<a className="link padding hover-text-indigo">Home</a> 
</Link>
<Breadcrumb type="slash" />
<Link href="#">
<a className="link padding hover-text-indigo">Components</a> 
</Link>
<Typography text="Components" size="bigger" color="indigo"/>
<Typography>
<div className="width-500-max h5">
Components saves your time when coding, use premium components for free.
</div>
</Typography>
<Div funcss="padding-top-40">
<Section>
<Typography text="Page section" heading="h3"/>
</Section>
<Grid>
    <Col sm={12} md={4} lg={3} funcss="padding">
        <Link href="/components/hero">
            <a>
            <Div funcss="round-edge border pointer text-center">
           <Div funcss="padding text-center" content={
            <Image
            src="/svg/landing.svg"
            width={100}
            height={100}
            
             />
         }/>
         <Div funcss="padding" content={
             <Typography text="Hero Sections" funcss="text-bold"/>
         }/>
        </Div>
        </a>
        </Link>
    </Col>
    <Col sm={12} md={4} lg={3} funcss="padding">
        <Link href="/components/hero">
            <a>
            <Div funcss="round-edge border pointer text-center">
           <Div funcss="padding text-center" content={
            <Image
            src="/svg/about.svg"
            width={100}
            height={100}
            
             />
         }/>
         <Div funcss="padding" content={
             <Typography text="About Sections" funcss="text-bold"/>
         }/>
        </Div>
        </a>
        </Link>
    </Col>
    <Col sm={12} md={4} lg={3} funcss="padding">
        <Link href="/components/hero">
            <a>
            <Div funcss="round-edge border pointer text-center">
           <Div funcss="padding text-center" content={
            <Image
            src="/svg/contact.svg"
            width={100}
            height={100}
            
             />
         }/>
         <Div funcss="padding" content={
             <Typography text="Contact Sections" funcss="text-bold"/>
         }/>
        </Div>
        </a>
        </Link>
    </Col>
    <Col sm={12} md={4} lg={3} funcss="padding">
        <Link href="/components/hero">
            <a>
            <Div funcss="round-edge border pointer text-center">
           <Div funcss="padding text-center" content={
            <Image
            src="/svg/addinfo.svg"
            width={100}
            height={100}
            
             />
         }/>
         <Div funcss="padding" content={
             <Typography text="Footer Sections" funcss="text-bold"/>
         }/>
        </Div>
        </a>
        </Link>
    </Col>
</Grid>
</Div>
      </Container>
    </div>
  )
}
