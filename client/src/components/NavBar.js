import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () => {
    return(
        <div>
            <AppBar position = "static">
                <Toolbar>
                    <Typography variant="title" color="inherit" align="center">
                        This is Psych432
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

// Exporting must be done to make the component usablein the App.
export default NavBar;