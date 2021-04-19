import React from 'react'
import {Container, Header} from '../index'
import { PageBox, PageContent } from './page-container.styles'

const PageContainer: React.FC = ({children}) => {
    return (
        <PageBox>
            <Header/>
            <PageContent>
                <Container>
                    {children}
                </Container>
            </PageContent>
        </PageBox>
    )
}


export default PageContainer