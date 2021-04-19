import { BurgerButton } from '..'
import { MobileLogo, MobileMenuContainer } from './mobile-header.styles'

interface Props{
    burgerClick(): void
    isBurgerActive: boolean
}

const MobileHeader:React.FC<Props> = ({burgerClick, isBurgerActive}) => {
    return (
        <MobileMenuContainer>
            <MobileLogo/>
            <BurgerButton isActive={isBurgerActive} burgerClick={burgerClick}/>
        </MobileMenuContainer>
    )
}

export default MobileHeader