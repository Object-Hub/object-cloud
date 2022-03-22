import React from 'react';
import icons from 'react-icons';

import { MdSpaceDashboard,
  MdAdminPanelSettings,
  MdOutlineDesktopWindows
} from 'react-icons/md';

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
  },
  {
    title: 'Adminstração',
    path: '/admin',
    icon: <MdAdminPanelSettings />,
    cName: 'nav-text'
  },
  {
    title: 'VPS',
    path: '/vps',
    icon: <MdOutlineDesktopWindows />,
    cName: 'nav-text'
  }
]