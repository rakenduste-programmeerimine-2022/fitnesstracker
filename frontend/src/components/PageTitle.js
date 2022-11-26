import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from "react-router-dom"

function PageTitle() {
    return (
        <Box sx={{ flexGrow: 1 }} className="mui-page-title">
                <AppBar position="static">
                    <Toolbar>
                    <Link to="/">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/* add icon component here */}
                        </IconButton>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fitness Tracker
                    </Typography>
                    <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
    )
  }

export default PageTitle