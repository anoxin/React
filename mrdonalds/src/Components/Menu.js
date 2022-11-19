import React from 'react'
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';

const MenuStyled = styled.main`
background-color: #ccc;
margin-top: 80px;
`;

const MenuBaner = styled.div`
width: 100%;
height: 210px;
background-image: url('/menu/banner.png');
background-position: center;
background-size: cover;
margin-bottom: 17px;
`;

const SectionMenu = styled.section`
padding: 30px
`;

export const Menu = () => (
  <MenuStyled>
    <MenuBaner></MenuBaner>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
)