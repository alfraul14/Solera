import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const NavLink = styled(Link)`
    font-size: 20px;
    font-family: system-ui;
    text-decoration: none;
    &.active {
    color: blue
  }
`
export const Li = styled.li`
    list-style: none;

`
export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 10px;
    margin: 0;
`
export const NavBar = styled.nav`

`
export const Wrapper = styled.div`
    max-width: 1184px;
    margin-left: auto;
    margin-right: auto;
    
`
export const NavContainer = styled.div`
   width: 100%;
   padding: 16px 0;
   background-color: #f8f9fa;
`
