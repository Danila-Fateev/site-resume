import styled from '@emotion/styled';

const AboutBoxStyled = styled.div`
  margin-right: 35px;
  border: 1px solid #28568c;
`;

const AboutBoxText = styled.p`
  padding: 70px 105px;
  font-family: 'Optima';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: 0.07em;

  color: #ffffff;
`;

const AboutImgBox = styled.div`
  display: block;
  border: 4px solid #0ec5ff;
  position: relative;
`;

const styledComponents = { AboutBoxStyled, AboutBoxText, AboutImgBox };

export default styledComponents;
