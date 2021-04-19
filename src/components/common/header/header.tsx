import {useState} from 'react'
import { MobileHeader, DesktopHeader } from '..'
import ProfileModal from '../../profile-modal'
import { HeaderContainer } from './header.styles'

const Header:React.FC = () => {
    const [isProfileVisible, setIsProfileVisible] = useState(false)
    return (
        <>
            <HeaderContainer>
                <DesktopHeader devInfoClick={() => setIsProfileVisible(true)}/>
                <MobileHeader burgerClick={() => setIsProfileVisible(true)} isBurgerActive={isProfileVisible}/>
            </HeaderContainer>
            <ProfileModal isActive={isProfileVisible} closeClick={() => setIsProfileVisible(false)}/>
        </>
    )
}

export default Header