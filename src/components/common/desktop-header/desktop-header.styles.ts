import styled from 'styled-components'

import logoImage from '../../../assets/images/mindera-logo.png'

export const DesktopHeaderContainer = styled.div`
    padding: 20px;
    position: relative;
    z-index: 2;
    display: none;
    height: 100%;
    @media(min-width: ${({theme}) => theme.devices.desktop}){
        display: block;
    }
`

export const Logo = styled.img.attrs({
    src: logoImage
})`
    width: 120px;
   
`

export const LeftSide = styled.div`
    display: flex;
    align-items: center;

`

export const MenuRow = styled.div`
    @media(min-width: ${({theme}) => theme.devices.desktop}){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const MenuContent = styled.div`
    display: flex;
    align-items: center;
`

export const MenuItem = styled.div`
    font-size: 28px;
    margin-left: 20px;
    cursor: pointer;
    user-select: none;
    transition: 400ms;
    color: #5a5a5a;
    &:hover{
        color: ${({theme}) => theme.colors.primary};
    }
`