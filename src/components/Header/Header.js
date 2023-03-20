import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <StyledLogo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <Icon
              size={24}
              id={"shopping-bag"}
            />
          </UnstyledButton>
          <UnstyledButton>
            <Icon
              size={24}
              id={"search"}
            />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon
              size={24}
              id={"menu"}
            />
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  --header-spacing: 48px;
  --edge-spacing: 32px;
  padding: 18px 0;
  padding-right: 0;
  border-bottom: 1px solid var(--gray-300);

  @media ${QUERIES.phoneAndDown} {
    --edge-spacing: 16px;
  }
  overflow-x: auto;
`;

const StyledLogo = styled(Logo)`
  padding-left: var(--edge-spacing);
  padding-right: var(--header-spacing);
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1.5rem,
    7.3vw - 3rem,
    3rem
  );;
  /* margin: 0px 48px; */
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--medium-weight);

  &:first-of-type {
    color: var(--secondary);
  }
`;

/* Responsive Components */
const MobileNav = styled.div`
  display: flex;
  gap: 34px;
  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
  @media not ${QUERIES.tabletAndDown} {
    display: none;
  }
`

export default Header;
