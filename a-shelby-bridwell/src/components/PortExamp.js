import React from 'react'

 function PortExamp({ pic, title}) {
  return (
    <div>
        <div style={{backgroundImage: `url(${pic})`}} className="bgImage"></div>
        <h1> {title}</h1>
    </div>
  )
}
export default PortExamp;
