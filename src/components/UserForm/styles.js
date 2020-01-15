import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  ${props => props.disabled && css`
    opacity: .3;
  `}
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  ${props => props.disabled && css`
    opacity: .3;
  `}
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`
export const Error = styled.span`
text-align:center;
width:100%;
margin-bottom:8px;
padding:8px;
background-color:red;
border-radius:6px;
color:white;
font-size:14px;
box-shadow:1px 2px 5px rgba(0,0,0,0.5) 
${fadeIn({ time: '1s' })}
`
