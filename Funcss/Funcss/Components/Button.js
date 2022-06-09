import { useEffect } from 'react';
const Button = ({
text , 
color,
bg , 
width, 
height, 
minHeight ,
minWidth,
margin,
padding,
fullWidth,
funcss,
children,
}) => {
    useEffect(()=>{
        console.log(fullWidth)
    })
return ( 
<button className={`button text-${color} ${bg} ${funcss}`} 
style={{
width:`${width}`, 
height:`${height}`,
minHeight:`${minHeight}`,
minWidth:`${minWidth}`,
margin:`${margin}`,
padding:`${padding}`
}}>
{text}
{children}
</button>
);
}

export default Button;