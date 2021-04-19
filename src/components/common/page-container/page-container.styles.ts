import styled from 'styled-components'

export const PageBox = styled.div`
    width: 100%;
    min-height: calc(100vh - ${({ theme }) => theme.mobileHeaderHeight});
    display: flex;
    flex-direction: column;
    @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        min-height: calc(100vh - ${({ theme }) => theme.desktopHeaderHeight});
    }
`

export const PageContent = styled.div`
    flex: 1;
    display: block;
    margin-top: ${({ theme }) => theme.mobileHeaderHeight};
    @media (min-width: ${({ theme }) => theme.devices.desktop}) {
        margin-top: ${({ theme }) => theme.desktopHeaderHeight};
    }
`
