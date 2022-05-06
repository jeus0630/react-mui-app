import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { AppBar, Box, styled, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import Pets from "@mui/icons-material/Pets";
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
    width: '40%',
    background: '#fff',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    }
}))

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{
                    display: {
                        xs: 'none',
                        sm: 'block'
                    }
                }}>
                    LAMA DEV
                </Typography>
                <Pets sx={{
                    display: {
                        xs: 'block',
                        sm: 'none'
                    }
                }}></Pets>
                <Search>
                    <InputBase placeholder="search..."></InputBase>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon></MailIcon>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <CircleNotificationsIcon></CircleNotificationsIcon>
                    </Badge>
                    <Avatar onClick={e => setOpen(true)} sx={{
                        width: 30,
                        height: 30
                    }}></Avatar>
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{
                        width: 30,
                        height: 30
                    }}></Avatar>
                    <Typography variant='body2'>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}