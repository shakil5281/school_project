import React from 'react'
import {  Box, Tab, Tabs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import StudentAcc from './StudentAcc';
import TeacherAcc from './TeacherAcc';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const Sideber = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Box component={'div'} className='absolute h-full bg-[#86198f]'>
        <Box component={'div'} >
          <Typography variant='h5' className='py-4 text-center text-[#1bcdea]' >
            School Project
          </Typography>
          <Tabs
                  textColor="inherit"
                  indicatorColor="primary"
                  aria-label="tabs example"
                  value={value} onChange={handleChange}>
            <Tab component={Link} sx={{width: '150px', color:'white'}} label="Student" {...a11yProps(0)}/>
            <Tab component={Link} sx={{width: '150px', color:'white'}} label="Teacher" {...a11yProps(1)}/>
          </Tabs>
          <Box className='my-2'>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >

              <TabPanel value={value} index={0} dir={theme.direction}>
                  <StudentAcc />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                  <TeacherAcc />
              </TabPanel>
              </SwipeableViews>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Sideber