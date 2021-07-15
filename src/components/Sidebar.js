import * as React from "react";
import { styled } from "@material-ui/core/styles";
import MuiDrawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import pages from "../constants/Pages";
import WithLayout from "./WithLayout";
import { useSelector, useDispatch } from "react-redux";
import StyledLink from "./StyledLink";
import PersonIcon from "@material-ui/icons/Person";

const createListItem = () => {
  return (
    <div
      style={{
        height: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {pages.map((item, index) => (
          <StyledLink
            to={item.path}
            key={index}
            exact={true}
            activeClassName='navbaractivelink'
          >
            <ListItemButton
              sx={{
                marginLeft: 1,
                marginRight: 1,
                borderRadius: 1,
                height: "fit-content",
              }}
              divider={item.divider}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </StyledLink>
        ))}
      </div>

      <StyledLink
        to={"/profile"}
        exact={true}
        activeClassName='navbaractivelink'
      >
        <ListItemButton
          sx={{
            marginLeft: 1,
            marginRight: 1,
            borderRadius: 1,
            height: "fit-content",
            maxHeight: 40,
          }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary='Profile' />
        </ListItemButton>
      </StyledLink>
    </div>
  );
};

const createIcons = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "inherit",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {pages.map((item, index) => (
          <StyledLink
            to={item.path}
            key={index}
            exact={true}
            activeClassName='navbaractiveicon'
          >
            <IconButton sx={{ width: "fit-content" }}>{item.icon}</IconButton>
          </StyledLink>
        ))}
      </div>

      <StyledLink
        to={"/profile"}
        exact={true}
        activeClassName='navbaractiveicon'
      >
        <IconButton sx={{ width: "fit-content" }}>
          <PersonIcon />
        </IconButton>
      </StyledLink>
    </div>
  );
};

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 46,
  backgroundColor: "#FAFCFC",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.sidebarOpen);

  const setOpen = (open) =>
    dispatch({ type: "SIDEBAR_OPEN", sidebarOpen: open });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant='permanent' open={open}>
        <IconButton
          sx={{ width: "fit-content", alignSelf: open ? "flex-end" : "center" }}
          onClick={open ? handleDrawerClose : handleDrawerOpen}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: !open && "center",
            paddingTop: 0,
            height: "inherit",
          }}
        >
          {open ? createListItem() : createIcons()}
        </List>
      </Drawer>

      <WithLayout />
    </Box>
  );
};

export default Sidebar;
