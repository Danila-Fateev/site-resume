import styledComponents from './Header.styled';

const { NavList, Navigation, NavItem, NavLinks } = styledComponents;

const Header = () => {
  return (
    <Navigation>
      <p>logo</p>

      <NavList>
        <NavItem>
          <NavLinks href="#projects">Projects</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#about">About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#contacts">Contacts</NavLinks>
        </NavItem>
      </NavList>
    </Navigation>
  );
};

export default Header;
