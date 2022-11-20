import styled from '@emotion/styled';
import constants from 'constants';

const { colors } = constants;

const HeroBox = styled.div`
  text-align: left;
  color: ${colors.primaryTextColor};
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 28px;
  line-height: 1.21;
  letter-spacing: 0.07em;
`;

const HeroText = styled.p`
  font-size: 64px;
  line-height: 1.25;
  letter-spacing: 0.06em;
`;

const HeroSpan = styled.span`
  color: #8280e9;
`;

const styledComponents = { HeroBox, HeroText, HeroSpan };

export default styledComponents;
