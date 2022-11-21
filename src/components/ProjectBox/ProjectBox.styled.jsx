import styled from '@emotion/styled';

const ProjectBoxStyled = styled.div`
  display: flex;
  border: 1px solid #28568c;
  margin-left: auto;
  margin-right: auto;
  width: 1050px;
`;

const ProjectInput = styled.input`
  visibility: hidden;
  &:checked {
    visibility: visible;
  }
`;

const ProjectLabel = styled.label`
  display: block;
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 24px;
  line-height: 1.25;
  color: #f8f8f8;
  padding: 20px;
  letter-spacing: 0.07em;
  border-right: 1px solid #28568c;
  border-bottom: 1px solid #28568c;

  &:hover {
    cursor: pointer;
  }
`;

const ProjectTextHeading = styled.h3`
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 22px;
  line-height: 1.23;
  letter-spacing: 0.07em;

  color: #000000;
`;

const ProjectText = styled.p`
  font-family: 'Optima';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;

  padding: 25px;
`;

const ProjectTextBox = styled.div`
  position: absolute;
  top: -999999px;
  left: -999999px;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #0ec5ff;
`;

const styledComponents = {
  ProjectBoxStyled,
  ProjectLabel,
  ProjectInput,
  ProjectTextHeading,
  ProjectText,
  ProjectTextBox,
};

export default styledComponents;
