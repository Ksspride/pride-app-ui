import React from "react";
import axios from "axios";

const LoginService = async (credentials) => {
  const payLoad = {
    userName: credentials.userName,
    password: credentials.password,
  };
  console.log("payLoad : ", payLoad);
  debugger;
  return await axios.post("/api/public/authenticate", payLoad, {
    headers: { "Content-Type": "application/json" },
  });
};

export default LoginService;
