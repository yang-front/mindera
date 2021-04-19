import styled from 'styled-components'

import logoImage from '../../../assets/images/mindera-logo.png'

export const MobileMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    height: 100%;
    padding: 0px 10px;
    @media (min-width: ${({theme}) => theme.devices.desktop}){
        display: none;
    }
`

export const MobileLogo = styled.img.attrs({
    src: logoImage
})`
    width: 80px;
`