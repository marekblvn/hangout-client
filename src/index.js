import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import ColorSchemeProvider from "./contexts/color-scheme/color-scheme-provider";
import App from "./App";
import "./index.css";
import ThemeWrapper from "./components/theme-wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="hangout-dev.eu.auth0.com"
      clientId="CJGXCYrGzkmA0hq2HgR72Q4zHmACVMXJ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ColorSchemeProvider>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </ColorSchemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);