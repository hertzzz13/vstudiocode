import { Box, Button, Grid, TextField } from "@mui/material";
import Header from "../../components/Header";
import {  useState } from "react";

export default function User() {
  const [account_no, setAccount_no] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const user = {
      account_no,
      firstname,
      lastname,
      password,
      address,
      designation,
      email,
      position,
      status,
    };
    console.log(user);
    fetch("http://localhost:8080/user/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((result) => {
        console.log(result.data);

        if (result.data === "Success") {
          alert("Success");
        } else {
          alert("Success");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Service Error");
      });
  };

  return (
    <Box m="15px">
      <Header title="CREATE USER" />
      <form onSubmit={handleClick}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Account Number"
              variant="outlined"
              fullWidth
              value={account_no}
              onChange={(e) => setAccount_no(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              fullWidth
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Designation"
              variant="outlined"
              fullWidth
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Position"
              variant="outlined"
              fullWidth
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Status"
              variant="outlined"
              fullWidth
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button sx={{ mt:1, width:"15%"}} variant="contained" type="submit" color="secondary">
          ADD
        </Button>
      </form>
    </Box>
  );
}
