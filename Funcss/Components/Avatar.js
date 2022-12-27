import React from 'react'
export default function Avatar({funcss ,children , width, height , bg}) {
  return (
    <button className={`button circle padding ${funcss} ${bg}`} style={{
        width:`${width}`,
        height:`${height}`
    }}>
        {children}
    </button>
  )
}
