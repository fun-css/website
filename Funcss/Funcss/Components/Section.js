import React from 'react'
const Section = ({children , funcss}) => {
return ( 
<div className={funcss} style={{paddingTop:"10px" , paddingBottom:"10px"}}>
{children}
</div>
);
}
export default Section;