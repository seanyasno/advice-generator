import {fetchRandomAdvice} from '../src/requests';
import {AdviceCard} from '../src/components';
import {Container} from '@mui/material';
import {useQuery} from 'react-query';
import type {NextPage} from 'next';
import {useCallback} from 'react';
import Head from 'next/head';

const Home: NextPage = () => {
    const {data: slipAdvice, isSuccess, refetch} = useQuery({
        queryKey: 'slipAdvice',
        queryFn: fetchRandomAdvice,
        refetchOnWindowFocus: false,
    });

    const generateAdvice = useCallback(() => refetch(), [refetch]);

    return (
        <Container sx={{
            justifyContent: 'center',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Head>
                <title>Advice Generator</title>
                <link rel="shortcut icon" href="/icon-dice.svg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap"
                      rel="stylesheet"/>
            </Head>

            {
                isSuccess &&
                <AdviceCard advice={slipAdvice.slip} generateAdvice={generateAdvice}/>
            }
        </Container>
    );
};

export default Home;
