import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@mui/material";
import App from "./App";
import "./index.css";
import theme from "./utils/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-wdjg5l36.us.auth0.com"
      clientId="rR2MG0uuOeJ6IRs9YlOuznro4pttV3mB"
      authorizationParams={{
        redirect_uri: window.location.pathname,
      }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);