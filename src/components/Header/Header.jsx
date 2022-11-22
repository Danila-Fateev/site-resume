import styledComponents from './Header.styled';
import logo from '../../images/logo.png';
const { NavList, Navigation, NavItem, NavLinks } = styledComponents;

const Header = () => {
  return (
    <header>
      <Navigation>
        <img
          src={logo}
          alt="logo"
          style={{
            width: '46px',
            height: 'auto',
          }}
        />

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
    </header>
  );
};

export default Header;
