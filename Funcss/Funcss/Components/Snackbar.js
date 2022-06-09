import { useEffect,useState } from "react"
const Snackbar = ({message, close , timeOut , open ,position , funcss}) => {
const [state, setstate] = useState(false)
useEffect(() => {
const snackbarDom = document.querySelector(".snackbar")
if(timeOut > 0){
setTimeout(() => {
snackbarDom.style.display = "none" 
}, timeOut);
}
if(open){
snackbarDom.style.display = "block" 
}else if (!open){
snackbarDom.style.display = "none"   
}


})

return ( 
<div>
<div className={`snackbar ${position} ${funcss}`}>
<div className="snackbar-content">
<div className="snackbar-body">
{message}
</div>
<div>
<span className="close-snackbar">
<span onClick={()=>{
const snackbarDom = document.querySelector(".snackbar")
snackbarDom.style.display = "none"  
}}>{close}</span>
</span>
</div>

</div>
</div>
</div>
);
}

export default Snackbar;