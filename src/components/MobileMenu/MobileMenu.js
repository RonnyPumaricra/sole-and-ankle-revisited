/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <StyledOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <MenuWrapper aria-label="Navigation menu">
        <Top>
          <CloseButton onClick={onDismiss}>
            <Icon id={"close"}></Icon>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
        </Top>
        <Center>
          <NavLink selectedLink={true} href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Center>
        <BottomNav>
          <BottomLink href="/terms">Terms and Conditions</BottomLink>
          <BottomLink href="/privacy">Privacy Policy</BottomLink>
          <BottomLink href="/contact">Contact Us</BottomLink>
        </BottomNav>
      </MenuWrapper>
    </StyledOverlay>

  );
};

const StyledOverlay = styled(DialogOverlay)`
  position: absolute;
  inset: 0;
  background-color: hsl(var(--gray-900-fragment) / 80%);
`

const MenuWrapper = styled(DialogContent)`
  position: absolute;
  inset: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: min(300px, 100%);
  padding: 32px;
  padding-right: 22px;
  background: var(--white);
`

const Top = styled.div`
  flex: 1;
`

const CloseButton = styled(UnstyledButton)`
  margin-left: auto;
`

const Center = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 22px;
`

const NavLink = styled.a`
  text-transform: uppercase;
  font-weight: var(--medium-weight);
  color: ${p => p.selectedLink
    ? "var(--secondary)"
    : "var(--gray-900)"
    };
  text-decoration: none;
  line-height: 1;
`

const BottomNav = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  gap: 14px;
`

const BottomLink = styled.a`
  font-size: ${14 / 16}rem;
  color: var(--gray-700);
  text-decoration: none;
  line-height: 1;
`

export default MobileMenu;
