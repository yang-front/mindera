import styled from 'styled-components'

export const CardContainer = styled.div`
    border: 1px solid ${({theme}) => theme.colors.darkGray};
    border-radius: 12px;
    overflow: hidden;
    font-family: 'Bebas Neue';
`

export const CardHeader = styled.div`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
`

export const CardContent = styled.div`
    flex: 1;
`

export const TableHeader = styled.div`
    display: none;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
    @media (min-width: ${({theme}) => theme.devices.desktop}){
        display: flex;
    }
`

export const TableItem = styled.div`
    padding: 10px;
    &:nth-child(even){
        background-color: #f3f3f3;
    }
    @media (min-width: ${({theme}) => theme.devices.desktop}){
        display: flex;
        align-items: center;
    }
`

export const ProductName = styled.div`
    margin-bottom: 15px;
    @media (min-width: ${({theme}) => theme.devices.desktop}){
        margin-bottom: 0;
        width: 30%;
    }
`

export const Weekday = styled.div`
    @media (min-width: ${({theme}) => theme.devices.desktop}){
        width: 10%;
        text-align: center;
    }
`

export const MobileTag = styled.span`
    @media (min-width: ${({theme}) => theme.devices.desktop}){
       display: none;
    }
`