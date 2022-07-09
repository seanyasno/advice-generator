import {Box, Card, Container, Typography} from '@mui/material';
import {fetchRandomAdvice} from '../src/requests';
import {RandomButton} from '../src/components';
import {useQuery} from 'react-query';
import type {NextPage} from 'next';
import Image from 'next/image';
import Head from 'next/head';

const Home: NextPage = () => {
    const {data: slipAdvice, isSuccess, refetch} = useQuery({
        queryKey: 'slipAdvice',
        queryFn: fetchRandomAdvice,
        refetchOnWindowFocus: false,
    });

    return (
        <Container sx={{
            justifyContent: 'center',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Head>
                <title>Adivce Generator</title>
                <link rel="shortcut icon" href="/icon-dice.svg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap"
                      rel="stylesheet"/>
            </Head>
            {
                isSuccess &&
                <>
                    <Card
                        elevation={5}
                        sx={{
                            textAlign: 'center',
                            padding: '40px 22px 60px 22px',
                            borderRadius: '16px',
                            maxWidth: '600px'
                        }}>
                        {
                            isSuccess &&
                            <>
                                <Typography
                                    fontFamily="Manrope"
                                    fontWeight="lighter"
                                    color="primary"
                                    fontSize={14}
                                    sx={{
                                        letterSpacing: '6px'
                                    }}>
                                    ADVICE #{slipAdvice.slip.id}
                                </Typography>
                                <Typography
                                    fontFamily="Manrope"
                                    fontWeight={800}
                                    fontSize={28}
                                    sx={{
                                        margin: '30px 0 20px 0'
                                    }}>
                                    "{slipAdvice.slip.advice}"
                                </Typography>
                                <Box sx={{
                                    display: {
                                        sm: 'none'
                                    }
                                }}>
                                    <Image
                                        src="/pattern-divider-mobile.svg"
                                        width={295}
                                        height={16}/>
                                </Box>
                                <Box sx={{
                                    display: {
                                        xs: 'none',
                                        sm: 'block',
                                    }
                                }}>
                                    <Image
                                        src="/pattern-divider-desktop.svg"
                                        width={444}
                                        height={16}/>
                                </Box>

                            </>
                        }
                    </Card>

                    <Box sx={{
                        position: 'relative',
                        top: '-26px',
                        alignSelf: 'center'
                    }}>
                        <RandomButton onClick={() => refetch()}/>
                    </Box>
                </>
            }
        </Container>
    );
};

export default Home;
