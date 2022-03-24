import React from 'react';
import icons from 'react-icons';

import * as Icon from 'react-icons/all';

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
    icon: <Icon.MdSpaceDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Adminstração',
    path: '/admin',
    icon: <Icon.MdAdminPanelSettings />,
    cName: 'nav-text'
  },
  {
    title: 'VPS',
    path: '/vps',
    icon: <Icon.MdOutlineDesktopWindows />,
    cName: 'nav-text'
  }
]