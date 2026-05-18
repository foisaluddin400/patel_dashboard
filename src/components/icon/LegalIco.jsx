import React from 'react'

const LegalIco = ({color}) => {
  return (
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 10L11.875 5L13.75 10C13.2062 10.4062 12.55 10.625 11.875 10.625C11.2 10.625 10.5438 10.4062 10 10Z" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 10L3.125 5L5 10C4.45625 10.4062 3.8 10.625 3.125 10.625C2.45 10.625 1.79375 10.4062 1.25 10Z" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.375 13.125H10.625" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 1.875V13.125" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.875 4.375H3.125C4.375 4.375 6.25 3.75 7.5 3.125C8.75 3.75 10.625 4.375 11.875 4.375H13.125" stroke={color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

export default LegalIco