import { AppBar, Typography, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h4'>
                    Logo
                </Typography>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header