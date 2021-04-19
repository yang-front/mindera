import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import minderaIcon from '../../assets/images/mindera-icon.jpg'

export const ProfileModalContainer = styled.div<{ isDisplayed: boolean }>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    transition: 400ms;
    display: ${({ isDisplayed }) => (isDisplayed ? 'block' : 'none')};
`

export const ProfileModalBackground = styled.div<{ isEffectActive: boolean }>`
    z-index: ${({ theme }) => theme.commonModalZIndex};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    transition: 400ms;
    opacity: ${({ isEffectActive }) => (isEffectActive ? '1' : '0')};
`

export const ProfileModalBox = styled.div<{ isEffectActive: boolean }>`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
    transition: 400ms;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(${({ isEffectActive }) => (isEffectActive ? '0%' : '200%')});
    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        transform: translateX(${({ isEffectActive }) => (isEffectActive ? '0%' : '200%')});
        border-radius: 4px;
        width: 350px;
        position: absolute;
        top: -2px;
        right: -2px;
        z-index: 500;
        border-left: 6px solid ${({theme}) => theme.colors.primary};
    }
`

export const CloseButton = styled(FontAwesomeIcon).attrs({
    icon: faTimes,
})`
    width: 30px;
    position: absolute;
    top: 15px;
    right: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 28px;
    cursor: pointer;
    transform: rotate(90deg);
    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        transform: rotate(0);
    }
`

export const MinderaIcon = styled.img.attrs({
    src: minderaIcon
})`
    width: 60px;
    transition: 400ms;
    animation: bounce 1s infinite alternate;
    @keyframes bounce {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(-15px);
        }
    }
`

export const DevImage = styled.img.attrs({
    src: "https://media-exp1.licdn.com/dms/image/C4E03AQHInO3QeRv4Cw/profile-displayphoto-shrink_800_800/0/1569021284022?e=1624492800&v=beta&t=byzt_uCzDRMjRxDw2j4_DqCcGakSsiRANpGJFRPbGco"
})`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 10px;
    margin-top: 30px;
`

export const DevName = styled.div`
    font-size: 24px;
    font-family: 'Bebas Neue';
    margin-bottom: 20px;
`

export const DevInfoItem = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Arial';
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 600;
`

export const DevInfoLabel = styled.div`
    margin-right: 10px;
`

export const DevInfoLink = styled.a.attrs({
    target: "_blank"
})`
    color: ${({ theme }) => theme.colors.darkGray};
    text-decoration: none;
    transition: 400ms;
`