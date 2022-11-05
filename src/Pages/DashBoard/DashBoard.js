import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './DashBoard.css'
import useAuth from './../../Hooks/Authentication/Auth/useAuth';
import Loading from '../Loading/Loading';

const drawerWidth = 240;

const DashBoard = (props) => {
    const { logOut, isAdmin, isLoading } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleLogOut = () => {
        logOut();

    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <div className='ms-4'>

                    <NavLink to='mycart' activeclassname='active' className='dashBoardLink'>My Cart</NavLink>

                </div>
                <div className='ms-4'>
                    <NavLink to='myorders' activeclassname='active' className='dashBoardLink'>My Orders</NavLink>
                </div>
                <div className='ms-4'>
                    <NavLink to='addreview' activeclassname='active' className='dashBoardLink'>Send Review</NavLink>
                </div>
                {isAdmin && <div className='ms-4'>
                    <NavLink to='addproducts' activeclassname='active' className='dashBoardLink'>Add Products</NavLink>
                </div>}

                {isAdmin && <div className='ms-4'>
                    <NavLink to='manageproducts' activeclassname='active' className='dashBoardLink'>Manage Products</NavLink>
                </div>}
                {isAdmin && <div className='ms-4'>
                    <NavLink to='manageaccessories' activeclassname='active' className='dashBoardLink'>Manage Accessories</NavLink>
                </div>}
                {isAdmin && <div className='ms-4'>
                    <NavLink to='manageallorders' activeclassname='active' className='dashBoardLink'>Manage All Orders</NavLink>
                </div>}
                {isAdmin && <div className='ms-4'>
                    <NavLink to='makeadmin' activeclassname='active' className='dashBoardLink'>Make Admin</NavLink>
                </div>}
            </List>
            <Divider />
            <List>
                <div className='ms-4'>

                    <Link to='/home' className='dashBoardLink'>Home</Link>

                </div>
                <div className='ms-4'>
                    <Link to='/shop' className='dashBoardLink'>Shop</Link>
                </div>
                <div className='ms-4'>
                    <Link to='/contact' className='dashBoardLink'>Contact</Link>
                </div>
                <div className='ms-4'>
                    <Link to='/about' className='dashBoardLink'>About</Link>
                </div>

                <div className='ms-2'>
                    <button onClick={handleLogOut} className='signOutBtn ms-2'>Sign-Out</button>
                </div>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        < div >
            {!isLoading ? <Box sx={{ display: 'flex' }}>
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
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            DashBoard
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
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    className='mt-5 py-5'
                >
                    <Outlet></Outlet>
                </Box>
            </Box> : <Loading></Loading>}
        </div >

    );
}
export default DashBoard;
