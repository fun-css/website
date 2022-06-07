import { useEffect,useState } from "react"
const Snackbar = ({snackContent, snackClose , timeOut , open }) => {
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


// const open = (id)=>{
// document.querySelector("#" + id).style.display = "none"
// }

return ( 
<div>
<div className="snackbar">
<div className="snackbar-content">
<div className="snackbar-body">
{snackContent}
</div>
<div>
<span className="close-snackbar">
<span onClick={()=>setopen(false)}>{snackClose}</span>
</span>
</div>

</div>
</div>
</div>
);
}

export default Snackbar;