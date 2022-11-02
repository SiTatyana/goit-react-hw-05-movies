import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    color: black;
    &.active{
        color: #d23272;
    }
`

export const SyledHeader = styled.header`
    margin-bottom: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: 0px 0px 10px lightgrey;
    & ul{
        margin: 0px;
        list-style: none;
        display: flex;
        gap: 30px;
        text-transform: uppercase;
        
    }
    & a{
        text-decoration: none;
        font-weight: 700;
    }
`