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
  border: 1px solid #28568c;

  &:hover {
    cursor: pointer;
  }
`;

const ProjectTextHeading = styled.h3``;

const ProjectText = styled.p``;

const ProjectTextBox = styled.div`
  position: absolute;
  top: -999999px;
  left: -999999px;
  width: 100%;
  height: 100%;
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
