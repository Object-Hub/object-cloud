import React from 'react';
import icons from 'react-icons';
import { MdSpaceDashboard } from 'react-icons/md';

interface IData {
  title: string;
  path: string;
  icon: React.ReactElement<icons.IconType>;
  cName: string;
}

export const SideBarData: Array<IData> = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdSpaceDashboard />,
    cName: 'nav-text'
  }
]