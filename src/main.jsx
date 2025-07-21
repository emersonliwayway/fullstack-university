import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./auth/AuthContext.jsx";
import { ApiProvider } from "./api/ApiContext.jsx";
import Layout from "./layout/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ApiProvider>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </ApiProvider>
    </AuthProvider>
  </StrictMode>
);
