import React from 'react'

export default function MenuIcon({hasText, text, icon, actionOnClick}) {
  return (
 <div className='text-black' onClick={actionOnClick != undefined ? actionOnClick : undefined}>
 <i className='material-icons'>{icon}</i>
 {hasText && <p>{text}</p>}
 </div>
  )
}
