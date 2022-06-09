import React from 'react'
const Container = ({children ,funcss}) => {
return ( 
<div className={funcss}>
{children}
</div>
);
}
export default Container;