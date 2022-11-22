import styled from '@emotion/styled';

const TextAboutMe = styled.p`
  padding: 20px 25px;
  background-color: #111a3a;
  border: 1px solid #0ec5ff;
  margin-bottom: 20px;
  width: 595px;
  font-family: 'Optima';
  font-weight: 400;
  font-size: 24px;
  line-height: 1.21;
  color: #ffffff;
`;

const TextAboutMeLink = styled.a`
  text-decoration: none;
  color: #7abfff;
`;

const MailLink = styled.a`
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 24px;
  line-height: 1.25;
  padding: 22px 110px;
  color: #000000;
  background: #0ec5ff;
  border-radius: 3px;

  transition: color 250ms;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #ffffff;
    cursor: pointer;
  }
`;

const ResumeLink = styled.a`
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 24px;
  line-height: 1.25;
  padding: 22px 54px;
  color: #0fb1e8;
  border: 1px solid #0ec5ff;
  border-radius: 3px;
  background: transparent;
  transition: color 250ms;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #ffffff;
    cursor: pointer;
  }
`;

const ContactsText = styled.p`
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: 0.07em;
  color: #f8f8f8;
`;

const ContactsTextEmail = styled.a`
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
  text-decoration: none;
  letter-spacing: 0.07em;
  color: #7abfff;
`;

const ContactsList = styled.ul`
  display: flex;
  list-style: none;
`;

const ContactsItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const styledComponents = {
  TextAboutMe,
  TextAboutMeLink,
  ResumeLink,
  MailLink,
  ContactsText,
  ContactsTextEmail,
  ContactsList,
  ContactsItem,
};

export default styledComponents;
