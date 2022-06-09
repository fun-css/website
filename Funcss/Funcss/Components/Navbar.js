import Navleft from "./Navleft"
// import Navright from "./Navright"
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
    <Navleft />
</div>
</div>
);
}
}