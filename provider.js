import React from "react"
import styled from 'styled-components'
import opi from './assets/opi-logo.png'

const LogoWrapper = styled.div`

`

const Logo = styled.img`
  position: absolute;
  bottom: 8px;
  left: 16px;
  height: 30px;
`

export default function Provider({children, length, index}) {
  return (
  <LogoWrapper>
    {children}
    <Logo src={opi} />
  </LogoWrapper>
  )
}
