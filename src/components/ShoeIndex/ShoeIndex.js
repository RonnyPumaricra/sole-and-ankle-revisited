import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';



const ShoeIndex = ({ sortId, setSortId }) => {

  const BreadcrumbsChildren = <>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">
      Shoes
    </Breadcrumbs.Crumb>
  </>

  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadcrumbs>
              {BreadcrumbsChildren}
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </div>
          <DesktopSortFilter>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </DesktopSortFilter>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <DesktopLeftColumn>
        <Breadcrumbs>
          {BreadcrumbsChildren}
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </DesktopLeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${QUERIES.tabletAndDown} {
    flex-direction: row;
  }
`;

const DesktopLeftColumn = styled.div`
  flex-basis: 248px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media ${QUERIES.tabletAndDown} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--medium-weight);
`;

const MobileBreadcrumbs = styled(Breadcrumbs)`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
  }
`

const DesktopSortFilter = styled.div`
  @media ${QUERIES.phoneAndDown} {
    display: none;
  }
`

export default ShoeIndex;
