import styled from 'styled-components'

export const HeaderContainer = styled.div`
    font-family: 'Bebas Neue';
    background-color: ${({theme}) => theme.colors.backgroundGray};
    height: ${({theme}) => theme.mobileHeaderHeight};
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.45);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:  ${({theme}) => theme.headerZindex};
    @media (min-width: ${({theme}) => theme.devices.desktop}){
        height: ${({theme}) => theme.desktopHeaderHeight};
    }

`