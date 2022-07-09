import {RandomButton} from '../random-button/random-button';
import {Box, Card, Typography} from '@mui/material';
import {Advice} from '../../abstraction';
import Image from 'next/image';
import React from 'react';

type Props = {
    advice: Advice;
    generateAdvice: () => void;
}

export const AdviceCard: React.FC<Props> = (props) => {
    const {generateAdvice} = props;
    const {id: adviceId, advice} = props.advice;

    return (
        <>
            <Card
                elevation={5}
                sx={{
                    textAlign: 'center',
                    padding: '40px 22px 60px 22px',
                    borderRadius: '16px',
                    maxWidth: '600px'
                }}>
                <Typography
                    fontFamily="Manrope"
                    fontWeight="lighter"
                    color="primary"
                    fontSize={14}
                    sx={{
                        letterSpacing: '6px'
                    }}>
                    ADVICE #{adviceId}
                </Typography>
                <Typography
                    fontFamily="Manrope"
                    fontWeight={800}
                    fontSize={28}
                    sx={{
                        margin: '30px 0 20px 0'
                    }}>
                    "{advice}"
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

            </Card>

            <Box sx={{
                position: 'relative',
                top: '-26px',
                alignSelf: 'center'
            }}>
                <RandomButton onClick={generateAdvice}/>
            </Box>
        </>
    );
};
