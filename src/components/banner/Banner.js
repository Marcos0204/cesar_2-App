import React from 'react'
import styled from 'styled-components'
import banner from './Banner.png'


const Container = styled.div`
  margin: 10px auto;
  height: 100px;
  width: 100%;
  min-width:320px;
  max-width: 1600px;
  
  @media (min-width: 767px) {
    height: 200px;
    padding: 10px 20px;
  }
  @media (min-width: 1024px) {
    height: 250px;
  }
  @media (min-width: 1440px) {
    height: 300px;
  }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
  
`
const Banner = () => {
  return (
    <Container>
        <Img src={banner} alt='gif'/>
    </Container>
  )
}

export default Banner