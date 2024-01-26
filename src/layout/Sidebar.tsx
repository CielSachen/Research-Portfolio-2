import { ArchiveOutlined, MenuOpen, OpenInNew } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from '@mui/material';

import { SidebarItem, SidebarItemCollapse } from '../components/layout';
import { routes } from '../utilities/routes';

interface Props {
  handleDrawerClose: () => void;
  open: boolean;
}

export function Sidebar(props: Props) {
  const theme = useTheme();

  const DrawerHead = styled('div')((component) => component.theme.unstable_sx({
    ...theme.mixins.toolbar,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
  }));

  return (
    <Drawer
      anchor="left"
      ModalProps={{ keepMounted: true }}
      onClose={props.handleDrawerClose}
      open={props.open}
      sx={{
        flexShrink: 0,
        width: 300,
        '& .MuiDrawer-paper': { width: 300 },
      }}
      transitionDuration={600}
    >
      <DrawerHead>
        <IconButton
          color="inherit"
          edge="start"
          onClick={props.handleDrawerClose}
          size="large"
        >
          <MenuOpen />
        </IconButton>
      </DrawerHead>
      <Divider />
      <List component="nav">
        {routes.map((route, index) => (
          route.sidebarProps
            ? route.children
              ? <SidebarItemCollapse
                handleDrawerClose={props.handleDrawerClose}
                key={index}
                route={route}
              />
              : <SidebarItem
                handleDrawerClose={props.handleDrawerClose}
                key={index}
                route={route}
              />
            : null
        ))}
        <ListItemButton
          onClick={props.handleDrawerClose}
          href="https://cielsachen.github.io/Research-Portfolio/"
        >
          <ListItemIcon>
            <ArchiveOutlined />
          </ListItemIcon>
          <ListItemText primary={'Term 1 Portfolio (Archived)'} />
          <OpenInNew />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
