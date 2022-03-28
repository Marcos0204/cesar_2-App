import React from 'react'
import styled from 'styled-components'

import gif from './MiniApeCoinSlow.gif'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
    width: 50%;
    height: 50%;
    @media (min-width: 767px) {
      width: 300px;
      height: 300px;
  }
  @media (min-width: 1024px) {
    //margin-top: 300px;
    width: 200px;
    height: 200px;
  }
  @media (min-width: 1440px) {
    margin-top: -30px;
    width: 300px;
    height: 300px;
  }
`
const Gif = () => {
  return (
    <Container>
        <Img src={gif} alt='gif'/>
    </Container>
  )
}

export default Gif