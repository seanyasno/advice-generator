import React from 'react';
import {Button, IconButton} from '@mui/material';
import Image from 'next/image';

type Props = {
    onClick: () => void;
}

export const RandomButton: React.FC<Props> = (props) => {
    const {onClick} = props;

    return (
        <Button
            variant="contained"
            onClick={onClick}
            color="primary"
            sx={{
                padding: '20px',
                borderRadius: '50%',
            }}>
            <Image width={22} height={22} src={'/icon-dice.svg'}/>
        </Button>
    );
};
