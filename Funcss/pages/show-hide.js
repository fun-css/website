import Head from "next/head";
import Footer from "../components/Footer";

const showhide = () => {
    return ( 
        <div>
        <div>
        <section>
<Head>
<title>Css Progressbars - Funcss Framework</title>
<meta name='description' content='
When creating websites you might want to show certain content based on the user
screen width.
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
<a href="#show-hide" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Show And Hide</div></a>
</div>
</div>
<div className="main-content">
<div className="container">
<h1 className="header h1  text-indigo">
Show And hide based on screen width - Funcss
</h1>
<div className="h4">
When creating websites you might want to show certain content based on the user
screen width. the show and hide classes are your answer.
</div>
<div className="section hr">

</div>
</div>
<div className="padding-top-30 container" id="show-hide">
<div className="topic h4">Hide And Show Based On Screen Width</div>
<div className="note">
When creating websites, you might want to hide certain contents of your website base on the screen size 
of the user. Our framework is perfect for that kind job. Learn how to show and hide certain contents of Your
website base on the users screen width.

</div>
<table className="table width-100-p text-left text-small stripped">
<thead>
<tr>

</tr>
<tr>
    <td>Class</td>
    <td>Screen Range</td>
</tr>
</thead>
<tbody>
    <tr>
        <td><span className="badge">.hide</span></td>
        <td>Hidden from all screens</td>
    </tr>
  
    <tr>
        <td><span className="badge">.hide-small</span></td>
        <td className="">Hidden from small screens</td>
    </tr>
    <tr>
        <td><span className="badge">.hide-medium</span></td>
        <td className="">Hidden from Table screens</td>
    </tr>
    <tr>
        <td><span className="badge">.hide-large</span></td>
        <td className="">Hidden from Large screens</td>
    </tr>
    <tr>
        <td><span className="badge">.hide-medium-down</span></td>
        <td className="">Hidden from Tablets and mobile screens</td>
    </tr>
    <tr>
        <td><span className="badge">.hide-medium-up</span></td>
        <td className="">Hidden from Tablets and large screens</td>
    </tr>

    <tr>
        <td><span className="badge">.show-small</span></td>
        <td className="">shown to small screens only</td>
    </tr>
    <tr>
        <td><span className="badge">.show-medium</span></td>
        <td className="">Show to Table screens only</td>
    </tr>
    <tr>
        <td><span className="badge">.show-large</span></td>
        <td className="">Show to Large screens only</td>
    </tr>
    <tr>
        <td><span className="badge">.show-medium-down</span></td>
        <td className="">Show to tablets and mobile screens</td>
    </tr>
    <tr>
        <td><span className="badge">.show-medium-up</span></td>
        <td className="">Shown to Tablets and large screens</td>
    </tr>

  
</tbody>
</table>

</div>
<Footer />

</div>
</div>
</section>
</div>
</div>
     );
}
 
export default showhide;