import styled from '@emotion/styled';
import constants from 'constants';

const { colors } = constants;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;
`;

const Navigation = styled.nav`
  display: flex;
  padding-top: 45px;
  padding-bottom: 45px;
`;

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const NavLinks = styled.a`
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
  text-decoration: none;
  color: ${colors.primaryTextColor};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const styledComponents = {
  NavList,
  Navigation,
  NavItem,
  NavLinks,
};

export default styledComponents;
