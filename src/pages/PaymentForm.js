import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Divider from '@mui/material/Divider';
import zaloIcon from '../img/zaloIcon.png';
import sevenUp from '../img/7up.png';
import pepsi from '../img/pepsi.jpg';
import pepsi0 from '../img/pepsiZero.png';
import aquafina from '../img/aquafina.png';
import corn from '../img/corn.jpg';
import douCorn from '../img/double_corn.jpg';
import chip from '../img/tomato1.png';
import chip2 from '../img/tomato2.png';




const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
export default function PaymentForm() {
const [countCorn, setCountCorn] = useState(0);
const [countDrink, setCountDrink] = useState(0);
const [secondary, setSecondary] = React.useState(false);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Combo đi kèm
      </Typography>
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <FormGroup row>
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
           Đồ ăn 
          </Typography>
          <List>
          <Divider light />
            <ListItem >
            <img  src={corn} 
          alt="QR Code"
          style={{ width : '60px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="Bắp rang đơn" />
              <Typography variant="caption" display="block" gutterBottom>
              ĐV: {countCorn} </Typography>
              <ArrowDropUpIcon 
              onClick ={() => setCountCorn(countCorn + 1)}
              />
               <ArrowDropDownIcon
               onClick ={() => setCountCorn(countCorn - 1)}
               />
            </ListItem>
            <ListItem >
            <img  src={douCorn} 
          alt="QR Code"
          style={{ width : '75px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="Bắp rang đôi" />
              <Typography variant="caption" display="block" gutterBottom>
              ĐV: 0 </Typography>
              <ArrowDropUpIcon 
              />
               <ArrowDropDownIcon 
               />
            </ListItem>
            <ListItem >
            <img  src={chip} 
          alt="QR Code"
          style={{ width : '75px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="Chips phô mai " />
              <Typography variant="caption" display="block" gutterBottom>
            ĐV: 0 </Typography>
              <ArrowDropUpIcon />
               <ArrowDropDownIcon />
            </ListItem>
            <ListItem >
            <img  src={chip2} 
          alt="QR Code"
          style={{ width : '75px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="Khoai tây chiên" />
              <Typography variant="caption" display="block" gutterBottom>
            ĐV: 0 </Typography>
              <ArrowDropUpIcon />
               <ArrowDropDownIcon />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Thức uống
          </Typography>
          <List>
          <Divider light />
            <ListItem >
            <img  src={pepsi0} 
          alt="QR Code"
          style={{ width : '60px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="Pepsi Zero" />
              <Typography variant="caption" display="block" gutterBottom>
            ĐV: {countDrink} </Typography>
              <ArrowDropUpIcon 
              onClick = { () => setCountDrink(countDrink + 1)}
              />
               <ArrowDropDownIcon 
               onClick = { () => setCountDrink(countDrink-1 )}
               />
            </ListItem>
            <ListItem >
            <img  src={pepsi} 
          alt="QR Code"
          style={{ width : '75px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="Pepsi" />
              <Typography variant="caption" display="block" gutterBottom>
              ĐV: 0 </Typography>
              <ArrowDropUpIcon />
               <ArrowDropDownIcon />
            </ListItem>
            <ListItem >
            <img  src={sevenUp} 
          alt="QR Code"
          style={{ width : '75px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="Senven Up" />
              <Typography variant="caption" display="block" gutterBottom>
              ĐV: 0 </Typography>
              <ArrowDropUpIcon />
               <ArrowDropDownIcon />
            </ListItem>
            <ListItem >
            <img  src={aquafina} 
          alt="QR Code"
          style={{ width : '75px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="Aquafina" />
              <Typography variant="caption" display="block" gutterBottom>
              ĐV: 0 </Typography>
              <ArrowDropUpIcon />
               <ArrowDropDownIcon />
            </ListItem>
          </List>
          
        </Grid>
      </Grid>
    </Box>
  
      
    </React.Fragment>
  );
}