import { AppBar, Button } from '@mui/material'
import React from 'react'

export default function NavBar(): JSX.Element {
    return (
        <AppBar sx={{height: '10vh'}} color="inherit" position="fixed">
            <Button sx={{width: '20vw'}} variant="contained" color="primary" >
                login
            </Button>
        </AppBar>
    )
}
