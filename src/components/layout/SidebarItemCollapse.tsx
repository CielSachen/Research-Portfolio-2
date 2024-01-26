import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import type { Route } from '../../utilities/routes';
import { SidebarItem } from './SidebarItem';

interface Props {
  handleDrawerClose: () => void;
  paddingLeft?: boolean;
  route: Route;
}

export function SidebarItemCollapse(props: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const location = useLocation();

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        selected={props.route.children?.some((routeChild) => location.pathname === routeChild.path) && !open}
        sx={props.paddingLeft
          ? { pl: 4 }
          : undefined}
      >
        <ListItemIcon>{props.route.children?.some((routeChild) => location.pathname === routeChild.path && !open)
          ? props.route.sidebarProps?.activeIcon
          : props.route.sidebarProps?.icon}</ListItemIcon>
        <ListItemText primary={props.route.sidebarProps?.displayText} />
        {open
          ? <ExpandLess />
          : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        unmountOnExit
      >
        <List disablePadding>
          {props.route.children?.map((routeChild, childIndex) => (
            routeChild.sidebarProps
              ? <SidebarItem
                handleDrawerClose={props.handleDrawerClose}
                key={childIndex}
                paddingLeft
                route={routeChild}
              />
              : null
          ))}
        </List>
      </Collapse>
    </>
  );
}
