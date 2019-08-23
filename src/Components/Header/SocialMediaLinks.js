import React from 'react'
import styled, { keyframes } from 'styled-components'
import { bounceInLeft } from 'react-animations'

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;
  animation: ${keyframes`${bounceInLeft}`} 1s;
`

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  text-align: center;
  transition: 0.2s;
  &:hover {
    width: 80px;
    background-color: #212121;
  }
  @media (max-width: 876px) {
    font-size: 1.3rem;
    height: 50px;
    width: 50px;
  }
  @media (max-width: 580px) {
    display: none;
  }
`

const SocialMediaLinks = () => (
  <Wrapper>
    <Link href='https://www.snapchat.con/add/sam_a1' target='_blank' className='fa fa-snapchat-ghost' />
    <Link href='https://github.com/sabrahim10'target='_blank'className='fa fa-github' />
  </Wrapper>
)

export default SocialMediaLinks
