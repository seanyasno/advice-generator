import {StyledButton} from './styles';
import Image from 'next/image';
import React from 'react';

type Props = {
    onClick: () => void;
}

export const RandomButton: React.FC<Props> = (props) => {
    const {onClick} = props;

    return (
        <StyledButton
            variant="contained"
            onClick={onClick}
            color="primary">
            <Image alt="dice" width={22} height={22} src="/icon-dice.svg"/>
        </StyledButton>
    );
};
