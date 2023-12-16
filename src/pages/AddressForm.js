import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Booking from "../css/booking.css";
import { SettingsBackupRestore } from "@mui/icons-material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect } from "react";
import '../css/address.css'
const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "J"];


const handleSeatClick = () => {
  Button.setBackgroundColor("#D2386C");
};
export default function AddressForm() {
  const [color, setColor] = React.useState("#6B5B95");
  const [active, setActive] = React.useState([]);
  const [add, setAdd] = React.useState();
  const [age, setAge] = React.useState('');
  const [age1, setAge1] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value );
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setAge1(event.target.value );
  };


  console.log(active);
 

  const handleAdd = (item) => {
   setActive([...active, item]);
     const find = active.indexOf(items => items === item )
     if(find === -1){
      setAdd(item)
     }
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Chọn chi nhánh
      </Typography>

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Chọn thành phố</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>TP Hà Nội</MenuItem>
          <MenuItem value={2}>TP HCM</MenuItem>
          <MenuItem value={3}>TP Đà Nẵng</MenuItem>
          <MenuItem value={4}>TP Cần Thơ</MenuItem>
          <MenuItem value={5}>TP Tây Nguyên</MenuItem>
          <MenuItem value={6}>TP Thủ Dầu 1</MenuItem>
          <MenuItem value={7}>TP Dĩ An</MenuItem>
          <MenuItem value={8}>TP Vĩnh Long</MenuItem>
          <MenuItem value={9}>TP Nam Định</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth style={{marginTop: '30px'}}>
        <InputLabel id="demo-simple-select-label">Chọn chi nhánh</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age1}
          label="Age"
          onChange={handleChange2}
        >
          <MenuItem value={1}>Cinema Landmark 81</MenuItem>
          <MenuItem value={2}>Cinema Gò Vấp</MenuItem>
          <MenuItem value={3}>Cinema Hoàng Văn Thụ</MenuItem>
          <MenuItem value={4}>Cinema Thảo Điền</MenuItem>
          <MenuItem value={5}>Cinema VinCom Thủ Đức</MenuItem>
          <MenuItem value={6}>Cinema Aeon Tân Phú</MenuItem>
          <MenuItem value={7}>Cinema Sư Vạn Hạnh</MenuItem>
          <MenuItem value={8}>Cinema Tân Bình</MenuItem>
          <MenuItem value={9}>Cinema Củ Chi</MenuItem>
        </Select>
      </FormControl>
    </Box>

      <Typography variant="h6" gutterBottom>
        Chọn ngày chiếu
      </Typography>

      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: "background.paper",
            color: "text.secondary",
            "& svg": {
              m: 1.5,
            },
            "& hr": {
              mx: 0.5,
            },
          }}
        >
          <Button variant="text">09/12</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text">10/12</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text">11/12</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text">12/12</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="contained">13/12</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text">14/12</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text">15/12</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text">16/12</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="text">17/12</Button>
        </Box>
      </div>

      <Typography variant="h6" gutterBottom>
        Chọn ghế
      </Typography>

      <Grid container alignItems="center" justifyContent="center">
        <Button
          variant="outlined"
          style={{ width: "400px", height: "20px", marginBottom: "100px" }}
        >
          {" "}
          màn hình{" "}
        </Button>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid alignItems="center" justifyContent="center">
            {rows.map((row) => (
              <Button
                style={{
                  minWidth: "50px",
                  height: "30px",
                  margin: "5px 0px 0px 5px ",
                }}
                variant="contained"
                onClick={handleSeatClick}
              >
                {`${"A"}${row}`}
              </Button>
            ))}
          </Grid>

          <Grid>
            {rows.map((row) => (
              <Button
                style={{
                  minWidth: "50px",
                  height: "30px",
                  margin: "5px 0px 0px 5px ",
                }}
                variant="contained"
                onClick={handleSeatClick}
              >
                {`${"B"}${row}`}
              </Button>
            ))}
          </Grid>

          <Grid>
            {rows.map((row) => (
              <Button
                style={{
                  minWidth: "50px",
                  height: "30px",
                  margin: "5px 0px 0px 5px ",
                }}
                variant="contained"
                onClick={handleSeatClick}
              >
                {`${"C"}${row}`}
              </Button>
            ))}
          </Grid>

          <Grid>
            {rows.map((item, index) => (
              <Button
                style={{
                  minWidth: "50px",
                  height: "30px",
                  margin: "5px 0px 0px 5px",
                }}
                variant="contained"
                key={index}
                id={add === item ? "btn1":"btn"}
                onClick={() => {
                  handleAdd(item)
                 
                }}
              >
                {`${"D"}${item}`}
              </Button>
            ))}
          </Grid>

          <Grid>
            {rows.map((row) => (
              <Button
                style={{
                  minWidth: "50px",
                  height: "30px",
                  margin: "5px 0px 0px 5px ",
                  backgroundColor: "#6B5B95",
                }}
                variant="contained"
                onClick={handleSeatClick}
              >
                {`${"E"}${row}`}
              </Button>
            ))}
          </Grid>

          <Grid>
            {rows.map((row) => (
              <Button
                style={{
                  minWidth: "50px",
                  height: "30px",
                  margin: "5px 0px 0px 5px ",
                  backgroundColor: "#6B5B95",
                }}
                variant="contained"
                onClick={handleSeatClick}
              >
                {`${"F"}${row}`}
              </Button>
            ))}
          </Grid>

          <Grid>
            {rows.map((row, index) => (
              <Button
                style={{
                  minWidth: "50px",
                  height: "30px",
                  margin: "5px 0px 0px 5px",
                  backgroundColor: "#6B5B95",
                }}
                variant="contained"
                onClick={handleSeatClick}
              >
                {`${"G"}${row}`}
              </Button>
            ))}
          </Grid>

          <Grid>
            {rows.map((row) => (
              <Button
                style={{
                  minWidth: "50px",
                  height: "30px",
                  margin: "5px 0px 0px 5px ",
                }}
                variant="contained"
                onClick={handleSeatClick}
              >
                {`${"H"}${row}`}
              </Button>
            ))}
          </Grid>

          <Grid>
            {rows.map((row) => (
              <Button
                style={{
                  minWidth: "50px",
                  height: "30px",
                  margin: "5px 0px 0px 5px ",
                }}
                variant="contained"
                // onClick={handleClick}
              >
                {`${"I"}${row}`}
              </Button>
            ))}
          </Grid>
        </Grid>

        <Grid style={{ marginTop: "40px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#1976d2" }}
          ></Button>
          <Typography variant="h7" gutterBottom>
            {" "}
            ghế thường{" "}
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "#6B5B95" }}
          ></Button>
          <Typography variant="h7" gutterBottom>
            {" "}
            ghế VIP
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "#939597" }}
          ></Button>
          <Typography variant="h7" gutterBottom>
            {" "}
            Đã bị đặt{" "}
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "#D2386C" }}
          ></Button>
          <Typography variant="h" gutterBottom>
            {" "}
            Đang chọn{" "}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
