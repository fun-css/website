
import React , {Component} from "react"
export default class Input extends Component{
render(){
return ( 
<input className={`
input
${this.props.funcss}
${this.props.simple}
`} 
onChange={this.props.onChange}
defaultValue = {this.props.defaultValue}
type={this.props.type}
placeholder={this.props.label}
 />

);
}
}