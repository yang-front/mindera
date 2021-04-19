import styled from 'styled-components'

export const ContentContainer = styled.div`
    @media (min-width: ${({theme}) => theme.devices.desktop}){
        width: 1200px;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
`