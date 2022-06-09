
import React , {Component} from "react"
export default class Input extends Component{
render(){
return ( 
<input className={`
input
label-${this.props.label}
${this.props.funcss}
`} 
onChange={this.props.onChange}
defaultValue = {this.props.defaultValue}
type={this.props.type}
 />


);
}
}