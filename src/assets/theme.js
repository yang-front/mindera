import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle``;

const theme = {
    mobileHeaderHeight: '70px',
    desktopHeaderHeight: '100px',
    headerZindex: 100,
    colors: {
        primary: '#ffd100',
        secondary: '#C82101',
        backgroundGray: '#f5f5f5',
        gray: '#f1f1f1',
        darkGray: '#666',
        black: '#212121',
        white: '#fff',
    },
    devices: {
        mobile: '320px',
        tablet: '720px',
        tabletPro: '1020px',
        desktop: '1200px',
        desktopLarge: '1600px',
        desktopFull: '1920px',
    },
}

export default theme