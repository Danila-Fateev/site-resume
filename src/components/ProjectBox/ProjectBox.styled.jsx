import styled from '@emotion/styled';

const ProjectBoxStyled = styled.div`
  display: flex;
  border: 1px solid #28568c;
  margin-left: auto;
  margin-right: auto;
  width: 1050px;
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
`;

const ProjectInput = styled.input`
  visibility: hidden;
  &:checked {
    visibility: visible;
  }
`;

const ProjectTextHeading = styled.h3``;

const ProjectText = styled.p``;

const ProjectTextBox = styled.div``;

const styledComponents = {
  ProjectBoxStyled,
  ProjectLabel,
  ProjectInput,
  ProjectTextHeading,
  ProjectText,
  ProjectTextBox,
};

export default styledComponents;
