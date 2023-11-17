import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Menu = () => {
  return (
    <div>
      <center>
        <Container>
          <Grid marginTop={25} marginLeft={5}>
            <Paper
              style={{
                backgroundImage:
                  'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgwczY8uFac77ydbCxBt4htfaBYWVnJfBzg&usqp=CAU")',
              }}
            >
              <br></br>
              <h1 style={{ color: "red" }}> User Login </h1>
              <br></br>
              <br></br>
              <label for="Email id"></label>
              <input id="name" type="Email id" placeholder="Email id"></input>
              <br></br>
              <br></br>
              <label for="Email id"></label>
              <input id="name" type="Email id" placeholder="Password"></input>
              <br></br>
              <br></br>
              <Button variant="contained">LOGIN</Button>
            </Paper>
          </Grid>
        </Container>
      </center>
    </div>
  );
};
export default Menu;
