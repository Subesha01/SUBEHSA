import React from "react";
import { Button, Box, Typography } from "@mui/material";
function Navbar() {
  return (
    <div>
      <Typography component="h6" variant="h6">
        Home
      </Typography>
      <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Button
          variant="outlined"
          style={{ color: "green", borderColor: "green" }}
        >
          LOGIN
        </Button>
        <Button variant="contained" color="success">
          SIGN UP
        </Button>
      </Box>
    </div>
  );
}

export default Navbar;
