import React from 'react'
import { ContentContainer } from './container.styles'

const Container:React.FC = ({children}) => {
    return <ContentContainer>{children}</ContentContainer>
}

export default Container