import React, { useState } from 'react'

function HeaderTop() {
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const toggleLanguageMenu = () => {
        setLanguageMenuOpen(!languageMenuOpen)
    }
  return (
    <div className='top-bar justify-between	'>
          <p className='top-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="">Shop Now</a></p>
          <div className='language-selector' onClick={toggleLanguageMenu}>
              <span>English</span>
              {
                  languageMenuOpen && (
                      <ul className='language-menu'>
                          <li><a href="">English</a></li> 
                          <li>
                              <a href="#">Turkish</a>
                          </li>
                      </ul>
                  )
              }
          </div>
    </div>
  )
}

export default HeaderTop
