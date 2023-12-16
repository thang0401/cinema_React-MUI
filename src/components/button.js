import { Button } from "@mui/material";
function ButtonMUI(){
    <List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </ListItem>
    <Divider />
    <ListItem button divider>
      <ListItemText primary="Drafts" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Trash" />
    </ListItem>
    <Divider light />
    <ListItem button>
      <ListItemText primary="Spam" />
    </ListItem>
  </List>
}

export default ButtonMUI