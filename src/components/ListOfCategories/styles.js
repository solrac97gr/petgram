import styled, { css } from 'styled-components'
import { scale, skeletonAnimation } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0px;
      margin: 0 auto;
      max-width: 500px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(0.5);
      ${scale}
      z-index:1;
    `}
`
export const Item = styled.li`
  padding: 0 8px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:5px
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
`
export const Loader = styled.div`
  padding: 50%;
  color: #f6f7f8;
  background: #f6f7f8;
  margin: 10px;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  height: 75px;
  width: 75px;
  ${skeletonAnimation}
`
