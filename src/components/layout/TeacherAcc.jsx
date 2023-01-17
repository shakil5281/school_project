import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button, ListItemText, MenuItem, MenuList, Tab, Tabs } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion  disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary 
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function TeacherAcc() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion sx={{backgroundColor: '#0000',}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header">
          <Button
           variant='text' sx={{color: 'white', width: '100%', display: 'block', textAlign: 'left', padding: '15px 10px'}}
           
           >Summary</Button>
        </AccordionSummary>
        <AccordionDetails sx={{margin: 0, padding: 0}}>
            <MenuList>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7',opacity: '0.7'}}>
                    Student ManPower
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7',opacity: '0.7'}}>
                    Student Details
                </ListItemText>
              </MenuItem>
            </MenuList>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#0000',}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary  aria-controls="panel2d-content" id="panel1d-header">
          <Button
           variant='text' sx={{color: 'white', width: '100%', display: 'block', textAlign: 'left', padding: '15px 10px'}}
           
           >Summary</Button>
        </AccordionSummary>
        <AccordionDetails sx={{margin: 0, padding: 0}}>
            <MenuList>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7'}}>
                    Home
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7'}}>
                    Home
                </ListItemText>
              </MenuItem>
            </MenuList>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#0000',}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary  aria-controls="panel3d-content" id="panel1d-header">
          <Button
           variant='text' sx={{color: 'white', width: '100%', display: 'block', textAlign: 'left', padding: '15px 10px'}}
           
           >Summary</Button>
        </AccordionSummary>
        <AccordionDetails sx={{margin: 0, padding: 0}}>
            <MenuList>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7'}}>
                    Home
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7'}}>
                    Home
                </ListItemText>
              </MenuItem>
            </MenuList>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#0000',}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary  aria-controls="panel4d-content" id="panel1d-header">
          <Button
           variant='text' sx={{color: 'white', width: '100%', display: 'block', textAlign: 'left', padding: '15px 10px'}}
           
           >Summary</Button>
        </AccordionSummary>
        <AccordionDetails sx={{margin: 0, padding: 0}}>
            <MenuList>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7'}}>
                    Home
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7'}}>
                    Home
                </ListItemText>
              </MenuItem>
            </MenuList>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#0000',}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary  aria-controls="panel5d-content" id="panel1d-header">
          <Button
           variant='text' sx={{color: 'white', width: '100%', display: 'block', textAlign: 'left', padding: '15px 10px'}}
           
           >Summary</Button>
        </AccordionSummary>
        <AccordionDetails sx={{margin: 0, padding: 0}}>
            <MenuList>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7'}}>
                    Home
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText sx={{color: '#fff', padding: '10px',opacity: '0.7'}}>
                    Home
                </ListItemText>
              </MenuItem>
            </MenuList>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}