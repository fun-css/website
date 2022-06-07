const Button = ({text , 
color,
bg , 
width, 
height, 
minHeight ,
minWidth,
margin,
padding,
children,
}) => {
return ( 
<button className={`button text-${color} ${bg}`} 
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