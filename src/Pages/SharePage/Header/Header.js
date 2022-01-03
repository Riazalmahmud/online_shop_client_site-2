import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BrandLogo from '../../../image/shoping card.png'
import Button from '@mui/material/Button';
// import * as Colors from 'material-ui/styles/colors';
import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import './Header.css'
import useFirebase from '../../Hooks/useFirebase'
// const pages = ['Home', 'Shop', 'About', 'Contact', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const { user, logOut } = useFirebase()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));
    return (
        <div>
            <AppBar position="static" style={{ background: '#fff' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            className="Brand"
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <div className="Brand">
                                <img src={BrandLogo} alt="" />
                                <h3>Riaz Hossen</h3>
                            </div>


                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu} className="responsive-menu">
                                    <Typography textAlign="center">
                                        <NavLink to="/home">Home</NavLink>
                                        <NavLink to="/Shop">Shop</NavLink>
                                        <NavLink to="/About">About</NavLink>
                                        <NavLink to="/Contact">Contact</NavLink>
                                        <NavLink to="/Register">Register</NavLink>
                                        <NavLink to="/Cart">Cart page</NavLink>
                                        <NavLink to="/Dashboard">dashboard</NavLink>
                                        {user?.email ? <Button variant="outlined" onClick={logOut}>LogOut</Button> : <NavLink to="/login">login</NavLink>
                                        }
                                    </Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <Box onClick={handleCloseNavMenu} className="navigation">
                                <NavLink to="/home">Home</NavLink>
                                <NavLink to="/Shop">Shop</NavLink>
                                <NavLink to="/About">About</NavLink>
                                <NavLink to="/Contact">Contact</NavLink>
                                <NavLink to="/Register">Register</NavLink>
                                <NavLink to="/Cart">Cart page</NavLink>
                                <NavLink to="/Dashboard">Dashboard</NavLink>
                                {user?.email ? <Button variant="outlined" onClick={logOut}>LogOut</Button> : <NavLink to="/login">login</NavLink>
                                }
                            </Box>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <img src={user.photoURL} alt="" style={{ widht: '40px', height: '40px', borderRadius: '100%' }} />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseNavMenu}  >
                                        <Typography textAlign="center">{setting} </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;