import { BurgerBottomLine, BurgerButtonContainer, BurgerMidLine, BurgerTopLine } from './burger-button.styles'

interface Props {
    burgerClick(): void
    isActive: boolean
}

const BurgerButton: React.FC<Props> = ({ isActive, burgerClick }) => {
    return (
        <BurgerButtonContainer onClick={burgerClick}>
            <BurgerTopLine isActive={isActive} />
            <BurgerMidLine isActive={isActive} />
            <BurgerBottomLine isActive={isActive} />
        </BurgerButtonContainer>
    )
}

export default BurgerButton
