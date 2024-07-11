import React, { useState } from "react";
import { TextField, Button, Box, Container } from "@mui/material";
import LoginService from "../service/LoginService";

const Login = ({ loginToLanding }) => {
  const [formValues, setFormValues] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    try {
      const response = await LoginService(formValues);
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem("t-at", response.data.token);
        loginToLanding();
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            padding: "2rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "white",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div>
            <p style={{ fontSize: "20px" }}>Login using your credentials</p>
          </div>
          <TextField
            id="userName"
            label="User name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formValues.userName}
            onChange={handleInputChange}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={formValues.password}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginTop: "2rem" }}
          >
            Log-in
          </Button>
          <Box sx={{ marginTop: "1rem" }}>
            <div>
              <a href="#">Forgot password?</a>
            </div>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
