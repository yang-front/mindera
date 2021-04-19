import { Container } from '..'
import { DesktopHeaderContainer, LeftSide, Logo, MenuContent, MenuItem, MenuRow } from './desktop-header.styles'

interface Props{
    devInfoClick(): void
}

const DesktopHeader:React.FC<Props> = ({ devInfoClick }) => {
    return (
        <DesktopHeaderContainer>
            <Container>
                <MenuRow>
                    <LeftSide>
                        <Logo/>
                    </LeftSide>
                    <MenuContent>
                        <MenuItem onClick={devInfoClick}>Dev Info</MenuItem>
                    </MenuContent>
                </MenuRow>
            </Container>
        </DesktopHeaderContainer>
    )
}

export default DesktopHeader