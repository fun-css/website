import React from 'react'
export default function Modalcontent({funcss,children}) {
  return (
    <div className={`${funcss} modal-body`}>{children}</div>
  )
}
