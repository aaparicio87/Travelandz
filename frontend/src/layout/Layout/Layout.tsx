import { Person } from '@mui/icons-material'
import { AppBar, Box, Container, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        TravelLandDZ
                    </Typography>
                    <IconButton color="inherit">
                        <Box display="flex" justifyContent="space-between">
                            <Person />
                        </Box>

                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg">
                <Outlet />
            </Container>
        </Box>

    )
}

export default Layout