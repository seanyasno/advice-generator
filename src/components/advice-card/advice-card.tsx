import {StyledCard, StyledTitle, StyledContent, StyledButtonContainer} from './styles';
import {RandomButton} from '../random-button/random-button';
import {Advice} from '../../abstraction';
import {Box} from '@mui/material';
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
        <React.Fragment>
            <StyledCard elevation={5}>
                <StyledTitle
                    color="primary">
                    ADVICE #{adviceId}
                </StyledTitle>

                <StyledContent>
                    &quot;{advice}&quot;
                </StyledContent>

                <Box sx={{
                    display: {
                        sm: 'none'
                    }
                }}>
                    <Image
                        src="/pattern-divider-mobile.svg"
                        alt="divider"
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
                        alt="divider"
                        width={444}
                        height={16}/>
                </Box>

            </StyledCard>

            <StyledButtonContainer>
                <RandomButton onClick={generateAdvice}/>
            </StyledButtonContainer>
        </React.Fragment>
    );
};
