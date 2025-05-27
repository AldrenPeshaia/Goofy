import { BrowserRouter, Routes, Route } from "react-router";
import { publicPath } from "../util/routing";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";

export const PublicApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={publicPath.login} element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
