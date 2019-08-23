import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { bounceInDown } from 'react-animations'

const Wrapper = styled.div`
  position: relative;
  animation: ${keyframes`${bounceInDown}`} 1s;
  @media (max-width: 580px) {
    margin: 10% 0;
  }
`

const Name = styled.h1`
  font-size: 7rem;
  font-family: Poiret One, Arial, Helvetica, sans-serif;
  margin: 0;
  @media (max-width: 580px) {
    font-size: 3.5rem;
  }
`

const Position = styled.p`
  margin: 5px 0 0 0;
`

const MainText = props => (
  <Wrapper style={{ left: props.left, top: props.top }}>
    <Name>Sami Abrahim</Name>
    <Position>Front End Web Developer</Position>
  </Wrapper>
)

MainText.propTypes = {
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired
}

export default MainText
