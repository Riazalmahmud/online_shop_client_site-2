import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Button } from "@mui/material";
import MakeAdmin from "../SharePage/MakeAdmin/MakeAdmin";
import Home from "../Home/Home";
import AddProduct from "../SharePage/AddProduct/AddProduct";
import useAuth from "../Hooks/useAuth";
import AdminRoute from "../SharePage/AdminRoute/AdminRoute";
import Feedback from "../SharePage/Porduct/Feedback/Feedback.js";
import ProductManage from "../SharePage/Porduct/ProductManage/ProductManage.js";
import "./Dashboard.css";
const drawerWidth = 240;
const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div className="dashboard-menu">
        <Link to="/addProduct">
          <Button color="inherit">Add Product </Button>
        </Link>
        {/* {admin && <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>} */}
        {admin && (
          <Box>
            <Link to={`${url}/makeAdmin`}>
              <Button color="inherit">Make Admin</Button>
            </Link>
            <Link to={`${url}/Feedback`}>
              <Button color="inherit">FeedBack</Button>
            </Link>
            <Link to={`${url}/AddProduct`}>
              <Button color="inherit">AddProduct</Button>
            </Link>
            <Link to={`${url}/ProductManage`}>
              <Button color="inherit">ProductManage</Button>
            </Link>
          </Box>
        )}
      </div>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path={path}>
              <Home></Home>
            </Route>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/Feedback`}>
              <Feedback></Feedback>
            </AdminRoute>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/AddProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/ProductManage`}>
              <ProductManage></ProductManage>
            </Route>
          </Switch>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
