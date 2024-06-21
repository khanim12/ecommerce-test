import React from 'react'
import HeaderLeft from './headeritem/HeaderLeft'
import HeaderRight from './headeritem/HeaderRight'
import HeaderCenter from './headeritem/HeaderCenter'
import '../../assets/css/Header.css'
function Header() {
  return (
    <div>
      <div className="flex  justify-around items-center my-6 pb-3 border-b-2">
      <HeaderLeft />
      <HeaderCenter/>
        <HeaderRight />
        </div>
    </div>
  )
}

export default Header
