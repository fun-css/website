import Navbarleft from "./Navbarleft"
import Navbarright from "./Navbarright"
import React , {Component} from "react"
export default class Navbar extends Component{
render(){
return ( 
<div className={`
navigation-bar
${this.props.bg} 
${this.props.funcss}
`} 
>
<div>
    <Navbarleft />
</div>
</div>
);
}
}