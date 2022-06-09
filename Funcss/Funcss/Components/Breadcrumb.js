import React from 'react'

export default function Breadcumb({type , funcss}) {
  return (
   <span>
       {
           type === "slash" &&
           <span className={`text-bold padding-left-5 padding-right-5 ${funcss}`}> / </span>
       } 
       {
           type === "greater" &&
           <span className={`text-bold padding-left-5 padding-right-5 ${funcss}`}> {`>`} </span>
       } 
       {
           type === "less" &&
           <span className={`text-bold padding-left-5 padding-right-5 ${funcss}`}> {`<`} </span>
       } 
       {
           type === "straight" &&
           <span className={`text-bold padding-left-5 padding-right-5 ${funcss}`}> {`|`} </span>
       } 
   </span>
  )
}
