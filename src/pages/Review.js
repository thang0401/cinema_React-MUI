import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Detail_payment from '~/components/detail_payment';
import { useState } from 'react';
import vcbIcon from '../img/vcbIcon.jpg';
import moIcon from '../img/moIcon.png';
import vietel from '../img/vietel.png';
import zaloIcon from '../img/zaloIcon.png';





const products = [
  {
    name: 'Thành phố: Hồ Chí Minh',
    desc: 'Chi nhánh: Cinema Gò Vấp',
  },
  
  {
    name: 'Vé xem phim Bố già',
    desc: 'Ghế thường D7',
    price: '85.000 VND',
  },
  {
    name: 'Bắp rang Đơn',
    desc: 'Số lượng : {countCorn}',
    price: '40.000 VND',
  },
  {
    name: 'Pepsi Zero',
    desc: 'Số lượng: 2',
    price: '60.000 VND',
  },
];


  


export default function Review() {
  const [showInfor, setShowinfor] = useState(false);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding style={{marginBottom: '30px'}}>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            185.000VND
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
           Chọn phương thức thanh toán
          </Typography>
          
        </Grid>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button >
          <img  src={vcbIcon} 
          alt="QR Code"
          style={{ width : '40px' , height : 'auto' , marginRight : '10px'}} />
            <ListItemText
              onClick={() => setShowinfor(!showInfor)}
              primary="Viecombank" 
            />
          </ListItem>
          {showInfor && <Detail_payment style = {{marginRight : '400px'}} />}
          <Divider />
          <ListItem button >
          <img  src={moIcon} 
          alt="QR Code"
          style={{ width : '40px' , height : 'auto' , marginRight : '10px'}} />
            <ListItemText primary="Momo" />
          </ListItem>
            <ListItem button>
            <img  src={vietel} 
          alt="QR Code"
          style={{ width : '90px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="" />
            </ListItem>
            <Divider light />
            <ListItem button>
            <img  src={zaloIcon} 
          alt="QR Code"
          style={{ width : '40px' , height : 'auto' , marginRight : '10px'}} />
              <ListItemText primary="Zalo pay" />
            </ListItem>
          </List>
      </Grid>
    </React.Fragment>
  );
}