import React from "react"
import Dropitem from "./Dropitem"
const Dropdown = ()=>{
    return(
        <div class="dropdown-hover text-white">
    <div class="drop-button">
        <button class="button indigo card text-white">DropDown Button</button>
    </div>
     <div class="drop-menu white item-hoverable text-black">
        <Dropitem />
     </div>
</div>
    )
}
export default Dropdown