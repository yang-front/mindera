import styled from 'styled-components'

export const BurgerButtonContainer = styled.div`
    width: 30px;
`

export const BurgerTopLine = styled.div<{isActive: boolean}>`
    width: 100%;
    height: 2px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.black};
    margin-bottom: 5px;
    transition: 400ms;
    margin-left: ${({ isActive }) => (isActive ? '10px' : 0)};
    transform: rotate(${({ isActive }) => (isActive ? '45deg' : 0)})
        translateY(${({ isActive }) => (isActive ? '10px' : 0)});
`

export const BurgerMidLine = styled.div<{isActive: boolean}>`
    width: 100%;
    height: 2px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.black};
    margin-bottom: 5px;
    transition: 400ms;
    opacity: ${({ isActive }) => (isActive ? 0 : 1)};
`

export const BurgerBottomLine = styled.div<{isActive: boolean}>`
    width: 100%;
    height: 2px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: 400ms;
    margin-left: ${({ isActive }) => (isActive ? '10px' : 0)};
    transform: rotate(${({ isActive }) => (isActive ? '-45deg' : 0)})
        translateY(${({ isActive }) => (isActive ? '-11px' : 0)});
`
