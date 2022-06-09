import React from 'react'
import {useState , useEffect} from "react"
export default function Modal({children , funcss}) {
useEffect(()=>{
const modal = document.querySelector(".modal")
window.addEventListener("click" ,(e)=>{
if(e.target === modal){
modal.style.display = "none"
}
})
})
return (
<div className={`${funcss} modal`}>
<div className="modal-content">
{children}
</div>
</div>
)
}
