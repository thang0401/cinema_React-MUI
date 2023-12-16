import  Typography  from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import React from 'react';
import  Button  from '@mui/material/Button';

function Detail_payment (){

  return (
    <div style = {{marginLeft : '80px'}} >
      <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>Loại thẻ: Viecombank Visa </Typography> 
      <Divider />
      <Typography variant='span' sx={{fontWeight: 700}}>Tên TK: Nguyen Cao Thang</Typography>
      <Divider />
      <Typography variant='span' sx={{fontWeight: 700}}>Số: xxxx-xxxx-xxxx-1234</Typography>
      <Divider />
      <Typography variant='span' sx={{fontWeight: 700}}>Hạn thẻ: 04/2024</Typography>
      <Divider />
      <Button variant="outlined">Đổi Thẻ </Button>
      <Divider 
      style={{marginBottom : '30px'}}
      />
    
      
    </div>
  )
}
export default Detail_payment