import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Sideber = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
    <>
      <Box component={'div'} className='absolute h-full bg-slate-600'>
        <Box component={'div'} >
          <Typography variant='h5' className='py-4 text-center text-[#1be386] font-semibold' >
            School Project
          </Typography>
          <Tabs
                  textColor="inherit"
                  indicatorColor="primary"
                  aria-label="tabs example"
                  value={value} onChange={handleChange}>
            <Tab component={Link} sx={{width: '150px', color:'white'}} label="Student" />
            <Tab component={Link} sx={{width: '150px', color:'white'}} label="Teacher" />
          </Tabs>
          <Box>
            <Tabs>
              <Tab component={Link}  sx={{color:'white', width: '100%', alignItems: 'start'}} label='Home' /> 
            </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Sideber