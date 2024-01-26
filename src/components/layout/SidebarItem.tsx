import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

import type { Route } from '../../utilities/routes';

interface Props {
  handleDrawerClose?: () => void;
  paddingLeft?: boolean;
  route: Route;
}

export function SidebarItem(props: Props) {
  const location = useLocation();

  return (
    <ListItemButton
      component={NavLink}
      onClick={props.handleDrawerClose}
      selected={location.pathname === props.route.path}
      sx={props.paddingLeft
        ? { pl: 4 }
        : undefined}
      to={props.route.path}
    >
      <ListItemIcon>{location.pathname === props.route.path
        ? props.route.sidebarProps?.activeIcon
        : props.route.sidebarProps?.icon}</ListItemIcon>
      <ListItemText primary={props.route.sidebarProps?.displayText} />
      {props.route.sidebarProps?.endIcon
        ? props.route.sidebarProps.endIcon
        : null}
    </ListItemButton>
  );
}
