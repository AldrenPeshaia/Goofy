import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/index.css";
import React from "react";
import { AppGuard } from "./AppGuard";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppGuard />
    </QueryClientProvider>
  </React.StrictMode>
);
