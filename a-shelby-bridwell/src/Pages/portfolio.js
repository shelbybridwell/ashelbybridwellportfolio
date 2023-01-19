import React from 'react'
import PortExamp from '../components/PortExamp';


 function portfolio() {
  return (
    <div className='examples'>
        <h1>Portfolio</h1>
        <div className='projList'>
            <PortExamp />
            <PortExamp />
            <PortExamp />
            <PortExamp />
        </div>
    </div>
  )
}
export default portfolio;
