import {QueryClient, QueryClientProvider} from 'react-query';
import type {AppProps} from 'next/app';
import '../styles/globals.css';
import {createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: 'hsl(150, 100%, 66%)',
        },
        background: {
            paper: 'hsl(217, 19%, 24%)',
        },
        text: {
            primary: 'hsl(193, 38%, 86%)',
        },
    }
});

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={new QueryClient()}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default MyApp;
