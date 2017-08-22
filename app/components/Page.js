import React from 'react'
export default function Page(props){
  return(
    <div className="layout">
      {props.children}
    </div>
  )
}