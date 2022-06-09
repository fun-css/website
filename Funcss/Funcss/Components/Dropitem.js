import React from 'react'
export default function Breadcumb({children , funcss}) {
  return (
   <div className={`${funcss} drop-item`}>
       {children}
   </div>
  )
}
