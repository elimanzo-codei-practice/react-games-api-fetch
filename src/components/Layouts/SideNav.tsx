import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import logo from 'assets/logo.png';
import logoSm from 'assets/logoSm.png';
import { SideNavCtx } from 'components/Layouts/Borders';
import { NavTree } from 'utils/NavTree';
import React from 'react';


export default function SideNav() {
  const theme = useTheme();
  const { drawerWidth, isFullNav, setIsFullNav } = React.useContext(SideNavCtx);
  return (
    <Drawer
      anchor='left'
      open
      sx={{
        display: 'block',
        width: drawerWidth,
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      variant='permanent'
    >
      <Toolbar>
        <Grid container justifyContent='space-between'>
          <Grid item xs={9}>
            {isFullNav ? (
              <img height={theme.custom.appBarHeight} src={logo} alt='' />
            ) : (
              <img src={logoSm} alt='' />
            )}
          </Grid>
          {setIsFullNav ? (
            <Grid item xs={3}>
              <IconButton onClick={() => setIsFullNav(!isFullNav)}>
                {isFullNav ? <ChevronLeft /> : <ChevronRight />}
              </IconButton>
            </Grid>
          ) : null}
        </Grid>
      </Toolbar>
      <Divider />
      <List>
        {NavTree.map((navItem) => {
          const { Icon } = navItem;
          return (
            <Tooltip title={navItem.name} key={navItem.name}>
              <ListItemButton component='a' href={navItem.spaUrl} divider>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                {isFullNav ? <Typography>{navItem.name}</Typography> : null}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>
    </Drawer>
  );
}
