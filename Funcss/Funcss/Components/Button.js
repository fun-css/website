
import React , {Component} from "react"
export default class Button extends Component{
render(){
return ( 
<button className={`button text-${this.props.color} ${this.props.bg} ${this.props.funcss}`} onClick={this.props.onClick}>
{this.props.startIcon} &nbsp;
{this.props.text}
{this.props.children} &nbsp;
{this.props.endIcon}
</button>
);
}
}