import {Card, Typography, Box} from '@mui/material';
import styled from '@emotion/styled';

export const StyledCard = styled(Card)`
  padding: 40px 22px 60px 22px;
  border-radius: 16px;
  text-align: center;
  max-width: 600px;
`;

export const StyledTitle = styled(Typography)`
  font-family: Manrope, sans-serif;
  font-weight: lighter;
  font-size: 14px;
  letter-spacing: 6px;
`;

export const StyledContent = styled(Typography)`
  font-family: Manrope, sans-serif;
  margin: 30px 0 20px 0;
  font-weight: 800;
  font-size: 28px;
`

export const StyledButtonContainer = styled(Box)`
  align-self: center;
  position: relative;
  top: -26px;
`;
