import React, { useEffect, useState } from 'react'

import {
    CloseButton,
    DevImage,
    DevInfoItem,
    DevInfoLabel,
    DevInfoLink,
    DevName,
    MinderaIcon,
    ProfileModalBackground,
    ProfileModalBox,
    ProfileModalContainer,
} from './profile-modal.styles'

interface Props {
    isActive: boolean
    closeClick(): void
}

const ProfileModal: React.FC<Props> = ({ isActive, closeClick}) => {
    const [isEffectActive, setIsEffectActive] = useState(false)
    const [isDisplayed, setIsDisplayed] = useState(false)

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow="hidden"
            setIsDisplayed(true)
            setTimeout(() => {
                setIsEffectActive(true)
            }, 100)
        } else {
            document.body.style.overflow="auto"
            setIsEffectActive(false)
            setTimeout(() => {
                setIsDisplayed(false)
            }, 100)
        }
    }, [isActive])

    return (
        <ProfileModalContainer isDisplayed={isDisplayed}>
            <ProfileModalBox isEffectActive={isEffectActive}>
                <CloseButton onClick={closeClick}/>
                <MinderaIcon/>
                <DevImage/>
                <DevName>Yan Gondim</DevName>
                <DevInfoItem>
                    <DevInfoLabel>Linkedin:</DevInfoLabel>
                    <DevInfoLink href="https://www.linkedin.com/in/yan-gondim/">linkedin.com/in/yan-gondim</DevInfoLink>
                </DevInfoItem>
                <DevInfoItem>
                    <DevInfoLabel>Email:</DevInfoLabel>
                    <DevInfoLink href="mailto:yan.gondim16@gmail.com">yan.gondim16@gmail.com</DevInfoLink>
                </DevInfoItem>
            </ProfileModalBox>
            <ProfileModalBackground isEffectActive={isEffectActive} onClick={closeClick} />
        </ProfileModalContainer>
    )
}

export default ProfileModal
