import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
// import { addProduct } from "../../redux/actions/productaction";
import { addDemande } from "../../../redux/actions/demandeaction";
// import { addProduct } from "../../redux/actions/productactions";
const ADDDemande = () => {
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const theme = createTheme();
// const [image, setImage] = React.useState('')
const [name, setName] = React.useState('')
const [numTel, setNumTel] = React.useState(0)
const [quantité, setQuantité] = React.useState(0)
const [dateEvent, setDateEvent] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    // eslint-disable-next-line no-console
    // data.append('file',image);
    data.append('name',name);
    data.append('numTel',numTel);
    data.append('quantité',quantité);
    data.append('dateEvent',dateEvent);
    console.log(data)
    dispatch(
      addDemande(data,navigate)
      
    );
 //console.log(data.get("file"))
  };
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Demande
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="Name"
                label="your Name"
                name="name"
                autoComplete="no"
                autoFocus
                onChange={(e) =>setName(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="numTel"
                label="numero de tel"
                type="Number"
                id="numTel"
                
                onChange={(e) =>setNumTel(e.target.value)}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="quantité"
                label="Quantity"
                type="Number"
                id="qte"
                onChange={(e) =>setQuantité(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Name"
                label="Date de reservation"
                name="dateEvent"
                autoComplete="no"
                autoFocus
                onChange={(e) =>setDateEvent(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Demander
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default ADDDemande;