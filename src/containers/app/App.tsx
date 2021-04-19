import { ThemeProvider } from 'styled-components'

import theme, { GlobalStyle } from '../../assets/theme'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import { PageContainer } from '../../components/common';

const App:React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <PageContainer>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <MainScreen />
                        </Route>
                    </Switch>
                </Router>
            </PageContainer>
        </ThemeProvider>
    );
}

export default App;
